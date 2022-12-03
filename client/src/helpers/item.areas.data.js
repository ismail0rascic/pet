export const itemAreasData = (values, classes, item) => {
  const areas = [
    {
      id: "desc",
      type: "text",
      label: "Description",
      value: values.desc !== false ? values.desc : item.desc,
      class: classes.textField,
      error: values.errors.desc,
    },
  ];
  return areas;
};
