import  React, { useState , useEffect } from 'react'

export const DateTime = ({size, weight}) => {

    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const hora = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
       });

    return(
         <h1
           style={{fontSize:size, fontWeight:weight}} className="jost text-white flex ml-auto">
            {hora}
          </h1>
    ) 
}

export default DateTime
