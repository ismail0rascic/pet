import validator from "validator";
import isEmpty from "is-empty";

export default function validateSignUp(data) {
  let errors = {};
  const numberTest = /^\d+$/

  data.name = !isEmpty(data.name) ? data.name : "";
  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (validator.isEmpty(data.surname)) {
    errors.surname = "Surname Name field is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.contact)) {
    errors.contact = "Contact field is required";
  } else if (!numberTest.test(data.contact)) {
    errors.contact = "Put number in this format 061222333";
  }
  if (validator.isEmpty(data.city)) {
    errors.city = "City  field is required";
  } else if (data.city !== "Sarajevo") {
    errors.city = "Only valid input for city field is Sarajevo";
  }

  if (validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!validator.isLength(data.password, { min: 6, max: undefined })) {
    errors.password = "Password must include minimum 6 characters";
  } else if (!validator.isAscii(data.password)) {
    errors.password = "ASCII chars only";
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
