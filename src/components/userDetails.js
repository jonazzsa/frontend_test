import React, { Component } from "react";

export default class UserDetails extends React.Component {
  constructor() {
    super();
  }

  state = {
    heading: null,
    description: null,
    position: 0,
  };

  updateCardInfo(position, heading, description) {
    this.setState({
      position: position,
      heading: heading,
      description: description,
    });
  }


  render() {
    return (
      <div className="parent-container">
        <div className="c-card u-text--centered custom-card">
          <div className="c-card__header u-border--bottom u-bg-secondary-trans custom-card-header">
            <img
              src={this.props.userInfo.picture}
              className="u-image--rounded image-border"
            />
          </div>
          <div>
            <span className="c-card__subtitle u-margin--none">
              {this.state.description || this.props.userInfo.name.description}
            </span>
            <h1 className="c-card__title u-text--lg">{this.state.heading || this.props.userInfo.name.heading}</h1>
            <ul className="c-tabs l-row u-grid-justify--center u-padding--md">
              <li
                className={
                  this.state.position === 0
                    ? "top-hightlight c-tabs__link u-padding--sm"
                    : "c-tabs__link u-padding--sm top-dehightlight"
                }
                onMouseOver={() =>
                  this.updateCardInfo(
                    0,
                    this.props.userInfo.name.heading,
                    this.props.userInfo.name.description
                  )
                }
              >
                <img
                  src="assets/icons/svg/misc/user.svg"
                  className="u-image--24"
                />
              </li>
              <li
                className={
                  this.state.position === 1
                    ? "top-hightlight c-tabs__link u-padding--sm"
                    : "c-tabs__link u-padding--sm top-dehightlight"
                }
                onMouseOver={() =>
                  this.updateCardInfo(
                    1,
                    this.props.userInfo.email.heading,
                    this.props.userInfo.email.description
                  )
                }
              >
                <img
                  src="assets/icons/svg/misc/email.svg"
                  className="u-image--24"
                />
              </li>
              <li
                className={
                  this.state.position === 2
                    ? "top-hightlight c-tabs__link u-padding--sm"
                    : "c-tabs__link u-padding--sm top-dehightlight"
                }
                onMouseOver={() =>
                  this.updateCardInfo(
                    2,
                    this.props.userInfo.dob.heading,
                    this.props.userInfo.dob.description
                  )
                }
              >
                <img
                  src="assets/icons/svg/misc/calendar.svg"
                  className="u-image--24"
                />
              </li>
              <li
                className={
                  this.state.position === 3
                    ? "top-hightlight c-tabs__link u-padding--sm"
                    : "c-tabs__link u-padding--sm top-dehightlight"
                }
                onMouseOver={() =>
                  this.updateCardInfo(
                    3,
                    this.props.userInfo.address.heading,
                    this.props.userInfo.address.description
                  )
                }
              >
                <img
                  src="assets/icons/svg/misc/map-location.svg"
                  className="u-image--24"
                />
              </li>
              <li
                className={
                  this.state.position === 4
                    ? "top-hightlight c-tabs__link u-padding--sm"
                    : "c-tabs__link u-padding--sm top-dehightlight"
                }
                onMouseOver={() =>
                  this.updateCardInfo(
                    4,
                    this.props.userInfo.phone.heading,
                    this.props.userInfo.phone.description
                  )
                }
              >
                <img
                  src="assets/icons/svg/misc/call.svg"
                  className="u-image--24"
                />
              </li>
              <li
                className={
                  this.state.position === 5
                    ? "top-hightlight c-tabs__link u-padding--sm"
                    : "c-tabs__link u-padding--sm top-dehightlight"
                }
                onMouseOver={() =>
                  this.updateCardInfo(
                    5,
                    this.props.userInfo.password.heading,
                    this.props.userInfo.password.description
                  )
                }
              >
                <img
                  src="assets/icons/svg/misc/locked.svg"
                  className="u-image--24"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
