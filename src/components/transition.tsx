import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      x: 3000,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.65,
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.65,
      },
    },
    exit: {
      opacity: 0,
      x: -2000,
      transition: {
        type: "tween",
        ease: "backIn",
        duration: 0.65,
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        layout
        variants={variants}
        animate="in"
        initial="out"
        exit="exit"
        key={asPath}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
