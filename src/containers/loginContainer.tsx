import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginForm from "../presentations/LoginForm";
import axios from "axios";
import { authURL } from "../config";
import { useDispatch } from "react-redux";
import { addToken } from "../store/reducers";

const usernamePattern = /^(?!.*[{}\/;':"!@#$%^&*()_+]).{8,32}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&;:<>/\?]).{8,32}$/;

interface loginFormInterface
{
    username:string;
    password:string;
}

interface LoginContainerProps
{
    switchToRegister:Function
    switchToChat:Function
}

export default function LoginContainer(props:LoginContainerProps)
{
    const [passwordStrength,setPasswordStrength] = useState(0);
    const [passwordComment,setPasswordComment] = useState('');
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    async function onSubmit(data:any)
    {
        console.log(data);
        try
        {
            const result = await axios.post(authURL,{
                username: data.username,
                password:data.password,
                })
            console.log('*');
            dispatch(addToken(result.data))
            props.switchToChat();
        }
        catch(err:any)
        {
            console.log(`Error ${err.data}`)
        }
    }

    function passwordHandler(el:HTMLInputElement)
    {
        const value = el.value;
        let complexity = 0;
        let comment:string = "";
        const regexps:RegExp[] = [
            /[a-z]/,
            /[A-Z]/,
            /[0-9]/,
            /.{8}/,
            /[!@#$%^&;:<>/\?]/,
            /.{16}/,
        ]

        const rules:string[] = [
            'co najmniej jedną małą literę \n',
            'co najmniej jedną wielką literę \n',
            'co najmniej jedną cyfrę \n',
            'minimalną długość co najmniej 8 znaków (zalecane 16)\n',
            'co najmniej jeden znak specjalny',
            'mieć zalecaną długość 16 znaków'
        ]

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

    return(<LoginForm 
            passwordStrength={passwordStrength}
            onSubmit={handleSubmit(onSubmit)} 
            passwordComment={passwordComment}
            passwordHandler={passwordHandler}
            usernameConfig={register("username",{required:true,maxLength:32,minLength:8,pattern:usernamePattern})}
            passwordConfig={register("password",{required:true,maxLength:32,minLength:8,pattern:passwordPattern})}
            />)
}