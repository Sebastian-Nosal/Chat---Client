import {  FormEventHandler, useEffect } from "react";

interface LoginFormProps 
{
    passwordStrength:number;
    passwordComment: string;
    onSubmit:FormEventHandler<HTMLFormElement>;
    passwordHandler: Function;
    usernameConfig:any;
    passwordConfig:any;
}

function LoginForm(props:LoginFormProps)
{
    
    useEffect(() => {
        const bar = document.getElementById('password-bar');
        if(bar)
        {
            bar.style.width = props.passwordStrength.toString()+"px";
            //console.log(bar.style.width)
        }
       
    }, [props.passwordStrength])
    
    return (<div className="form-container">
            <form onSubmit={props.onSubmit}>
                <label htmlFor="">
                    <span>Nazwa użytkownika</span>
                    <input type="text" id="username_input" {...props.usernameConfig}/>
                    <span>Hasło</span>
                    <input type="password" id="password_input" {...props.passwordConfig} onChange={props.passwordHandler} />
                    <div className="bar-container">
                        <div id="password-bar" className="bar-container_bar"></div>
                    </div>
                    {
                        props.passwordComment!=='' ? 
                        (<span className="from-container_comment">
                            {props.passwordComment}
                        </span>):(<></>)
                    }
                    <input type="button" value="Wyczyść" />
                    <input type="submit" value="Wyślij" />
                </label>
            </form>
        </div>)
}

export default LoginForm;