import React from 'react';
import SignInPass from "../../Components/SignInPass/SignInPass";

const LoginStepTwoPage = props =>  {
    return (<div>
        <SignInPass username={props.location.state.username} fullName={props.location.state.full_name}/>
    </div>)
}

export default LoginStepTwoPage;