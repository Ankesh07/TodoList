import React from "react";
import { Todo } from "./Todo";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1em",
  },
}));

const Todos = ({ items, onDelete, onAdd }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography
            align="center"
            variant="h6"
            color="secondary"
            className={classes.root}
          >
            Todo's Task
          </Typography>
          <hr />
          <Form onAdd={onAdd} />
          {items.length === 0
            ? ""
            : items.map((item) => {
                return <Todo key={item.id} item={item} onDelete={onDelete} />;
              })}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default Todos;
