 import React, { Component } from 'react'
 import Navbar from './component/Navbar';
  import Cardheader from './component/Cardheader';
  import { Route, Switch } from 'react-router-dom';
 
 export default class App extends Component {
   render() {
     return (
       <div>
          <Navbar/>

       

          <Switch>
           <Route path="/" exact>  <Cardheader    key="general" country="in" category="general"  hed="Science" /> </Route>

           <Route path="/sport" exact >  <Cardheader   key="sport"  country="in"  category="sport" hed="Sport" /> </Route>

           <Route path="/science" exact>  <Cardheader    key="science" country="in" category="science"  hed="Science" /> </Route>
           <Route path="/business" exact>  <Cardheader   key="business"  country="in" category="business" hed="Business" /> </Route>
           <Route path="/entertainment"exact>  <Cardheader   key="entertainment"  country="in" category="entertainment" hed="Entertainment" /> </Route>
           <Route path="/general" exact>  <Cardheader   key="general"  country="in" category="general" hed="General" /> </Route>
           <Route path="/health" exact>  <Cardheader   key="health"  country="in" category="health" hed="Health" /> </Route>
           <Route path="/technology" exact>  <Cardheader   key="technology"  country="in" category="technology" hed="Technology" /> </Route>
           technology
           </Switch>
       </div>
     )
   }
 }
  
 