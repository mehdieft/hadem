import { useState,createContext,useContext } from 'react';



const imageDialogContext=createContext();
export default function NotificationProvider  ({ children })  {
    return (
        <imageDialogContext.Provider>
            
        </imageDialogContext.Provider>

    )
}
export const useImageDialog=()=> useContext(imageDialogContext)