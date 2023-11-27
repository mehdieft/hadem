import { AnimatePresence, motion, useCycle } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';



import './style.css';

const links = [
  { name: "خانه", to: "/", id: 1 },
  { name: "گالری", to: "/Gallery", id: 2 },
  { name: "شهدای امروز", to: "/shohada", id: 3 },
  { name: "خاطرات پیشکسوتان", to: "/diary", id: 4 }
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
const SideBard=()=>{
    const [open, cycleOpen] = useCycle(false, true);
    return (
        <>
          <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 100 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 100,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.div
              className="container-motion"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                style={{fontFamily:'diba'}}
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <IconButton sx={{backgroundColor:'white'}} onClick={cycleOpen}>{open ? <CancelIcon/> :<MenuIcon/>}</IconButton>
      </div>
    </main>


        </>
    )
}
export default SideBard