import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";
export const LazyLoadComponent = () => {
    
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);
    const imageLoaded = () => {
      setImageLoading(false);
      setTimeout(() => setPulsing(false), 600);
    };
    return (
    <>
      <div
        className={`${pulsing ? "pulse" : ""} loadable`}
        style={{ width: "300px", background: "#ccc" }}
      >
        <motion.img
          id="img-lazy-load"
          initial={{ height: "300px", opacity: 0 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imageLoading ? "300px" : "auto",
            opacity: imageLoading ? 0 : 1,
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } })
          }
          onLoad={imageLoaded}
          width="100%"
          src="https://source.unsplash.com/random"
        />
      </div>
    </>
  );
};
