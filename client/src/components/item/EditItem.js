import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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
import TextArea from "../basic/TextArea";
import useRefresh from "../../customHooks/useRefresh";

import { refreshItems, updateItem } from "../../actions/itemActions";
import { clearError } from "../../actions/errorActions";
import useStyles from "../../styles/style";
import { itemFieldsData } from "../../helpers/item.fields.data";
import { itemAreasData } from "../../helpers/item.areas.data";

const EditItem = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const id = useParams().id;

  const item = props.items.find((o) => o._id === id);

  useRefresh("items", props.items, refreshItems);

  const [values, setValues] = useState({
    name: false,
    desc: false,
    category: false,
    errors: {},
  });
  console.log(values);
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
  const update = () => {
    const userData = {
      name: values.name ? values.name : item.name,
      desc: values.desc ? values.desc : item.desc,
      category: values.category ? values.category : item.category,
      id: id,
    };

    updateItem(userData, navigate);
  };
  const cancel = () => {
    navigate("/item" + id);
  };

  const fields = item && itemFieldsData(values, classes, item);
  const areas = item && itemAreasData(values, classes, item);

  return (
    <>
      {item && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" className={classes.title}>
              Add New Item
            </Typography>
            {fields.map((_, i) => {
              return (
                <Field
                  key={i}
                  data={_}
                  values={values}
                  item={item.name}
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
                  item={item.desc}
                  id={values.id}
                  setValues={setValues}
                />
              );
            })}
            <ChoseCategory
              item={item.category}
              setValues={setValues}
              values={values}
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={update}
              className={classes.button}
            >
              EDIT ITEM
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
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
  items: state.itemR,
});
export default connect(mapStateToProps)(EditItem);
