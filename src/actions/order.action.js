import axios from "axios";
import { orderConstants,VIEW_HISTORY_REQUEST,VIEW_HISTORY_SUCCESS, VIEW_HISTORY_FAIL } from "../constants/action.types";

export const getCustomerOrders = () => async (dispatch)=> {
   
    try {
      dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
      const {data} = await axios.get("/order/all");
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: data
        });
       
    } catch (error) {
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_FAILURE,
        payload: error.message
      });
    }
};
// export const getCustomerOrders = () => {
//   return async (dispatch) => {
//     dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
//     try {
//       const res = await axios.post("/order/getCustomerOrders");
//       if (res.status === 200) {
//         const { orders } = res.data;
//         //console.log(orders);
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
        dispatch(viewHistoryGet(payload.id_order));
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
export const viewHistoryGet = (id_order) => async (dispatch) =>{
  try{
      dispatch({type: VIEW_HISTORY_REQUEST, payload: id_order});
      const {data} = await axios.get("/order/detail/" +id_order);
      dispatch({type: VIEW_HISTORY_SUCCESS, payload:data });
      //console.log(data);
  }
  catch(error){
      const message=
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      dispatch({type: VIEW_HISTORY_FAIL, payload: message})
  }
}