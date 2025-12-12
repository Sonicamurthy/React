import UserContext from "../utils/UserContext";
import UserClass from "./Userclass";
import React from "react";


class About extends React.Component{
     
    constructor (){
        super();
        // console.log("about constructor" )  
     }


    // componentDidMount(){
    //     console.log("about component did mount" )  
    // }

     render(){
        // console.log("about render ")
        return(
            <div>
                <UserClass name={"suhas"}/>
                <UserContext.Consumer>
                   { 
                   (({loggedInUser})=>(
                   <h1 className="font-bold">{loggedInUser} from the usercontext using the consumer in Class Component</h1>
                    ))
                   }
                </UserContext.Consumer>
            </div>
        )
     }
}

export default About 
