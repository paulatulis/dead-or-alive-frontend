import React from "react";
import Human from "../components/Human";
import Zombie from "../components/Zombie";
import Quiz from "../components/Quiz";


class Profile extends React.Component{
  constructor(){
    super()
    this.state={
      zombie: false
    }
  }

// componentDidMount(){
//   fetch('localhost:3000/')
//   .then(res => res.json())
//   .then(console.log)
// }

handleSubmit = (e, props) =>{
  console.log(e, props)
}

  render(){
    return(
      <div>
        <Quiz handleSubmit={this.handleSubmit}/>
        <Human />
        <Zombie />
      </div>
    )
  }
}

export default Profile;
