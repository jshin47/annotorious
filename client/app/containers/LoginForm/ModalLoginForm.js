import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import { createStructuredSelector } from 'reselect';

import LoginForm from './Loadable';
import SignupForm from 'containers/SignUpForm/Loadable';
import { connect } from 'react-redux';
import { makeSelectLoginModalMode, makeSelectLoginModalVisibility } from './selectors';
import { setLoginModalVisibility, setModalAttributes } from '../App/actions';

import { Enums } from './constants';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export function ModalLoginForm({ isOpen, setIsOpen, mode, setMode }) {

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleMode = () => setMode((mode === Enums.MODAL_LOGIN_FORM_MODE_SIGNUP) ? Enums.MODAL_LOGIN_FORM_MODE_LOGIN : Enums.MODAL_LOGIN_FORM_MODE_SIGNUP);

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        {
          (mode === Enums.MODAL_LOGIN_FORM_MODE_SIGNUP) ? <SignupForm /> : <LoginForm displayedInModal />
        }
        <button onClick={toggleMode}>I need to sign up</button>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </div>
  )
}

const mapStateToProps = (state) => createStructuredSelector({
  isOpen: makeSelectLoginModalVisibility(),
  mode: makeSelectLoginModalMode(),
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpen: (visible) => dispatch(setLoginModalVisibility(visible)),
  setMode: (mode) => dispatch(setModalAttributes({ modal: 'login', attributes: { mode }}))
})

const ConnectedModalLoginForm = connect(mapStateToProps, mapDispatchToProps)(ModalLoginForm);

export default ConnectedModalLoginForm;
