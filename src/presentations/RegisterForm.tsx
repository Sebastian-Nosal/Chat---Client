import React, { FormEventHandler, useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import '../styles/login.scss';
import '../styles/register.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {createRef} from 'react';
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = createRef();

interface RegisterFormProps
{
    switchToLogin:Function;
    captcha:Function;
    passwordStrength:number;
    passwordComment: string;
    onSubmit:FormEventHandler;
    passwordHandler: Function;
    usernameConfig:any;
    passwordConfig:any;
    samePasswordHandler:Function;
    samePasswords:boolean;
    areCredentialsOk?:Boolean;
}

function RegisterForm(props:RegisterFormProps)
{
    useEffect(() => {
        const bar = document.getElementById('password-bar');
        if(bar)
        {
            bar.style.width = props.passwordStrength.toString()+"%";
            //console.log(bar.style.width)
        }
       
    }, [props.passwordStrength])

    useEffect(()=>{
        props.captcha();
    },[props])

return (<>
        <div className="form-container form-container__register">
            <AccountCircleIcon/>
                <form onSubmit={props.onSubmit}>
                    {props.areCredentialsOk===false? (<span color="red">Niepoprawne dane</span>):(<></>)}
                    <label htmlFor="">
                        <span>Nazwa użytkownika</span>
                        <input type="text" id="username_input" {...props.usernameConfig}/>
                    </label>
                    <label className="register-password" htmlFor="">
                        <div className='register-password-slab'>
                            <span>Hasło</span>
                            <input type="password" id="password_input" {...props.passwordConfig}
                                onChange={ev => {
                                    props.passwordHandler(ev.target);
                                    props.passwordConfig.onChange(ev);
                                }} />
                        </div>
                        <div className='register-password-slab'>
                            <span>Powtórz hasło</span>
                            <input type="password" id="password_repeat_input" 
                                    onChange={ev => {
                                    props.samePasswordHandler(ev.target);
                                }} />
                        </div>
                    </label>
                    <label className='small-margin'>
                    {
                            props.passwordComment!=='' ? 
                            (<ul className="from-container_comment">
                                <p>Hasło powinno: </p>
                                {props.passwordComment.split('\n').map((el:string,idx:number)=>(<li key={idx}>{el}</li>))}
                                {!props.samePasswords? (<li>Hasła nie są identyczne</li>): (<></>)}
                            </ul>):(<></>)
                        }
                    </label>
                    <label className='register-label'>
                        <div className="bar-container">
                            <span>siła hasła {props.passwordStrength}%</span>
                            <div id="password-bar" className="bar-container_bar"></div>
                        </div>
                    </label>
                    <div>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LcVZrAlAAAAAC4740o_wMUYeN0PGVxzEF-tEq4S"
                            onChange={()=>{}} 
                        />
                    </div>
                    <div className="button-container">
                        <input type="button" value="Logowanie" onClick={()=>props.switchToLogin()}/>
                        <input type="submit" value="Zarejestruj" />
                    </div>
                </form>
            </div>
            <div className="wrapper"></div>
        </>)
}

export default RegisterForm

/*
<div className='form-container__register__checkbox'>
    <label>
        <input type="checkbox" value="Potwierdzam akceptację regulaminu"/>
        <span>Akceptuję Regulamin i Politykę Prywatności</span>
    </label>
</div>
                     */