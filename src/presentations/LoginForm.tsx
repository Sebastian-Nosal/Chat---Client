import {  FormEventHandler, useEffect } from "react";
import '../styles/login.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
            bar.style.width = props.passwordStrength.toString()+"%";
            //console.log(bar.style.width)
        }
       
    }, [props.passwordStrength])
    
    return (<>
    <div className="form-container">
        <AccountCircleIcon/>
            <form onSubmit={props.onSubmit}>
                <label htmlFor="">
                    <span>Nazwa użytkownika</span>
                    <input type="text" id="username_input" {...props.usernameConfig}/>
                </label>
                <label htmlFor="">
                    <span>Hasło</span>
                    <input type="password" id="password_input" {...props.passwordConfig}
                         onChange={ev => {
                            props.passwordHandler(ev.target);
                            props.passwordConfig.onChange(ev);
                        }} />
                    <div className="bar-container">
                        <span>siła hasła {props.passwordStrength}%</span>
                        <div id="password-bar" className="bar-container_bar"></div>
                    </div>
                    {
                        props.passwordComment!=='' ? 
                        (<ul className="from-container_comment">
                            {props.passwordComment.split('\n').map(el=>(<li>{el}</li>))}
                        </ul>):(<></>)
                    }
                </label>
                <div className="button-container">
                    <input type="button" value="Rejestracja" />
                    <input type="submit" value="Zaloguj" />
                </div>
            </form>
        </div>
        <div className="wrapper"></div>
    </>)
}

export default LoginForm;