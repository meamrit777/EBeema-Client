import { motion } from "framer-motion/dist/es/index";

const DashSidebar = ({ children }) => {
  return (
    <>
      <div className="main">
        <motion.div
          animate={{ width: "200px" }}
          className="dashSidebar"
        ></motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default DashSidebar;
