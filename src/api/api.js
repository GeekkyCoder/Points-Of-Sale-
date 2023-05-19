import { message } from "antd";

// provide urls for getting data from backend!

/*
 1: replace url with actual url, 

 2) response format must be like this, in order to display data 
 leads: {
    onlineSales: {
        data:[100,222,333,444,555,666]
    },
    offlineSales:[100,300,150,50,90]
 }
*/

// replace this url 👇
const LEADS_API = "https://dummyjson.com/products";

export const getSalesStats = async () => {
  try{
    const resp = await fetch(LEADS_API);
    const jsonData = await resp.json();

    const data = {
      onlineSales: jsonData.products.map((data) => data.discountPercentage),
      offlineSales: jsonData.products.map((data) => data.discountPercentage),
    };  
    return data;
  
  }catch(err){
    message.error(`${err.message} sales stats`)
  }

  // change this code according to api response:
  //   return format:
  /*
       leads: {
            onlineSales:[200,244,600],
            offlineSales:[355,564,2311]
         }

    */

};
