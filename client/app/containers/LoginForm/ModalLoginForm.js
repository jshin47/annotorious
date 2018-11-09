import React, { useState } from 'react';
import Modal from 'styled-react-modal';

import LoginForm from './Loadable';
import { connect } from 'react-redux';
import { makeSelectLoginModalVisibility } from './selectors';
import { setLoginModalVisibility } from '../App/actions';
import { createStructuredSelector } from 'reselect';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export function ModalLoginForm({ isOpen, setIsOpen }) {

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <LoginForm />
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </div>
  )
}

const mapStateToProps = (state) => createStructuredSelector({
  isOpen: makeSelectLoginModalVisibility(),
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpen: (visible) => dispatch(setLoginModalVisibility(visible)),
})

const ConnectedModalLoginForm = connect(mapStateToProps, mapDispatchToProps)(ModalLoginForm);

export default ConnectedModalLoginForm;
