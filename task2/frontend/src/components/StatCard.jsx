import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon
}) => {
  return (
    <motion.div
      className="glass stat-card"
      whileHover={{
        scale: 1.05,
        y: -5
      }}
      transition={{
        duration: 0.2
      }}
    >
      <div className="stat-icon">
        {icon}
      </div>

      <h4>{title}</h4>

      <h2>{value}</h2>
    </motion.div>
  );
};

export default StatCard;