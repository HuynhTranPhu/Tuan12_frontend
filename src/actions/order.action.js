import axios from "axios";
import { orderConstants } from "../constants/action.types";


//Get all orders of customer
export const getCustomerOrders = () =>async (dispatch)=> {
    try {
      dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
      const {data} = await axios.get("/order/all");
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: data
        });
        console.log(data);
      }
      catch (error) {
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_FAILURE,
        payload: { error },
      });
      console.log(error);
      };
};
// export const getCustomerOrders = () => {
//   return async (dispatch) => {
//     dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
//     try {
//       const res = await axios.get("/order/all");
//       if (res.status === 200) {
//         const { orders } = res.data;
//         dispatch({
//           type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
//           payload: { orders },
//         });
//       } else {
//         const { error } = res.data;
//         dispatch({
//           type: orderConstants.GET_CUSTOMER_ORDER_FAILURE,
//           payload: { error },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// Update status of order user
export const updateOrder = (payload) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_REQUEST });
    try {
      const res = await axios.post("/order/update", payload);
      if (res.status === 201) {
        dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_SUCCESS });
        dispatch(getCustomerOrders());
      } else {
        const { error } = res.data;
        dispatch({
          type: orderConstants.UPDATE_CUSTOMER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
