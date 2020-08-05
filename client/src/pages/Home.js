import * as React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="home"
      style={{
        height: "100vh",
        backgroundColor: "#3f50b5",
      }}
    >
      <Paper
        style={{
          width: "60%",
        }}
      >
        <Grid item>
          <h1 style={{ textAlign: "center" }}>Welcome to Trivial Purfuit!</h1>
        </Grid>

        <Grid
          container
          direction="column"
          spacing={2}
          justify="center"
          alignContent="center"
          alignItems="stretch"
          style={{
            marginBottom: "50px",
          }}
        >
          <Grid item xs={4}>
            <Button variant="contained" size="large" fullWidth>
              <Link to={"/game"} style={linkStyle}>
                Start Playing
              </Link>
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button variant="contained" size="large" fullWidth>
              <Link to={"/help"} style={linkStyle}>
                Help
              </Link>
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button variant="contained" size="large" fullWidth>
              <Link to={"/admin"} style={linkStyle}>
                Administration Module
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Home;
