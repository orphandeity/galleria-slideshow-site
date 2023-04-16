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
      transition: {
        duration: 0.65,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: 0.5,
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        layout
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
        key={asPath}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
