import validator from "validator";
import isEmpty from "is-empty";

export function validatePasswordChange(data) {
  let errors = {};

  data.oldPassword = !isEmpty(data.oldPassword) ? data.oldPassword : "";
  data.newPassword = !isEmpty(data.newPassword) ? data.newPassword : "";
  data.newPassword2 = !isEmpty(data.newPassword2) ? data.newPassword2 : "";

  if (validator.isEmpty(data.oldPassword)) {
    errors.oldPassword = "Old password field is required";
  }
  if (validator.isEmpty(data.newPassword2)) {
    errors.newPassword = "New password field is required";
  }
  if (validator.isEmpty(data.newPassword2)) {
    errors.newPassword2 = "Confirm new password field is required";
  }

  if (!validator.equals(data.newPassword, data.newPassword2)) {
    errors.newPassword2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
export function validatePasswordDelete(data) {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
