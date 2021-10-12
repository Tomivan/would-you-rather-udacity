import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authed-user";

import { Site, Nav, Grid } from "tabler-react";

class SiteWrapper extends Component {
  logout = () => {
    this.props.dispatch(setAuthedUser(null));
    // When user is logged out, return to the signin page
    this.props.history.push("/");
  };

  login = () => {
    this.props.history.push("/login");
  };

  render() {
    const { authedUser, users } = this.props;

    const navBarItems = authedUser
      ? [
          {
            value: "Home",
            to: "/",
            icon: "home",
            LinkComponent: NavLink,
            useExact: true
          },
          {
            value: "Leaderboard",
            to: "/leaderboard",
            icon: "award",
            LinkComponent: NavLink,
            useExact: true
          },
          {
            value: "Add Question",
            to: "/add",
            icon: "plus-circle",
            LinkComponent: NavLink,
            useExact: true
          }
        ]
      : [];

    const accountDropdownOptions = authedUser
      ? {
          avatarURL: users[authedUser].avatarURL,
          name: users[authedUser].name,
          description: users[authedUser].id,
          options: [
            { icon: "log-out", value: "Sign Out", onClick: () => this.logout() }
          ]
        }
      : false;

    let loginLink;

    if (!authedUser) {
      loginLink = (
        <NavLink to="login" className="nav-item font-weight-bold text-dark">
          SIGN IN
        </NavLink>
      );
    } else {
      loginLink = false;
    }

    return (
      <Site.Wrapper
        headerProps={{
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              {loginLink}
            </Nav.Item>
          ),
          accountDropdown: accountDropdownOptions
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          copyright: (
            <React.Fragment className="text-center">
              Copyright © 2021. All rights reserved.
            </React.Fragment>
          )
        }}
      >
        <div className="my-3 my-md-5">
          <div className="container">
            <Grid.Row>
              <Grid.Col sm={12} md={10} offsetMd={1} lg={8} offsetLg={2}>
                {this.props.children}
              </Grid.Col>
            </Grid.Row>
          </div>
        </div>
      </Site.Wrapper>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  };
}

export default withRouter(connect(mapStateToProps)(SiteWrapper));