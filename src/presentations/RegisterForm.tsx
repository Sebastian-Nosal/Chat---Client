import React from 'react';
import {useForm} from 'react-hook-form';

function RegisterForm(props:any)
{
    const {register,handleSubmit} = useForm();
    return (
        <div className='background'>
            <div className="form_container">
                <form>

                </form>
            </div>
        </div>
        )
}

export default RegisterForm