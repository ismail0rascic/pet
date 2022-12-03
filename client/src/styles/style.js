import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
  title: {
    marginLeft: 20,
    color: theme.palette.openTitle,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },

  textField: {
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 300,
  },
  button: {
    margin: "auto",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  buyButton: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(4),
  },

  income: {
    color: "green",
  },
  bar: {
    background: theme.palette.openTitle,
  },
  
}));


export default useStyles;
