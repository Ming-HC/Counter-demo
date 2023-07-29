import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Counter from './components/Counter';
 
class App extends Component {

  aligncenterStyle = {
    padding: '32px'
  }

  render() {
    return (      
       <BrowserRouter>
        <div style={this.aligncenterStyle}>
            <Switch>
             <Route path="/Counter-demo" component={Counter} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
