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
import { Link } from "react-router-dom";
import Field from "./basic/Field";

import { signIn } from "../actions/authActions";
import { clearError } from "../actions/errorActions";
import useStyles from "../styles/style";
import { loginFieldsData } from "../helpers/login.fields.data";

const Login = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    errors: {},
  });

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      navigate("/catalog");
    }
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

  const clickSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    signIn(userData);
  };

  const fields = loginFieldsData(values, classes);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Log In
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
          color="primary"
          variant="contained"
          onClick={clickSubmit}
          className={classes.button}
        >
          LOGIN
        </Button>
      </CardActions>
      <Typography component="p">
        No account &nbsp;&nbsp;
        <Link to="/signup">SIGN UP</Link>
      </Typography>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(Login);
