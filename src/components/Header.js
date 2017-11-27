import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div>
          <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
          </Link>
        </div>
        <div>
          <span className="header__welcome">Hello {props.name}!</span>
          <button className="button button--link" onClick={props.startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = state => ({
  name: state.auth.name
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
