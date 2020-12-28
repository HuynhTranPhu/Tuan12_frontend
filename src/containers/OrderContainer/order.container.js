// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as productActions from "../actions/product.action";
// import NavbarContainer from "./navbar.container";
// import Slider from "./slider.container";
// import * as userActions from "../actions/user.action";
// import Order from "../components/order/order";
// class OrderContainer extends Component {
//   constructor() {
//     super();
//   }
//   async componentWillMount() {
//     this.props.productActions.getOrder("true");
//     let res = await this.props.userActions.auth();
//     if (res === false) this.props.history.push("/login");
//   }
//   componentWillReceiveProps(nextProps) {
//     if (
//       nextProps.islogin !== this.props.islogin &&
//       nextProps.islogin === false
//     ) {
//       this.props.history.push("/login");
//     }
//   }
//   render() {
//     return (
//       <section id="container" className="">
//         <NavbarContainer />
//         <Slider />
//         <Order
//           page={this.props.page}
//           totalpage={this.props.totalpage}
//           order={this.props.order}
//           backPage={() => this.props.productActions.orderBackPage()}
//           nextPage={() => this.props.productActions.orderNextPage()}
//           setPage={page => this.props.productActions.orderSetPage(page)}
//           getOrder={(status => this.props.productActions.getOrder(status))}
//         />
//       </section>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   islogin: state.userReducers.user.islogin,
//   totalpage: state.productReducers.order.totalpage,
//   page: state.productReducers.order.page,
//   order: state.productReducers.order.data
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     productActions: bindActionCreators(productActions, dispatch),
//     userActions: bindActionCreators(userActions, dispatch)
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(OrderContainer);

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerOrders, updateOrder, viewHistoryGet } from "../../actions/order.action";
import Card from "../../components/UI/Card/index";
import NavbarContainer from "../navbar.container";
import Slider from "../slider.container";

import "./index.css";

/**
 * @author
 * @function Orders
 **/

const Orders = (props) => {
  //const order = useSelector((state) => state.order);
  const viewHistoryOder = useSelector((state) => state.viewHistoryOder);
  const {viewHistory} = viewHistoryOder;
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  //console.log(viewHistory);

  const onOrderUpdate = (id_order) => {
    const payload = {
      id_order,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };
  useEffect(() => {
    dispatch(viewHistoryGet(props.match.params.id));
    //dispatch(viewHistoryGet(id_order));
  }
, [dispatch])

  return (
    <section id="container" className="">
    <NavbarContainer /> 
    <Slider />
    
    {viewHistory.map((orderItem, index) => (
        <Card 
          key={index}
          headerLeft={"OrderId:"+" "+orderItem._id}
        >
          <div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 10px",
              marginLeft:"200px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="title">Items</div>
              {orderItem.cart.map((item, index) => (
                <div className="value" key={index}>
                  {item.name}
                </div>
              ))}
            </div>
            <div>
              <span className="title">Total Price</span>
              <br />
              <span className="value">{orderItem.order_subtotal}</span>
            </div>
            <div>
              <span className="title">Payment Type</span> <br />
              <span className="value">{orderItem.payment}</span>
            </div>
            <div>
              <span className="title">Phone</span> <br />
              <span className="value">{orderItem.phone}</span>
            </div>
            <div>
              <span className="title">Address</span> <br />
              <span className="value">{orderItem.address}</span>
            </div>
            <div>
              <span className="title">Payment Status</span> <br />
              <span className="value">{orderItem.paymentStatus}</span>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              padding: "100px",
              display: "flex",
              marginLeft:"200px",
              alignItems: "center",
            }}
          >
            <div className="orderTrack">
              {orderItem.orderStatus.map((status) => (
                <div
                  className={`orderStatus ${
                    status.isCompleted ? "active" : ""
                  }`}
                >
                  <div
                    className={`point ${status.isCompleted ? "active" : ""}`}
                  ></div>
                  <div className="orderInfo">
                    <div className="status">{status.type}</div>
                    <div className="date">{formatDate(status.date)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* select input to apply order action */}
            <div
              style={{
                marginLeft:"20px",
                padding: "0 50px",
                boxSizing: "border-box",
              }}
            >
              <select onChange={(e) => setType(e.target.value)}>
                <option value={""}>select status</option>
                {orderItem.orderStatus.map((status) => {
                  return (
                    <>
                      {!status.isCompleted ? (
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                      ) : null}
                    </>
                  );
                })}
              </select>
            </div>
            {/* button to confirm action */}

            <div>
              <button className="confirm" onClick={() => onOrderUpdate(orderItem._id)}>
                confirm
              </button>
            </div>
          </div>
        </Card>
      ))}
    
    </section>
    
     
  );
};

export default Orders;

