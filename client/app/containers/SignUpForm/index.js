/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignUpForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { SIGNUP_MUTATION } from '../../data/graphql/mutations';
import { setCurrentUser } from '../App/actions';

const SignUpFormSchema = Yup.object().shape({
  emailAddress: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8).required('Required')
})

function SignUpForm({ signupMutation, dispatch }) {

  const onSubmit = async ({ emailAddress, password }) => {
    const signupResult = await signupMutation({
      variables: {
        emailAddress,
        password,
      },
    });
    const { token, user } = signupResult.data.signup;
    dispatch(setCurrentUser({ token, user }));
  };

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Formik
        initialValues={{
          emailAddress: '',
          password: '',
        }}
        validationSchema={SignUpFormSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="emailAddress" />
            {errors.emailAddress && touched.emailAddress ? (
              <div>{errors.emailAddress}</div>
            ) : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

SignUpForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUpForm: makeSelectSignUpForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUpForm', reducer });
const withSaga = injectSaga({ key: 'signUpForm', saga });

const withGraphQL = graphql(SIGNUP_MUTATION, { name: 'signupMutation' });

export default compose(
  withGraphQL,
  withReducer,
  withSaga,
  withConnect,
)(SignUpForm);
