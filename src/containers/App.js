import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./home.container";
import ProductContainer from "./product.container";
import CategoryContainer from "./category.container";
import BrandContainer from "./brand.container";
import UserContainer from "./user.container";
import LoginContainer from "./login.container";
import StatisticalContainer from './statistical.container'
import Orders from './OrderContainer/order.container'
import History from "./History";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/productmanager" component={ProductContainer} />
          <Route exact path="/categorymanager" component={CategoryContainer} />
          <Route exact path="/brandmanager" component={BrandContainer} />
          <Route exact path="/usermanager" component={UserContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/statistical" component={StatisticalContainer} />
          <Route exact path="/ordermanager/:id" component={Orders} />
          <Route exact path="/order" component={History} />
          {/* <Route exact path="/view-orderDetail" component={viewOrderContainer} /> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
