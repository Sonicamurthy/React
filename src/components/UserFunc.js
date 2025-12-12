import { useState } from "react";

const UserFunc = ({name}) =>{
    const [count,setCount] =useState(0);
     const [count2,setCount2] =useState(1);

    return(
        <div className="user-card">
            <h1>{count}</h1>
              <h1>{count2}</h1>
            <h3> {name}</h3>
            <button onClick={()=>setCount(count+1)}>inc</button>
        </div>
    )
}

export default UserFunc;