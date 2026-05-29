-- Henko Fitness v2 — Supabase Schema
-- Ejecutar en SQL Editor de Supabase Dashboard

-- 1. Profiles (vinculado a auth.users automáticamente vía trigger)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can read all profiles"
  ON profiles FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.email,
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 2. Disciplines
CREATE TABLE disciplines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  kanji TEXT,
  description TEXT,
  icon TEXT DEFAULT 'Lightning',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE disciplines ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read disciplines"
  ON disciplines FOR SELECT USING (true);

CREATE POLICY "Admins can insert disciplines"
  ON disciplines FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can update disciplines"
  ON disciplines FOR UPDATE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can delete disciplines"
  ON disciplines FOR DELETE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 3. Schedules
CREATE TABLE schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  discipline_id UUID REFERENCES disciplines(id) ON DELETE CASCADE,
  day_of_week TEXT NOT NULL CHECK (day_of_week IN ('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado')),
  time TIME NOT NULL,
  duration INT DEFAULT 60,
  quota INT DEFAULT 15,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read schedules"
  ON schedules FOR SELECT USING (true);

CREATE POLICY "Admins can manage schedules"
  ON schedules FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 4. Bookings
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  schedule_id UUID REFERENCES schedules(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own bookings"
  ON bookings FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bookings"
  ON bookings FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can read all bookings"
  ON bookings FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 5. Payments (para integración con Flow.cl)
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount INT NOT NULL,
  method TEXT DEFAULT 'flow',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed', 'refunded')),
  flow_order_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own payments"
  ON payments FOR SELECT USING (auth.uid() = user_id);

-- Insertar disciplinas iniciales
INSERT INTO disciplines (name, kanji, description) VALUES
  ('CrossFit', '力', 'Entrenamiento funcional de alta intensidad. Fuerza, resistencia y comunidad en cada WOD.'),
  ('GAP', '体', 'Glúteos, abdomen y piernas. Tonifica y fortalece tu núcleo con sesiones dinámicas.'),
  ('Gimnasia', '技', 'Control corporal, movilidad y destreza. Domina tu propio peso con técnica.'),
  ('Halterofilia', '勝', 'Levantamiento olímpico. Potencia explosiva y técnica precisa bajo la barra.');
