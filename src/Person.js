import React from "react";
import './App.css';
class Person extends React.Component  { 
  state =  {Person: {
        fullName: "Mabrouk Touil",
        bio: "Still learning..",
        // imgsrc="../me.jpg",
        // <imgsrc="/public/me.jpg" alt=""/> 
        profession: "Student in GoMyCode"
      },
      isshow: true
    };

    handleShowPerson = () => {this.setState({...this.state,isshow: !this.state.isshow});};


    render() {
        return (
          <div>
            {this.state.isshow && (
              <div>
                <h1>{this.state.Person.fullName}</h1>
                <h1>{this.state.Person.bio}</h1>
                <img src="../me.jpg"/>
                <img src={this.state.Person.img} alt=""></img>
                <h1>{this.state.Person.profession}</h1>
                <br></br>
              </div>
            )}
    
            <button onClick={this.handleShowPerson}>click here</button>
          </div>
        );
      }
    
    };
    export default Person;