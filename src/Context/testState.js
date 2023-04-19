import React, { useReducer } from "react";
import axios from "axios";
import TestContext from "./testContext";
import TestReducer from "./testReducer";
import { SERVER_URL } from "./constant";
import interceptorForAxios from "../components/Tools/setAuthToken";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  CREATE_DATA_USER_SUCCESS,
  CREATE_DATA_USER_FAIL,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAIL,
  GET_TOURNAMENT_BY_ID_SUCCESS,
  GET_TOURNAMENT_BY_ID_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,

} from "./types";

const TestState = (props) => {
  interceptorForAxios();
  const initialState = {
    // token: localStorage.getItem("token"),

    token: localStorage.getItem("accessToken"),
    isAuthenticated: localStorage.getItem("isAuthenticated"),
    loading: localStorage.getItem("loading"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    err: localStorage.getItem("error"),

    err: null,
    selectedDate: null,
    createdItemInUserData: null,
    userByIdData: null,
    logedinUserData: null,
    popupAlertData: null,

    updateVerificationData: null,


    checkUserData: null,


    userInfoData: null,
    updateUserData: null,
    createProductData: null,
    allProductsData: null,
    deletedProductData: null,

  };

  const [state, dispatch] = useReducer(TestReducer, initialState);
  const loadUser = async () => {
    //  setAuthToken(localStorage.token);

    try {
      const res = await axios.get(SERVER_URL + "/auth");
      console.log("auth data res", res.data);
      await dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  const CheckUserExist = async (frmData) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CheckUserExist/",
        frmData,
        config
      );
      dispatch({
        type: CREATE_DATA_USER_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CREATE_DATA_USER_FAIL,
        payload: err,
      });
    }
  };
  const CreateProduct = async (frmData) => {

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/CreateProduct/",
        frmData,
        config
      );
      console.log('createproduct', res.data);
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: CREATE_PRODUCT_FAIL,
        payload: err,
      });
    }
  };


  const UpdateUserPassword = async (frmData) => {
    // setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + "/UpdateItemInUser",
        frmData,
        config
      );
      dispatch({
        type: UPDATE_USER_PASSWORD_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: UPDATE_USER_PASSWORD_FAIL,
        payload: err,
      });
    }
  };



  const GetUserInfo = async () => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetUserInfo/", config);
      dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_USER_INFO_FAIL,
        payload: err,
      });
    }
  };
  const DeleteProduct = async (Id) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "id": Id
      },
    };

    try {
      const res = await axios.delete(SERVER_URL + "/DeleteProduct/", config);
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: err,
      });
    }
  };
  const GetAllProducts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(SERVER_URL + "/GetAllProducts/", config);
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        payload: err,
      });
    }
  };



  const GetTournamentById = async (id) => {
    //setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/GetTournamentById/" + id,
        config
      );
      dispatch({
        type: GET_TOURNAMENT_BY_ID_SUCCESS,
        payload: res.data,
      });
      // })
    } catch (err) {
      dispatch({
        type: GET_TOURNAMENT_BY_ID_FAIL,
        payload: err,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(SERVER_URL + "/login", formData, config);
      console.log("login:", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      console.log("loginerror:", err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response,
      });
    }
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });
  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <TestContext.Provider
      value={{
        token: state.token,
        err: state.err,
        createdItemInUserData: state.createdItemInUserData,
        userByIdData: state.userByIdData,
        logedinUserData: state.logedinUserData,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        createProductData: state.createProductData,
        allProductsData: state.allProductsData,
        deletedProductData: state.deletedProductData,

        CreateProduct,
        login,
        loadUser,
        logout,
        clearErrors,
        CreateProduct,
        GetAllProducts,
        DeleteProduct,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
