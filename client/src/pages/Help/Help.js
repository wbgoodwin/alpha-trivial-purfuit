import React from "react";
import {
  Grid,
  Link,
  Typography,
  Breadcrumbs,
  Container,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  responsiveFontSizes,
} from "@material-ui/core";
import { Link as RRDLink, useRouteMatch } from "react-router-dom";
import Nav from "../../components/Nav";
import teamLogo from "../../pages/Help/images/teamLogo.png";
import homePage from "../../pages/Help/images/homePage.png";
import adminPage from "../../pages/Help/images/adminPage.png";
import helpPage from "../../pages/Help/images/helpPage.png";

const Help = () => {
  const imageStyle = {
    width: "50%",
    height: "50%",
  };
  const accordionHeader = {
    marginLeft: "20px",
    fontSize: "20px",
  };
  return (
    <React.Fragment>
      <Nav />

      <Grid
        style={{
          marginTop: "60px",
          marginLeft: "10px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link style={{ cursor: "pointer" }} component="span">
            <RRDLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </RRDLink>
          </Link>
          <Link style={{ cursor: "pointer" }} component="span">
            <RRDLink
              to="/game"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Game
            </RRDLink>
          </Link>
          <Link style={{ cursor: "pointer" }} component="span">
            <RRDLink
              to="/admin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Admin
            </RRDLink>
          </Link>

          <Link
            style={{ cursor: "pointer" }}
            color="textPrimary"
            aria-current="page"
          >
            <RRDLink
              to="/help"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Help
            </RRDLink>
          </Link>
        </Breadcrumbs>
      </Grid>

      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        style={{ gridRowGap: "20px" }}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: "80px" }}
        >
          <img
            alt="Team Logo"
            src={teamLogo}
            style={{ width: "15%", height: "15%" }}
          />
        </Grid>
        <Grid>
          <h2>We Are Here to Help</h2>
        </Grid>

        <Grid style={{ width: "70%" }}>
          <Accordion>
            <AccordionSummary>
              <Typography style={accordionHeader}>
                What Does the Game Look Like?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>Home Page</li>
                  <img alt="Home Page" src={homePage} style={imageStyle} />
                  <div>
                    The game user interface starts with the home page. Each of
                    the button will redirect the player into a new page.
                  </div>
                  <ul>
                    <li>
                      <em>START PLAYING</em> page is used to setup players'
                      profiles and start playing game.
                    </li>
                    <li>
                      <em>HELP</em> page provides game tips and game
                      introductions.
                    </li>
                    <li>
                      <em>ADMINISTRATION MODULE</em> page allows administrator
                      to modify question/answer database.
                    </li>
                  </ul>
                  <br />
                  <li>Administration Module Page</li>
                  <img alt="Admin Page" src={adminPage} style={imageStyle} />
                  <div>
                    The Administration Module may only be used by educators to
                    update question database.
                  </div>
                  <ul>
                    <li>
                      <em>MANAGE QUESTIONS</em> page allows administrator to add
                      a new question/answers set, or edit/delete an existing
                      question set.
                    </li>
                    <li>
                      <em>MANAGE CATEGORIES</em> page allows administrator to
                      modify category names as well as colors.
                    </li>
                    <li>
                      <em>IMPORT QUESTION FILE</em> page allows administrator to
                      upload a new question file where questions and answers are
                      predefined.
                    </li>
                    <li>
                      <em>EXPORT QUESTION FILE</em> page allows administrator to
                      export the current question database into a file.
                    </li>
                  </ul>
                  <br />
                  <li>Help Page</li>
                  <img alt="Help Page" src={helpPage} style={imageStyle} />
                  <div>
                    The Help page allows the first-time player to get familiar
                    with the user interfaces, game rules, and new features.
                  </div>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Typography style={accordionHeader}>
                What Are the Game Rules?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>All players start the game from center hub.</li>
                  <li>
                    Players take turns, starting with rolling the die and moving
                    the token the number of spaces indicated on the die.
                  </li>
                  <li>
                    A player can get a new turn if the token lands on a "roll
                    again" square, or correctly answers a question.
                  </li>
                  <li>
                    A player earns a chip if the token lands on the side
                    headquarter and gives the right answer.
                  </li>
                  <li>
                    A player keeps playing along the sides until collects all
                    four chips.
                  </li>
                  <li>
                    The player who has all chips collected can move back to
                    center hub, and answers a question chosen by other players.
                  </li>
                  <li>
                    A player wins the game if the player collects all chips and
                    answers the question correctly at the center hub.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Typography style={accordionHeader}>
                What's New About This Game?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Just like the game you were familiar with, Trivial Pursuit,
                    but with a fresh looking!
                  </li>
                  <li>
                    The game roots in the history of Declaration of
                    Independence!
                  </li>
                  <li>
                    Having more fun with multiple question categories, and
                    multi-player mode!
                  </li>
                  <li>
                    Educators can update questions for endless playing
                    possibilities!
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Typography style={accordionHeader}>FAQ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>How can I get this game?</li>
                  <p>
                    This game is used as an educational tool, which will only be
                    distributed internally within the school system. Please
                    contact your school for more information.
                  </p>
                  <li>How can I start the game?</li>
                  <p>
                    Open a supported browser, such as Google Chrome, and enter
                    the URL of this game.
                  </p>
                  <li>How can I play the game?</li>
                  <p>
                    This game by large is similar to the traditional board game,
                    Trivial Pursuit. Please refer to the Game Rules section for
                    more detailed rules.
                  </p>
                  <li>What should I do if the game encountered an error?</li>
                  <p>
                    Whenever an error is encountered and can't be recovered by
                    itself, please take a screenshot of the error and restart
                    the game. The captured error should be forwarded to local IT
                    support department.
                  </p>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Help;
