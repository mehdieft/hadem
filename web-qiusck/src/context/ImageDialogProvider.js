import { useState,createContext,useContext } from 'react';
import {motion,AnimatePresence} from 'framer-motion'

const backdrop={
    visible:{opacity:1},
    hidden:{opacity:0}
}

const imageDialogContext=createContext();
export default function ImageDialogProvider  ({ children })  {
    const [showModal,setShowModal]=useState(true)
    const [image,setImage]=useState('')
    const openDialog=(imageUrl)=>{
        setShowModal(true)
        setImage(imageUrl)

    }
    const closeDialog=()=>{
        setShowModal(false);
        setImage('');
    }
    return (
        <imageDialogContext.Provider value={openDialog}>
            <AnimatePresence mode='wait'>
                {showModal && (
                    <motion.div
                    style={{position:'fixed',top:0,left:0,
                width:'100%',height:'100%',background:'rgba(0,0,0,0.5)',zIndex:1}}
                    variants={backdrop}
                    animate="visible"
                    initial="hidden"
                    className='backdrop'
                    >

                    </motion.div>
                )}

            </AnimatePresence>
            
        </imageDialogContext.Provider>

    )
}
export const useImageDialog=()=> useContext(imageDialogContext)