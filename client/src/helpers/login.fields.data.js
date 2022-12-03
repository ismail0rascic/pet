export const loginFieldsData = (values, classes) => {
  const fields = [
    {
      id: "email",
      type: "email",
      label: "Email",
      value: values.email,
      class: classes.textField,
      error: values.errors.email,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      value: values.password,
      class: classes.textField,
      error: values.errors.password,
    },
  ];
  return fields;
};
