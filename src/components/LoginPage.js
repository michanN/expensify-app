import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithGithub } from '../actions/auth';

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It is time to get your life under control.</p>
      <button className="button button--login" onClick={props.startLoginWithGoogle} >Login with Google</button>
      <button className="button button--login button--github" onClick={props.startLoginWithGithub} >Login with GitHub</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithGithub: () => dispatch(startLoginWithGithub())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
