import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  fab: {
    float: "right",
    position: "sticky",
  },
}));

const Form = ({ onAdd }) => {
  const [values, setValues] = useState({ title: "", desc: "" });
  const classes = useStyles();
  const submit = (event) => {
    event.preventDefault();
    if (values.title && values.desc) {
        onAdd(values);
        setValues({ title: "", desc: "" });
    } else {
      alert("Please fill all the details!")
    }
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={submit}>
        <TextField
          name="title"
          label="Title"
          value={values.title}
          color="secondary"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          name="desc"
          label="Description"
          value={values.desc}
          color="secondary"
          onChange={(event) => handleChange(event)}
        />
        <Fab
          type="submit"
          className={classes.fab}
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </form>
      <Typography variant="overline" display="block" gutterBottom>
        {"PRESS 'ADD' BUTTON FOR ADDING & Search Also using 'Enter' Key"}
      </Typography>
    </>
  );
};

export default Form;
