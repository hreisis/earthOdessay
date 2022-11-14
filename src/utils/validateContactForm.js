export const validateContactForm = (firstName, lastName, email, message ) => {
    const errors = {};

    if (!firstName.value) {
        errors.firstName = 'Required';
    } else if (firstName.value.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (firstName.value.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName.value) {
        errors.lastName = 'Required';
    } else if (lastName.value.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (lastName.value.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    // const reg = /^\d+$/;
    // if (!reg.test(values.phoneNum)) {
    //     errors.phoneNum = 'The phone number should contain only numbers.';
    // }

    if (!email.value.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
}