import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/404notfound.png';

class NotFound extends Component {
  render() {
    return (
      <section className="hakita-notfoundpage">
        <div className="notfound-image">
          <img src={NotFoundImage} alt="" />
        </div>
        <Link to="/">
          <button className="btn btn--hakita">Back to Pages</button>
        </Link>
      </section>
    )
  }
}

export default NotFound;