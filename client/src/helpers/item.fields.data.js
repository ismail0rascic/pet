export const itemFieldsData = (values, classes, item) => {
  const fields = [
    {
      id: "award",
      type: "award",
      label: "Award",
      //value: values.award,
      class: classes.textField,
      error: values.errors.award,
    },
  ];
  return fields;
};
