import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import ViewOrder from "../components/View.order/View.order";
class ViewOrderContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.productActions.getOrder("true");
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <ViewOrder
          order={this.props.order}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  islogin: state.userReducers.user.islogin,
  order: state.productReducers.order.data
});

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewOrderContainer);
