

const validation = (values) => {



    let errors = {}

    if(!values.name){
        errors.name = "Name required"
    } else if (values.name.length < 5){
        errors.name = "Name must be more than 5 char"
    }
    
    if(!values.password){
        errors.password = "Password required"
    } else if (values.password.length < 8){
        errors.password = "Password must be more than 8 char"
    } else if ( values.password.length >= 32){
        errors.password = "Password max 2 char"
    } 


    return errors;

}

export default validation