import LoginForm from '../presentations/LoginForm';
import {render,screen} from '@testing-library/react';

describe('Login Form component should render form that:',()=>{

    test('contains block-tag form',()=>{

    });

    test('contains two inputs type text',()=>{

    });

    test('contains input type submit',()=>{

    });

    test('contains password strength bar',()=>{

    });
})

let bar:HTMLElement|null;



describe('Password-strength bar:',()=>{

    it('Should exist',()=>{
        render(<LoginForm passwordStrength={100}  switchToRegister={()=>{}}  passwordComment='' passwordConfig={null} usernameConfig={null} onSubmit={()=>{}} passwordHandler={()=>{}}  />);
        bar = document.getElementById('password-bar');
        expect(bar).not.toBeNull();
    });
    
    it('Should be empty when called with props password-strength = 0',()=>{
        render(<LoginForm passwordStrength={0}  switchToRegister={()=>{}}  passwordComment='' passwordConfig={null} usernameConfig={null} onSubmit={()=>{}} passwordHandler={()=>{}}  />);
        bar = document.getElementById('password-bar');
        expect(parseInt(bar?.style.width||"NaN")).toBe(0);
    }); 

    it('Should be full-length when called with props password-strength = 100',()=>{
        render(<LoginForm passwordStrength={100} switchToRegister={()=>{}}  passwordComment='' passwordConfig={null} usernameConfig={null} onSubmit={()=>{}} passwordHandler={()=>{}}  />);
        bar = document.getElementById('password-bar');
        expect(parseInt(bar?.style.width||"NaN")).toBe(100);
    });

    it('Should have lenth of half, when called with props password-strength = 50',()=>{
        render(<LoginForm 
            switchToRegister={()=>{}}  
            passwordStrength={50} 
            passwordComment='' 
            passwordConfig={null} 
            usernameConfig={null} 
            onSubmit={()=>{}} 
            passwordHandler={()=>{}}  />);
        bar = document.getElementById('password-bar');
        expect(parseInt(bar?.style.width||"NaN")).toBe(50);
    });

    it('Should have lenth of n, when called with props password-strength = n',()=>{
        render(<LoginForm 
            passwordStrength={30} 
            passwordComment='' 
            passwordConfig={null} 
            usernameConfig={null} 
            onSubmit={()=>{}} 
            passwordHandler={()=>{}}
            switchToRegister={()=>{}}  
            />);
        bar = document.getElementById('password-bar');
        expect(parseInt(bar?.style.width||"NaN")).toBe(30);

        render(<LoginForm passwordStrength={60} passwordComment='' passwordConfig={null} usernameConfig={null} switchToRegister={()=>{}} onSubmit={()=>{}} passwordHandler={()=>{}}  />);
        bar = document.getElementById('password-bar');
        expect(parseInt(bar?.style.width||"NaN")).toBe(60);
    });
})