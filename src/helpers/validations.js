
// expresión regular para validar contraseñas fuertes
export const validatePass = password => {
    const regPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    return regPass.test( password ) ? true: false
}


// expresion regular para validar correos electrónicos
export const validateEmail = email => {
    const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    return regEmail.test(email) ? true: false
}

// expresión regular para validar números de teléfono
export const validatePhone = phone => {
    const regPhone = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/
    return regPhone.test( phone ) ? true : false;
}