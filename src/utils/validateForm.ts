   import { validateFilled,validateEmail,validatePhone,justLetters} from './validateTextFields';

     /**
     *  Validates whether the form data is correctly formatted.
     */
    export const validateForm = (nameValue:string,emailValue:string,phoneValue:string,companyValue:string) => {
        let foundErrors = {
            validName: false,
            validEmail: false,
            validPhone: false,
            validCompany: false,
        };

        foundErrors.validName = !(validateFilled(nameValue) || justLetters(nameValue));
        foundErrors.validEmail = !validateEmail(emailValue);
        foundErrors.validPhone = !validatePhone(phoneValue);
        foundErrors.validCompany = !validateFilled(companyValue);
        // console.table(foundErrors)
        
        return(foundErrors);
    }