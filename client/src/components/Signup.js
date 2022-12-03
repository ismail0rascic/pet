import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import Field from "./basic/Field";

import { signUp } from "../actions/authActions";
import { clearError } from "../actions/errorActions";
import useStyles from "../styles/style";
import { signupFieldsData } from "../helpers/signup.fields.data";

const Signup = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    contact: "",
    city: "",
    address: "",
    password: "",
    password2: "",
    errors: {},
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (props.auth.isAuthenticated === true) {
      navigate("/home");
    }
    // eslint-disable-next-line
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
    }
    // eslint-disable-next-line
  }, [props.errors]);

  const clickSubmit = (e) => {
    const newUser = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      contact: values.contact,
      city: values.city,
      address: values.address,
      password: values.password,
      password2: values.password2,
    };
    signUp(newUser, navigate);
  };
  const fields = signupFieldsData(values, classes);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Sign Up
        </Typography>
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
      </CardContent>
      <CardActions>
        <Button
          style={{ background: "#C4834D", color: "white" }}
          variant="contained"
          onClick={clickSubmit}
          className={classes.button}
        >
          SIGN UP
        </Button>
      </CardActions>
      <Typography component="p" style={{ color: "#C4834D" }}>
        Already have account &nbsp; &nbsp;
        <Link to="/login">LOG IN</Link>
      </Typography>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(Signup);
