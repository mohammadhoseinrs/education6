import api from "./api";
import axios from "axios";
const loginUrl ='https://cafevira.com/api/api/v1/login'
export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.post('login', JSON.stringify(frmData),
        {
            headers: { 'Content-Type': 'application/json' },
         });

        resolve(res);
        if(res.data.status==='200'){
            sessionStorage.setItem('educationsite',JSON.stringify(res.data))
        }
  
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getdetail=async (endpoint)=>{
    try{
      const res=await api.get(`${endpoint}`,
          {
              headers: { 'Content-Type': 'application/json' },
          })
       return res
     }catch(err){
      console.log(err);
     }
  }
