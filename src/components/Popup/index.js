import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import UpdatePassword from './UpdatePassword';
import Signin from './Signin';
import Comment from './Comment';
import ErrorMessage from './ErrorMessage';

import './popup.scss';

const Popup = ({
  displayLogin,
  displaySignin,
  displayComment,
  displayUpdatePassword,
  displayErrorMessage,
  closedErrormessage,
  toggleDisplaySignin,
  toggleDisplayLogin,
  toggleDisplayComment,
  toggleDisplayUpdatePassword,
  changeField,
  email,
  isLogged,
  password,
  nickname,
  comment,
  rating,
  submitLogin,
  submitSignin,
  submitUserUpdate,
  submitUserPassword,
  submitComment,
  errorContent,
  handleLogOut,
  clearInput,
}) => (
  <>
    {displayLogin && (
    <Login
      toggleDisplayLogin={toggleDisplayLogin}
      changeField={changeField}
      email={email}
      password={password}
      submitLogin={submitLogin}
      clearInput={clearInput}
    />
    )}
    {displaySignin && (
    <Signin
      toggleDisplaySignin={toggleDisplaySignin}
      changeField={changeField}
      email={email}
      password={password}
      nickname={nickname}
      isLogged={isLogged}
      submitSignin={submitSignin}
      submitUserUpdate={submitUserUpdate}
      handleLogOut={handleLogOut}
      clearInput={clearInput}
    />
    )}

    {displayComment && (
    <Comment
      toggleDisplayComment={toggleDisplayComment}
      changeField={changeField}
      comment={comment}
      rating={rating}
      submitComment={submitComment}
    />
    )}

    {displayErrorMessage && (
    <ErrorMessage
      errorContent={errorContent}
      closedErrormessage={closedErrormessage}
    />
    )}
    {displayUpdatePassword && (
      <UpdatePassword
        password={password}
        isLogged={isLogged}
        submitUserPassword={submitUserPassword}
        toggleDisplayUpdatePassword={toggleDisplayUpdatePassword}
        changeField={changeField}
      />
    )}
  </>
);

Popup.propTypes = {
  displayLogin: PropTypes.bool.isRequired,
  displaySignin: PropTypes.bool.isRequired,
  displayComment: PropTypes.bool.isRequired,
  displayUpdatePassword: PropTypes.bool.isRequired,
  displayErrorMessage: PropTypes.bool.isRequired,
  closedErrormessage: PropTypes.func.isRequired,
  toggleDisplaySignin: PropTypes.func.isRequired,
  toggleDisplayLogin: PropTypes.func.isRequired,
  toggleDisplayComment: PropTypes.func.isRequired,
  toggleDisplayUpdatePassword: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  submitLogin: PropTypes.func.isRequired,
  submitSignin: PropTypes.func.isRequired,
  submitUserUpdate: PropTypes.func.isRequired,
  submitUserPassword: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  errorContent: PropTypes.string.isRequired,
  clearInput: PropTypes.func.isRequired,
};

export default Popup;
