import { orderConstants } from "../constants/action.types";
import { combineReducers } from 'redux';

const initState = {
  orders: [
    {
      _id: "5fe405113115a00017958fb5",
      id_user: "5fd81b4034ab8e0017c1c551",
      cart: [
      {
      _id: "5fc60094115bde47d0eef5bd",
      name: "Áo Tay Dài",
      price: 13,
      img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811795/ncfpvhdhft2h8xx2xeyq.jpg",
      count: 1
      },
      {
      _id: "5fc60104115bde47d0eef5be",
      name: "T-Shirt Men",
      price: 14,
      img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811907/b9kaio93mhe9zqzr2o2g.jpg",
      count: 1
      }
      ],
      city: "TPHCM",
      order_subtotal: 37,
      posteCode: 45120,
      address: "HoChiMinh",
      phone: "+84343048571",
      name: "Huỳnh Trần Phú",
      email: "huynhtranphu99@gmail.com",
      shiping: 10,
      paymentStatus: "pending",
      payment: "Paypal",
      orderStatus: [
      {
      type: "ordered",
      isCompleted: true,
      _id: "5fe405113115a00017958fb6",
      date: "2020-12-24T03:03:45.949Z"
      },
      {
      type: "packed",
      isCompleted: false,
      _id: "5fe405113115a00017958fb7"
      },
      {
      type: "shipped",
      isCompleted: false,
      _id: "5fe405113115a00017958fb8"
      },
      {
      type: "delivered",
      isCompleted: false,
      _id: "5fe405113115a00017958fb9"
      }
      ],
      order_date: "2020-12-24T03:03:45.951Z",
      __v: 0
      },
      {
        _id: "5fe40edf1104331e78ea55ff",
        id_user: "5fd3911236727a2b142234f5",
        cart: [
        {
        _id: "5fa94200b2217918c42f19a4",
        name: "ao dai",
        price: 15,
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1605061356/iy1lrjdrrkshpif7g2vd.jpg",
        count: 3
        }
        ],
        city: "bg",
        order_subtotal: 55,
        posteCode: 100,
        address: "vfd",
        phone: "546",
        name: "Minh Phú",
        email: "minhphuson1999@gmail.com",
        shiping: 10,
        paymentStatus: "pending",
        payment: "Vfs",
        orderStatus: [
        {
        type: "ordered",
        isCompleted: true,
        _id: "5fe40edf1104331e78ea5600",
        date: "2020-12-24T03:45:35.123Z"
        },
        {
        type: "packed",
        isCompleted: false,
        _id: "5fe4104ac338f13c94276268",
        date: "2020-12-24T03:51:38.750Z"
        },
        {
        type: "shipped",
        isCompleted: false,
        _id: "5fe40edf1104331e78ea5602"
        },
        {
        type: "delivered",
        isCompleted: false,
        _id: "5fe40edf1104331e78ea5603"
        }
        ],
        order_date: "2020-12-24T03:45:35.130Z",
        __v: 0
        }
  ]
};

// const initState = {
//   orders: [],
// };

const order = (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload
      };
      break;
  }

  return state;
};


export default combineReducers({
    order
})
