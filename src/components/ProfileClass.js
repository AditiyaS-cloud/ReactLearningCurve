import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dummy Name",
      location: "Dummy Location",
    };
    console.log("child - constructor");
  }

  async componentDidMount() {
    console.log("child - componentDidMount");
    const data = await fetch("https://api.github.com/users/AditiyaS-cloud");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("child- component will unmount");
  }
  render() {
    console.log("child-render");
    return (
      <div>
        <h1> Profile Class Component</h1>
        <img src={this.state?.userInfo?.avatar_url}></img>
        <h2>Name: {this.state?.userInfo?.name}</h2>
        <h2>Location: {this.state?.userInfo?.location}</h2>
      </div>
    );
  }
}

export default Profile;
