import React, { useState } from "react";
import RegisterForm from '../presentations/RegisterForm';
import { passwordPattern,usernamePattern,regexps,rules, registerURL } from "../config";
//@ts-ignore
import { useForm } from "react-hook-form";
import axios from "axios";

interface RegisterContainerInterface
{
    switchToLogin:Function;
    switchToChat:Function;
}

function RegisterContainer(props:RegisterContainerInterface)
{
    const {register,handleSubmit} = useForm()
    const [passwordComment,setPasswordComment] = useState("");
    const [password,setPassword] = useState("");
    const [passwordStrength,setPasswordStrength] = useState(0);
    const [areCredentialsOk,setAreCredentialsOk] = useState(true);
    const [arePasswordsSame,setArePasswordsSame] = useState(true);
    
    function passwordHandler(el:HTMLInputElement)
    {
        const value = el.value;
        let complexity = 0;
        let comment:string = "";
        regexps.forEach((regex,idx)=>{
            if(value.match(regex))
            {
                complexity++;
            }
            else
            {
                comment+=rules[idx];
            } 
        })
        complexity = Math.floor(complexity/regexps.length * 100);
        setPasswordStrength(complexity);
        setPasswordComment(comment);
    }

    function samePassword(el:HTMLInputElement)
    {
        const value = el.value;
        password!==value? setArePasswordsSame(false) : setArePasswordsSame(true)
    }

    async function onSubmit(data:any)
    {
        const {username,password} = data;
        try
        {
            console.log("*")
            const result = await axios.post(registerURL,
                {
                    username:username,
                    password:password
                })
            if(result.status===200)
            {
                props.switchToLogin();
            }
            else
            {
                setAreCredentialsOk(false)
            }
        }
        catch(err)
        {
            setAreCredentialsOk(false)
        }
    }

    return(<RegisterForm 
        switchToLogin={props.switchToLogin}
        passwordConfig={register("password",{required:true,maxLength:32,minLength:8,pattern:passwordPattern})}
        passwordHandler={passwordHandler}
        passwordComment={passwordComment}
        passwordStrength={passwordStrength}
        usernameConfig={register("username",{required:true,maxLength:32,minLength:8,pattern:usernamePattern})}
        captcha={()=>{}}
        onSubmit={handleSubmit(onSubmit)} 
        samePasswordHandler={samePassword}
        samePasswords={arePasswordsSame}
        areCredentialsOk={areCredentialsOk}
        />)
}

export default RegisterContainer;