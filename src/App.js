import React, { Component } from 'react';
import {Route,Link,Switch, withRouter} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
import './App.css';




class App extends Component {

    state = {
      loggedIn: false
    }
    
    componentDidMount(){
      if (this.state.loggedIn) {
        this.props.history.push(`/about`);
      }
    }
    
    redirectAbout = () => {
      this.setState({
        loggedIn: true
    })
  }

    render() {

        return (
                  <header>
                      <h1>Learn Routing</h1>
                      <nav>
                          {/* Create our nav bar links using the Link element from react router */}
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li><button onClick={this.redirectAbout}>Log In</button></li>
                          </ul>
                      </nav>
      
                      {/* Create the routes. This will not appear on the page. */}
                      <div className="main">
                          <Switch>
                              <Route exact path="/" component={Home} />
                              <Route path="/about" component={ About } />

                              <Route
                                path="/profile/:user/:birth"
                                render={()=>{
                                  return <Profile />
                                }}
                                />
                              <Route
                                path="/profile/:name"
                                render={()=>{
                                  return <Profile />
                                }}
                                />
                    
                              <Route path="*"
                              render={()=> {
                              return <h1>  401 </h1>; 
                              }}
                              />
                              
                              
                        </Switch>
                        
                        <section>
                        <Switch>

                              <Route exact path="/" render={()=>{
                                  return <h1>Copyright</h1>
                                }}
                                />
                              <Route
                                path="/about"
                                render={()=>{
                                  return <h1>LOOK AT ME</h1>
                                }}
                                />
                              

                              </Switch>
                        </section>
                      
                      </div>
                  </header>
  );
  }
}

export default withRouter(App);
