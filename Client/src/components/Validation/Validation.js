const validation = (userData) => {
    const errors = {}
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
        errors.email = 'Email erroneo'
    }
    if(!userData.email){
        errors.email =  'Ingresa tu correo'
    }
    if(userData.email.length > 35){
        errors.email = 'No mas de 35 caracteres'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe ser entre 6 y 10 caracteres'
    }

    return errors
}

export default validation;