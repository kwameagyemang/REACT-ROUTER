import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// Components
// relative path means you are starting from this file and going somewhere else
// we are inside App.js and we are trying to get into NavBar.js
// . = current folder whereas .. means the parent folder
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'

// pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
// css
import '../App.css'

/* 
  =========================================
                REACT ROUTER
  =========================================

  • LEARNING OBJECTIVES •
  -----------------------
  1.) Use React Router to define client-side <Route> Components
  2.) Render "page" components using React Router
  3.) Create hyperlinks using <Link>
  4.) Access URL Parameters
  5.) Make our application feel more like a website

     • DOCUMENTATION •
  -----------------------
  Link: https://reactrouter.com/web/guides/quick-start

         • SETUP •
  -----------------------
  1.) npx create-react-app react-router
  2.) cd react-router
  3.) npm start
  4.) npm install react-router-dom

*/

/*
  ==========================================
            BEFORE YOU ASK ME WHY
  ==========================================

  • Let's go to "reactjs.org" and click away while watching the URL.

  • Sets information in the URL parameters to help our users know where they're at in our application.

  • Will be THE great ancestor of our app, rendering other components inside of it. 

  • Commonly used "routing" library for React. Looks like React components.

  • Routing allows us to match our URL parameters to render specific components that we want.

 ===== TASKS =====
  1.) Import BrowserRouter in index.js
  2.) Import Link. Create Links inside App.js
  3.) Let's create pages and components folders

  PSA: pages and components folders will all have components but are separated. We put components rendered by React Router in pages because it makes it more organized and easier to differentiate when we start creating more components. So...if the component changes the URL, it should probably go inside pages folder. 

  4.) Let's create a nav bar and a footer
  5.) Move our Links inside NavBar
  6.) Create pages components for About and Contact
  7.) Let's render our pages components. Import Switch and Route. 
*/


class App extends Component {
  render() {
    return (
      <div id="app">
        {/* THIS IS OUR HOME PAGE */}
        {/* Link is imported at the top. We pass on attribute "to" which tells Link what the URL path parameter should look like */}
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <NavBar />

          {/* 
            We will use <Switch> from React Router which looks inside it's children <Route> to render the first one that matches the URL
          
          
          
          
          */}

          <Switch>
            {/* Route is a child */}
            <Route path="/contact">
              <Contact/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;