import validator from "validator";
import isEmpty from "is-empty";

export const validateItemAdd = (data) => {
  let errors = {};
  data.category = !isEmpty(data.category) ? data.category : "";
  data.option = !isEmpty(data.option) ? data.option : "";
  data.name = !isEmpty(data.award) ? data.award : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";

  if (validator.isEmpty(data.desc)) {
    errors.desc = "Items desc field is required";
  }
  if (validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  if (validator.isEmpty(data.option)) {
    errors.option = "Option field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
