import React from 'react';

class UserClass extends React.Component{
    constructor (props){
        super(props)
        this.state={
            userData:{
            name:"Dummy",
            location:"bang",
            company:"lalala",
            followers:98347
            }
        }

    }

     async componentDidMount(){
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json =await data.json();

        console.log(json);

        this.setState({
            userData:json,
        })
    }


    render (){
         const {name,location,company,followers} =this.state.userData;
          console.log("Rendering:", name, location);
        return(
            <div className='user-card'>
                <h1>HEllo</h1>
                <h3>{name} - {location} -{company}  -{followers}</h3>

            </div>
        )
    }
}

export default UserClass;