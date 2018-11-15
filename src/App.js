import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Today from "./components/Today";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Input from "./components/form/Input";
import Title from "./components/form/Title";
import AddButton from "./components/form/AddButton";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import NextButton from "./components/NextButton";

class App extends Component {
  constructor() {
    super();
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    this.state = {
      today: `${dd}-${mm}-${yyyy}`
    };
  }
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Today todayDate={this.state.today} />
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Card>
              <CardContent className="display-column">
                <Title title="Nickname" />
                <FormControl margin="dense">
                  <Input value="Type your nickname " />
                </FormControl>
                <NextButton />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <CardContent className="display-column">
                <Title title="Breakfast" />
                <FormControl margin="dense">
                  <Input value="Type what you ate" />
                </FormControl>
                <FormControl margin="dense">
                  <Input value="Type amout" />
                </FormControl>
                <AddButton />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="display-column">
                <Title title="Lunch" />
                <FormControl margin="dense">
                  <Input value="Type what you ate" />
                </FormControl>
                <FormControl margin="dense">
                  <Input value="Type amout" />
                </FormControl>
                <AddButton />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="display-column">
                <Title title="Dinner" />
                <FormControl margin="dense">
                  <Input value="Type what you ate" />
                </FormControl>
                <FormControl margin="dense">
                  <Input value="Type amout" />
                </FormControl>
                <AddButton />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="display-column">
                <Title title="Snacks" />
                <FormControl margin="dense">
                  <Input value="Type what you ate" />
                </FormControl>
                <FormControl margin="dense">
                  <Input value="Type amout" />
                </FormControl>
                <AddButton />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
