export const signupFieldsData = (values, classes) => {
  const fields = [
    {
      id: "name",
      type: "text",
      label: "Name",
      value: values.name,
      class: classes.textField,
      error: values.errors.name,
    },
    {
      id: "surname",
      type: "text",
      label: "Surname",
      value: values.surname,
      class: classes.textField,
      error: values.errors.surname,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      value: values.email,
      class: classes.textField,
      error: values.errors.email,
    },
    {
      id: "contact",
      type: "contact",
      label: "Contact",
      value: values.contact,
      class: classes.textField,
      error: values.errors.contact,
    },
    {
      id: "city",
      type: "city",
      label: "City",
      value: values.city,
      class: classes.textField,
      error: values.errors.city,
    },
    {
      id: "address",
      type: "address",
      label: "Address",
      value: values.address,
      class: classes.textField,
      error: values.errors.address,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      value: values.password,
      class: classes.textField,
      error: values.errors.password,
    },
    {
      id: "password2",
      type: "password",
      label: "Confirm Password",
      class: classes.textField,
      value: values.password2,
      error: values.errors.password,
    },
  ];
  return fields;
};
