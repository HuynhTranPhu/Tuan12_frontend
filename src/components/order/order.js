import React, { Component } from "react";
import { Link } from "react-router-dom";
class Order extends Component {
  constructor() {
    super();
    this.HandelViewDetails = this.HandelViewDetails.bind(this);
    this.state = {
      pagination: [],
      status: true
    };
  }
  componentWillMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalpage !== this.props.totalpage) {
      let tmp = [];
      for (let i = 1; i <= nextProps.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom col-md-6 offset-md-3">
          <li onClick={() => this.props.backPage()}>
            <a>&laquo;</a>
          </li>
          {this.state.pagination.map((element, index) => {
            if (this.props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => this.props.setPage(element)}
                >
                  <a>{element}</a>
                </li>
              );
            } else {
              return (
                <li onClick={() => this.props.setPage(element)}>
                  <a>{element}</a>
                </li>
              );
            }
          })}
          <li onClick={() => this.props.nextPage()}>
            <a>&raquo;</a>
          </li>
        </ul>
      );
    }
  }
  HandelViewDetails(){
            <div className="placeorder">
              <div className="placeorder-info">
                  <div>
                      <h3>
                          Shipping
                      </h3>
                      <div>
                          {this.props.order.map(item=>item.address )},
                          {this.props.order.map(item=>item.city)},
                          {this.props.order.map(item=> item.posteCode )},
                          {this.props.order.map(item=>item.phone)}
                      </div>
                  </div>
                  <div>
                      <h3>
                          Payment
                      </h3>
                      <div>
                          Payment Method: {this.props.order.map(item=>item.payment)}
                      </div>
                  </div>
                      <div className="cart-page">
                          <div className="container-fluid">
                              <div className="row">
                                  <div className="col-lg-12" >
                                      <div className="cart-page-inner">
                                          <div className="table-responsive">
                                              <table className="table table-bordered">
                                                  <thead className="thead-dark"> 
                                                          <tr>
                                                              <th>Product</th>
                                                              <th>Price</th>
                                                              <th>Quantity</th>
                                                              <th>Total</th>
                                                              
                                                          </tr>    
                                                  </thead>
                                                  <tbody className="align-middle">
                                                      {
                                                          this.props.order.map(item=>
                                                              <>
                                                                  
                                                                  {item.cart.map(i=>  
                                                                      <tr key={i._id}>

                                                                          <td>
                                                                              <div className="img">
                                                                                  <Link to={"/product/"+i._id}>
                                                                                  <img src={i.img} alt="Product" />
                                                                                  </Link>
                                                                                  <p><Link to ={"/product/" +i._id}>  {i.name}</Link></p>     
                                                                              </div>
                                                                          </td>
                                                                          <td>${i.price}</td>
                                                                          <td>
                                                                              <div className="qty">
                                                                                  
                                                                                  <input type="text"
                                                                                  value={i.count}  />
                                                                                  
                                                                              </div>
                                                                          </td>
                                                                          <td>${i.price * i.count}</td>

                                                                      </tr>
                                                                      
                                                                  )}
                                                              </>
                                                          )}
                                                      
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>
              </div>
            <div className="placeorder-action">
                <ul>
                    <li>
                        <h3><b>Order Summary</b></h3>
                    </li>
                    <li>
                        
                            <div>
                                SubTotal
                            </div>
                            <div>
                                ${this.props.order.map(item=>item.order_subtotal.toFixed(2) )}
                            </div>
                        
                        
                    </li>
                    <li>
                        
                            <div>
                                Shipping
                            </div>
                            <div>
                                {/* ${this.props.order.map(item=>item.shipping.toFixed(2) )} */}
                            </div>
                        
                        
                    </li>
                    <li>
                        
                        <div>
                            Order Total
                        </div>
                        <div>
                            ${this.props.order.map(item=>item.order_subtotal.toFixed(2) )}
                        </div>
                    </li>
                </ul>   
            </div>
        </div>
  }
  render() {
    return (
      <section id="main-content">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
              <i className="fa fa-table" /> Table
            </h3>
            <ol className="breadcrumb">
              <li>
                <i className="fa fa-home" />
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-table" />Table
              </li>
              <li>
                <i className="fa fa-th-list" />Order Manager
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">
                Advanced Table
                <span style={{ marginLeft: "50px", marginRight: "30px" }}>
                  Select Day
                </span>
                <select onChange={e => this.props.getOrder(e.target.value)}>
                  <option
                    value="false"
                    disabled
                    selected 
                    style={{ display: "none" }}
                  >
                    Select Status
                  </option>
                  <option value="true">VERIFY</option>
                  <option value="false">NOT VERIFY</option>
                </select>
              </header>
              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>
                      <i className="icon_profile" /> Name
                    </th>
                    <th>
                      <i className="icon_pin_alt" />Address  
                    </th>
                    <th>
                      <i className="icon_mail_alt" /> Email
                    </th>
                    <th>
                      <i className="icon_phone" /> Phone
                    </th>
                    <th>
                      <i className="icon_calendar" />  Date
                    </th>
                    <th>
                      <i className=" icon_cart" /> Products
                    </th>
                  </tr>
                  {this.props.order.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>
                          {element.address +
                            ", " +
                            element.city}
                        </td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.order_date.substring(0, 10)}</td>
                        <td>
                          {/* <select>
                            <option
                              value=""
                              disabled
                              selected
                              style={{ display: "none" }}
                            >
                              Products
                            </option>
                            {element.cart.map((item, index) => {
                              return (
                                  <option>
                                      {item.name + " - " + item.count}
                                  </option>
                              )
                            })}
                          </select> */}
                          <Link to="/view-orderDetail">View Details</Link>
                          {/* <button  onClick={this.HandelViewDetails}>View Details</button> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {this.renderPagination()}
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default Order;
