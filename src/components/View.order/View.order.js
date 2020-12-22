import React, { Component } from "react";
import { Link } from "react-router-dom";
class ViewOrder extends Component {
  constructor() {
    super();
    // this.HandelViewDetails = this.HandelViewDetails.bind(this);
    // this.state = {
    //   pagination: [],
    //   status: true
    // };
  }
//   componentWillMount() {
//     let tmp = [];
//     for (let i = 1; i <= this.props.totalpage; i++) {
//       tmp.push(i);
//     }
//     this.setState({ pagination: tmp });
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.totalpage !== this.props.totalpage) {
//       let tmp = [];
//       for (let i = 1; i <= nextProps.totalpage; i++) {
//         tmp.push(i);
//       }
//       this.setState({ pagination: tmp });
//     }
//   }
//   renderPagination() {
//     if (this.state.pagination.length === 0) {
//       return null;
//     } else {
//       return (
//         <ul className="pagination pagination-custom col-md-6 offset-md-3">
//           <li onClick={() => this.props.backPage()}>
//             <a>&laquo;</a>
//           </li>
//           {this.state.pagination.map((element, index) => {
//             if (this.props.page === element) {
//               return (
//                 <li
//                   className="active"
//                   onClick={() => this.props.setPage(element)}
//                 >
//                   <a>{element}</a>
//                 </li>
//               );
//             } else {
//               return (
//                 <li onClick={() => this.props.setPage(element)}>
//                   <a>{element}</a>
//                 </li>
//               );
//             }
//           })}
//           <li onClick={() => this.props.nextPage()}>
//             <a>&raquo;</a>
//           </li>
//         </ul>
//       );
//     }
//   }
  HandelViewDetails(){
           
  }
  render() {
    return (
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
    );
  }
}
export default ViewOrder;
