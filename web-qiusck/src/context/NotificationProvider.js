import './style.css'
import { createContext ,React, useContext, useEffect, useRef, useState} from "react"
const notificationContext=createContext();
export default function NotificationProvider({children}){
    const [notification ,setNotification]=useState({
        type:'',
        value:''
    })
    
    const notRef=useRef();
    useEffect(()=> {
        notRef.current?.classList.add('show')
        
        // notRef.current?.style.bottom="10px"
        console.log("this is fucked up",notRef.current)
        // notRef.current?.style.opacity=1
    },[notification.value]) 
    let timeoutId;
    const [bgColor,setBgColor]=useState('bg-red-400')
    const updateNotification=(type,value)=>{
        if(timeoutId) return clearTimeout(timeoutId)
        if(!type || !value)return 
        switch(type){
            case 'error':
                setBgColor('#fc81811')
             break;
            case 'warning':
                setBgColor('#f6ad551');
                break;
            case 'success':
                setBgColor('#68d3911')
                break;
             default :setBgColor('#fc81811')       
        }
        setNotification({type,value})
        timeoutId= setTimeout(()=>{
            setNotification({type:'',value:''})
        },3000)
    }
    return (
        <>
       <notificationContext.Provider value={{updateNotification}}>
            {children}
       </notificationContext.Provider>
       {notification.value? <p  style={{ backgroundColor:`${bgColor}`,  borderRadius: '9999px', /* rounded-full */
  fontWeight: 600,/* font-semibold */
  fontStyle: 'italic',/* italic */
  padding: '64px', /* px-16 py-2 */
  margin: '16px', /* m-4 */
  color: 'white', /* text-white */
  bottom: '56px', /* bottom-14 */
  opacity: 0,/* opacity-0 */
  position: 'fixed', /* fixed */
  left: '50% ',/* left-1/2 */
  transform: 'translateX(-50%)'}} ref={notRef} >{notification.value}</p>:null}
        </>

    )
}
export const useNotification=()=> useContext(notificationContext)