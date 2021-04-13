import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import clockImage from "./images/clock.jpg";
import Countdown from "./components/countdown";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${clockImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: false,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Countdown />
      </Container>
    </div>
  );
};

export default App;
