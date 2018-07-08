import React, { Component } from "react"
import { WContext } from "../../index"
import Img from "../Img/Img"
import "./Header.css"

class Header extends Component {
  state = {
    logoutDropdown: false
  }

  dismissDropdown = (e) => {
    if (this.dropdownContainer.contains(e.target)) {
      return
    }

    this.setState({
      logoutDropdown: false
    })
  }

  toggleLogoutDropdown = () => {
    this.setState((ps) => ({
      logoutDropdown: !ps.logoutDropdown
    }))
  }

  componentDidMount() {
    window.addEventListener("click", this.dismissDropdown)
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.dismissDropdown)
  }

  render() {
    return (
      <div className="header">
        <div className="hamburger-icon">
          <span />
          <span />
          <span />
        </div>

        <div className="logo">
          <Img src="city-falcon" alt="logo" />
        </div>

        <div
          className={`user-img ${
            this.state.logoutDropdown ? "with-dropdown " : ""
          }`}
          onClick={this.toggleLogoutDropdown}
          ref={(el) => (this.dropdownContainer = el)}
        >
          <Img src="avatar" alt="avatar" />
          <span className="avatar-name">Jane Doe</span>
          <span className="dropdown-arrow" />
          <div className="user-img__dropdown">
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
