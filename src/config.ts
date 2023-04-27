export const authURL = "http://localhost:3000/auth/login";
export const registerURL = "http://localhost:3000/resources/users/";
export const meURL = "http://localhost:3000/auth/me";
export const groupsURL = "http://localhost:3000/resources/groups/";
export const usernamePattern = /^(?!.*[{}\/;':"!@#$%^&*()_+]).{8,32}$/;
export const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&;:<>/\?]).{8,32}$/;

export const regexps:RegExp[] = [
    /[a-z]/,
    /[A-Z]/,
    /[0-9]/,
    /.{8}/,
    /[!@#$%^&;:<>/\?]/,
    /.{16}/,
]

export const rules:string[] = [
    'zawierać co najmniej jedną małą literę \n',
    'zawierać co najmniej jedną wielką literę \n',
    'zawierać co najmniej jedną cyfrę \n',
    'mieć minimalną długość co najmniej 8 znaków (zalecane 16)\n',
    'zawierać co najmniej jeden znak specjalny\n',
    'mieć zalecaną długość 16 znaków'
]