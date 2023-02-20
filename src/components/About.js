import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

// FUNCTIONAL COMP
// const AboutUs = () =>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is React Learning Curve</p>
//            <ProfileFunctionalComponent name={"Aditiya"}/>
//            <Profile name={"AditiyaClass"} xyz="abc"/>
//         </div>
//     )
// }

//class based component
class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    //best place to make api calls
    console.log("Parent - componentDidMount");
  }

  componentWillUnmount() {
    console.log("Parent-component will unmount");
  }

  render() {
    console.log("Parent - render");
    return <h1>Offer</h1>;
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is React Learning Curve</p>
        <Profile name={"AditiyaClass"} xyz="abc" />
      </div>
    );
  }
}

export default AboutUs;
