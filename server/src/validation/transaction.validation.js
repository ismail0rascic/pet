import validator from "validator";
import isEmpty from "is-empty";

const validateTitle = (data, errors) => {
  data.title = !isEmpty(data.title) ? data.title : "";
  const letterNumberTest = /^[A-Za-z0-9]*$/;
  const lengthTest = /^.{1,15}$/;

  if (validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  } else if (
    !letterNumberTest.test(data.title) ||
    !lengthTest.test(data.title)
  ) {
    errors.title = "maximum 15 characters in Title is allowed";
  }
};

const validateAmount = (data, errors) => {
  data.amount = !isEmpty(data.amount) ? data.amount : "";
  if (validator.isEmpty(data.amount)) {
    errors.amount = "amount field is required";
  }
};
const validateCurrency = (data, errors) => {
  data.currency = !isEmpty(data.currency) ? data.currency : "";
  const test = /^[BAM,$,€]*$/;

  if (validator.isEmpty(data.currency)) {
    errors.currency = "currency field is required";
  } else if (!test.test(data.currency)) {
    errors.currency = "only BAM € $ is allowed currency";
  }
};
const validateType = (data, errors) => {
  data.type = !isEmpty(data.type) ? data.type : "";
  if (validator.isEmpty(data.type)) {
    errors.type = "type field is required";
  }
};

export function validateTransactionInput(data) {
  let errors = {};
  validateTitle(data, errors);
  validateAmount(data, errors);
  validateCurrency(data, errors);
  validateType(data, errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
export function validateTransactionChange(data) {
  let errors = {};
  validateTitle(data, errors);
  validateAmount(data, errors);
  validateCurrency(data, errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
