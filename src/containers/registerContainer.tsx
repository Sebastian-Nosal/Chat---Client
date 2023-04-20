import React from "react";
import RegisterForm from '../presentations/RegisterForm';

interface RegisterContainerInterface
{
    switchToLogin:Function;
    switchToChat:Function;
}

function RegisterContainer(props:RegisterContainerInterface)
{
    return(<RegisterForm/>)
}

export default RegisterContainer;