import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import Field from "../basic/Field";
import ChoseCategory from "../categories/ChoseCategory";
import ChoseOption from "../categories/ChoseOption";

import TextArea from "../basic/TextArea";
import { addItem } from "../../actions/itemActions";
import AddImage from "./AddImage";

import { clearError } from "../../actions/errorActions";
import useStyles from "../../styles/style";
import { itemFieldsData } from "../../helpers/item.fields.data";
import { itemAreasData } from "../../helpers/item.areas.data";

const AddItem = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    desc: "",
    image: "",
    category: "",
    option: "",
    errors: {},
  });
  useEffect(() => {
    clearError();
  }, []);
  useEffect(() => {
    if (props.errors) {
      setValues({
        ...values,
        errors: props.errors,
      });
    } // eslint-disable-next-line
  }, [props.errors]);
  const create = () => {
    const userData = {
      category: values.category,
      desc: values.desc,
      image: values.image,
      award: values.award,
      option: values.option,
      userId: props.auth.user.id,
    };

    addItem(userData, navigate);
  };
  const cancel = () => {
    navigate("/catalog");
  };

  const fields = itemFieldsData(values, classes);
  const areas = itemAreasData(values, classes);
console.log(values);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Add New Item
        </Typography>
        <ChoseCategory setValues={setValues} values={values} />
        <ChoseOption setValues={setValues} values={values} />
        {fields.map((_, i) => {
          return (
            <Field
              key={i}
              data={_}
              values={values}
              id={values.id}
              setValues={setValues}
            />
          );
        })}
        {areas.map((_, i) => {
          return (
            <TextArea
              key={i}
              data={_}
              values={values}
              id={values.id}
              setValues={setValues}
            />
          );
        })}
        <AddImage setValues={setValues} values={values} />
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={create}
          className={classes.button}
        >
          CREATE ITEM
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={cancel}
          className={classes.button}
        >
          CANCEL
        </Button>
      </CardActions>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(AddItem);
