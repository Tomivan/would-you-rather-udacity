import React, { Component } from "react";
import { Error404Page } from "tabler-react";
import { Link } from 'react-router-dom';
import SiteWrapper from "./SiteWrapper";

class NoMatch extends Component {
  render() {
    return (
      <SiteWrapper>
        <Link to="/login" className="text-center">Login</Link>
        <Error404Page />
      </SiteWrapper>
    );
  }
}
export default NoMatch;