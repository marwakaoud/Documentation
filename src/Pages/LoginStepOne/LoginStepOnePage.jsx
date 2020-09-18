import React from 'react';
import SignInSide from "../../Components/SignIn/SignIn";
import { withRouter } from "react-router-dom";

const LoginStepOnePage = props => {
    return (
        <div>
        <SignInSide/>
    </div>
    )
};

export default withRouter(LoginStepOnePage);