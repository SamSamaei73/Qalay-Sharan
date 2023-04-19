/* eslint-disable import/no-anonymous-default-export */
import {

  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,

} from "./types";
export default (state, action) => {
  switch (action.type) {


    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deletedProductData: action.payload,
      };
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProductsData: action.payload,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        createProductData: action.payload,
      };
    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userByIdData: action.payload,
      };
    case GET_USER_BY_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    //authentication and authorization
    case USER_LOADED:
      localStorage.isAuthenticated = true;
      localStorage.loading = false;
      localStorage.user = JSON.stringify(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      //localStorage.setItem(`token`, `'` + action.payload.token + `'`);
      localStorage.accessToken = action.payload.accessToken;
      localStorage.refreshToken = action.payload.refreshToken;
      localStorage.isAuthenticated = true;
      localStorage.loading = false;
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        //token: action.payload.token,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("loading");
      localStorage.removeItem("user");
      localStorage.removeItem("error");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        err: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        err: null,
      };

    default:
      return state;
  }
};
