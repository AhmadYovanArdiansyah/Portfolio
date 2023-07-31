import { motion } from "framer-motion";

export default function Project() {
  const boxColors = [
    { duration: 0.3 },
    { duration: 0.4 },
    { duration: 0.5 },
    { duration: 0.6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full absolute pb-20">
      <div className="h-full grid grid-cols-2 gap-10">
        {boxColors.map((box, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: box.duration }} // Menyertakan properti duration dari setiap objek dalam boxColors
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.9 }}
            className={`h-full w-full bg-[#0B0B0B] rounded-lg`}
          ></motion.div>
        ))}
      </div>
    </motion.div>
  );
}
