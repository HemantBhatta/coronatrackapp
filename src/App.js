import React, { Component } from 'react';
// import {myContext} from './Context'
import ContextPro from './Context'
import Home from './components/Home'
import Detail from './components/Detail'
import AllCountry from './components/AllCountry'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'


class App extends Component{

render(){
  return(
    <ContextPro>

      <Router>

          <Route exact path="/" component={AllCountry}/>
          <Route exact path="/detail" component={Home}/>

          <Route exact path="/detail/:code" component={Detail}/>

         
         
    
      </Router>
      
    </ContextPro>
  )
}
}
export default App;
