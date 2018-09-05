import validation from 'validate.js';
import Constraints from './constraints';

export default function validate(fieldName, value) {
    var constraints = Constraints;

    var formValues = {};

    if(fieldName === 'conPassword'){
      formValues = value;
    } else {
      formValues[fieldName] = value;
    }

    var formFields = {};
    formFields[fieldName] = constraints[fieldName];
    
    const result = validation(formValues, formFields)

    if (result) {
	     return result[fieldName][0]
    }
    return null
}
