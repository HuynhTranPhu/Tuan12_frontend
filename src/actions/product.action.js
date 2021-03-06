import axios from 'axios'
import { productTypes, PRODUCT_LIST_SUCCESS } from '../constants/action.types'



require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;
//product
export const getProduct = () => async (dispatch, getState) => {
    let res
    // try {
    //     res = await axios.post('http://localhost:8080/product/getallproduct', {
    //         page: getState().productReducers.product.page,
    //         range: null
    //     })
    // }
    try {
        res = await axios.get(`${url}/admin/getallproduct/` + getState().productReducers.product.page)
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setProduct(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}
export const listProducts = () => async (dispatch) =>{
    try{
         const {data} = await axios.get(`${url}/product`);
        //console.log({data});
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
    }  
    catch(error){
        
    }

}
export const deleteProduct = (id) => async(dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/deleteproduct/` +id)
    }
    catch (err) {
        console.log(err)
        return
    }
    //console.log(res)
    dispatch(getProduct())
}
export const addProduct = (id_category, name,color,quantity, price, description, id_brand, file) => async (dispatch, getState) => {
    let data = new FormData()
    data.append('file', file)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('color', color) 
    data.append('quantity', quantity) 
    data.append('price', price)  
    data.append('description', description)
    data.append('id_brand', id_brand)
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addproduct`, data)
    }
    catch(err) {
        dispatch(addProductFail())
        return
    } 
    dispatch(addProductSuccess())
    dispatch(getProduct())
}
export const updateProduct = (id, name,color,quantity, id_category, price, description, id_brand, file, status) => async (dispatch, getState) => {
    let data = new FormData()
    data.append('file', file)
    data.append('id', id)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('color', color) 
    data.append('quantity', quantity) 
    data.append('price', price)  
    data.append('description', description)
    data.append('id_brand', id_brand)
    data.append('status', status)
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updateproduct`, data)
    }
    catch(err) {
        dispatch(updateProductFail())
        return
    } 
    dispatch(updateProductSuccess())
    dispatch(getProduct())
}

export const setProduct = (data) => ({
    type: productTypes.SET_PRODUCT,
    data
})


export const setPage = (page) => ({
    type: productTypes.SET_PAGE,
    page
})
export const setTotalPage = (totalpage) => ({
    type: productTypes.SET_TOTAL_PAGE,
    totalpage
})
export const brandSetPage = (page) => ({
    type: productTypes.BRAND_SET_PAGE,
    page
})
export const brandSetTotalPage = (totalpage) => ({
    type: productTypes.BRAND_SET_TOTAL_PAGE,
    totalpage
})
export const categorySetPage = (page) => ({
    type: productTypes.CATEGORY_SET_PAGE,
    page
})
export const categorySetTotalPage = (totalpage) => ({
    type: productTypes.CATEGORY_SET_TOTAL_PAGE,
    totalpage
})



export const getCategory = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get(`${url}/admin/getallcategory/` + getState().productReducers.category.page)
    }
    catch (err) {
        return
    }
    dispatch(setCategory(res.data.data))
    dispatch(categorySetTotalPage(res.data.totalPage))
}



export const getBrand = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get(`${url}/admin/getallbrand/` + getState().productReducers.brand.page)
    }
    catch(err) {
        return
    }
    dispatch(setBrand(res.data.data))
    dispatch(brandSetTotalPage(res.data.totalPage))
}

export const setCategory = (data) => ({
    type: productTypes.SET_CATEGORY_PRODUCT,
    data
})


export const setBrand = (data) => ({
    type: productTypes.SET_BRAND,
    data
})
export const addCategorySuccess = () =>({
    type: productTypes.ADD_CATEGORY_SUCCESS
})
export const addCategotyFail = () => ({
    type: productTypes.ADD_CATEGORY_FAIL
})
export const updateCategorySuccess = () => ({
    type: productTypes.UPDATE_CATEGORY_SUCCESS
})
export const updateCategoryFail = () => ({
    type: productTypes.UPDATE_CATEGORY_FAIL
})
export const resetCategory = () => ({
    type: productTypes.RESET_CATEGORY
})
export const addCategory =  (name, path) => async (dispatch, getState) => {
    dispatch(resetCategory())
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addcategory`, {
            name: name,
            path: path
        })
    }
    catch(err) {
        dispatch(addCategotyFail())
        return
    } 
    dispatch(addCategorySuccess())
    dispatch(getCategory())
}

export const updateCategory =  (id, name, status) => async (dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updatecategory`, {
            id: id,
            name: name,
            status:status
        })
    }
    catch(err) {
        dispatch(updateCategoryFail())
        return
    } 
    dispatch(updateCategorySuccess())
    dispatch(getCategory())
}
export const addBrandSuccess = () =>({
    type: productTypes.ADD_BRAND_SUCCESS
})
export const addBrandFail = () => ({
    type: productTypes.ADD_BRAND_FAIL
})
export const updateBrandSuccess = () => ({
    type: productTypes.UPDATE_BRAND_SUCCESS
})
export const updateBrandFail = () => ({
    type: productTypes.UPDATE_BRAND_FAIL
})
export const resetBrand = () => ({
    type: productTypes.RESET_BRAND
})
export const addBrand =  (name) => async (dispatch, getState) => {
    dispatch(resetBrand())
    //let res
    try {
        //res = 
        await axios.post(`${url}/admin/addbrand`, {
            name: name
        })
    }
    catch(err) {
        dispatch(addBrandFail())
        return
    } 
    dispatch(addBrandSuccess())
    dispatch(getBrand())
}

export const updateBrand =  (id, name, status) => async (dispatch, getState) => {
    //let res
    try {
        //res = 
        await axios.put(`${url}/admin/updatebrand`, {
            id: id,
            name: name,
            status:status
        })
    }
    catch(err) {
        dispatch(updateBrandFail())
        return
    } 
    dispatch(updateBrandSuccess())
    dispatch(getBrand())
}
export const backPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.brand.page
    let totalpage = getState().productReducers.brand.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}
export const brandBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.product.page
    if(page > 1) {
        dispatch(brandSetPage(parseInt(page) - 1))
    }
}

export const brandNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.brand.page
    let totalpage = getState().productReducers.brand.totalpage
    if(page < totalpage) {
        dispatch(brandSetPage(parseInt(page) + 1))
    }
}
export const categoryBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.category.page
    if(page > 1) {
        dispatch(categorySetPage(parseInt(page) - 1))
    }
}

export const categoryNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.category.page
    let totalpage = getState().productReducers.category.totalpage
    if(page < totalpage) {
        dispatch(categorySetPage(parseInt(page) + 1))
    }
}

export const orderBackPage = () => (dispatch, getState) => {
    let page = getState().productReducers.order.page
    if(page > 1) {
        dispatch(orderSetPage(parseInt(page) - 1))
    }
}

export const orderNextPage = () => (dispatch, getState) => {
    let page = getState().productReducers.order.page
    let totalpage = getState().productReducers.order.totalpage
    if(page < totalpage) {
        dispatch(orderSetPage(parseInt(page) + 1))
    }
}
export const addProductSuccess = () => ({
    type: productTypes.ADD_PRODUCT_SUCCESS
})
export const addProductFail = () => ({
    type: productTypes.ADD_PRODUCT_FAIL
})
export const updateProductSuccess = () => ({
    type: productTypes.UPDATE_PRODUCT_SUCCESS
})
export const updateProductFail = () => ({
    type: productTypes.UPDATE_PRODUCT_FAIL
})

export const setOrder = (data) => ({
    type: productTypes.ORDER_SET_DATA,
    data
})
export const setOrderById = (data) => ({
    type: productTypes.ORDER_SET_DATA_BY_ID,
    data
})
export const orderSetPage = (page) => ({
    type: productTypes.ORDER_SET_PAGE,
    page
})
export const orderSetTotalPage = (totalpage) => ({
    type: productTypes.ORDER_SET_TOTAL_PAGE,
    totalpage
})
