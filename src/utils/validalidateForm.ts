/**
 * Validates whether a required text field is empty
 * @param {string} text 
 * @returns {boolean}
 */
export const validateFilled = (text: string): boolean => {
    return (
        text.trim().length != 0 ? true : false
    )
}

/**
 * Validates whether a text field contains only letters.
 * @param {string} text
 * @returns {boolean} 
 */
export const justLetters = (text: string)=> {
    const regex = /^[A-Za-z]+$/;
    return regex.test(text);
}

/**
 * Validates whether the email format is correct.
 * @param {string} email 
 * @returns {boolean}
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates whether the phone format is correct (UK numbers).
 * @param {string} phone 
 * @returns {boolean}
 */
export const validatePhone = (phone: string): boolean => {
    const numberRegex = /^0\d{10}$/;
    return (numberRegex.test(phone) && phone.length == 11);
};
