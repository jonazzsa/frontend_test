import React, { Component } from "react";
import UserDetails from "../components/userDetails";

export default class MainDisplay extends React.Component {
  state = {
    name: null,
    email: null,
    dob: null,
    address: null,
    phone: null,
    password: null,
    picture: null,
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        let results = data.results[0];
        let rawDate = new Date(results.dob.date);
        this.setState({
          name: results.name.first + " " + results.name.last,
          email: results.email,
          dob:
            rawDate.getDay() +
            "/" +
            rawDate.getMonth() +
            "/" +
            rawDate.getFullYear(),
          address:
            results.location.street.number + " " + results.location.street.name,
          phone: results.phone,
          password: results.login.password,
          picture: results.picture.large,
        });
      });
  }

  render() {
    return (
      <UserDetails
        userInfo={{
          name: {
            heading: this.state.name,
            description: "Hi, My name is",
          },
          email: {
            heading: this.state.email,
            description: "My email address is",
          },
          dob: {
            heading: this.state.dob,
            description: "My birthday is",
          },
          address: {
            heading: this.state.address,
            description: "My address is",
          },
          phone: {
            heading: this.state.phone,
            description: "My phone number is",
          },
          password: {
            heading: this.state.password,
            description: "My password is",
          },
          picture: this.state.picture,
        }}
      />
    );
  }
}
