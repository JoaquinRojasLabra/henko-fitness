import { motion } from "framer-motion";

export function AnimatedText({ text, className, delay = 0.1, as: Tag = "h1" }) {
  const letters = Array.from(text);

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.035, delayChildren: delay },
          },
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
