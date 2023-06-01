import { createContext, useReducer, useState } from "react";

import Products from "../../MOCK_DATA.json";

import { RemoveFromCart, addItemIntoCart } from "../../utils";

const Context = createContext();

const INITIAL_STATE = {
  productItems:Products,
  allOrders:[]
}

const productReducer = (state,action) => {
  const {type,payload} = action 

  switch(type){
    case "ADD_ITEM_INTO_CART":
      return {
        ...state,
        allOrders:payload
      }
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state, 
        allOrders:payload
      }  

    default:
      return state  
  }
}

const ProductContext = ({ children }) => {

const [{allOrders,productItems},dispatch] = useReducer(productReducer,INITIAL_STATE)


  const addToCart = (productToAdd) => {
    dispatch({
      type:'ADD_ITEM_INTO_CART',
      payload: addItemIntoCart(allOrders,productToAdd)
    })
  };

  const removeItemFromCart = (orderToRemove) => {
     dispatch({
      type:'REMOVE_ITEM_FROM_CART',
      payload: RemoveFromCart(allOrders,orderToRemove)
    })
  }

  const value = {
    productItems,
    allOrders,
    addToCart,
    removeItemFromCart
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ProductContext };
