import validator from "validator";
import isEmpty from "is-empty";

const validateFirstName = (data, errors) => {
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  const letterTest = /^[A-Za-z]*$/;
  const lengthTest = /^.{1,15}$/;
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  } else if (
    !letterTest.test(data.firstName) ||
    !lengthTest.test(data.firstName)
  ) {
    errors.firstName =
      "Maximum 15 characters(only letter) in firstName filed is allowed";
  }
};
const validateLastName = (data, errors) => {
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  const letterTest = /^[A-Za-z]*$/;
  const lengthTest2 = /^.{1,20}$/;
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  } else if (
    !letterTest.test(data.lastName) ||
    !lengthTest2.test(data.lastName)
  ) {
    errors.lastName =
      "Maximum 20 characters(only letter) in lastName filed is allowed";
  }
};
const validateNickName = (data, errors) => {
  const letterNumberTest = /^[A-Za-z0-9]*$/;
  const lengthTest = /^.{1,10}$/;
  data.nickName = !isEmpty(data.nickName) ? data.nickName : "";
  if (validator.isEmpty(data.nickName)) {
    errors.nickName = "Nick Name field is required";
  } else if (
    !letterNumberTest.test(data.nickName) ||
    !lengthTest.test(data.nickName)
  ) {
    errors.nickName =
      "Maximum 10 characters (only letters and numbers) in nickName filed is allowed";
  }
};
const validateEmail = (data, errors) => {
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
};

export function validateUserInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  validateFirstName(data, errors);
  validateLastName(data, errors);
  validateNickName(data, errors);
  validateEmail(data, errors);

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export function validateUserChange(data) {
  let errors = {};
  validateFirstName(data, errors);
  validateLastName(data, errors);
  validateEmail(data, errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
