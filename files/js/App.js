import React, { useState } from "react";
import ReactDOM from "react-dom";
import PhotoContextProvider from "../context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import NotFound from "../components/NotFound";
import '../scss/main.scss';

const App = () => {

  const [color, updateColor] = useState("red")
 
  const changeColor = (color) => {
    updateColor(color)
  }
    
      return (
        <PhotoContextProvider>
          <HashRouter>
            <div className="container">
              <Header color={color} changeColor={changeColor} />
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/traditional" />}/>
                <Route path="/traditional" render={() => <Container color={color} searchTerm="traditional tattoo" />}/>
                <Route path="/blackgray" render={() => <Container color={color} searchTerm="black and gray tattoo" />} />
                <Route path="/watercolor" render={() => <Container color={color} searchTerm="watercolor tattoo" />} />
                <Route path="/neotraditional" render={() => <Container color={color} searchTerm="neotraditional tattoo" />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </HashRouter>
        </PhotoContextProvider>
      );
  }


ReactDOM.render(<App/>, document.getElementById("app"));
