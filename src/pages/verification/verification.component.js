import React from 'react';
import { ReactComponent as VerificationImage } from '../../assets/verification/verification.svg';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/registration/registration.actions';
import './verification.styles.scss';

const Verification = () => {

    const registrationData = useSelector(state => state.registration),
          dispatch = useDispatch();

    return (
        <section className="verification">
            <div className="container">
                <div className="verification-content">
                    <div className="verification-image">
                        <VerificationImage />
                    </div>
                    <h1 className="section-header section-header--center">Please verify your email address</h1>
                    <p className="description-text description-text--center">Check your email {registrationData.email} to verify that you own this address</p>
                    <p className="description-text description-text--center">Didn’t receive an email? <span className="description-text__link" onClick={() => dispatch(register(...registrationData))}>Resend email.</span></p>
                </div>
            </div>
        </section>
    )
}

export default Verification