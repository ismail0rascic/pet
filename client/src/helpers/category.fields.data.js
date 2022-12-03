export const categoryFieldsData = (values, classes) => {
  const fields = [
    {
      id: "name",
      type: "name",
      label: "Category name",
      value: values.name,
      class: classes.textField,
      error: values.errors.name,
    },
  ];
  return fields;
};
