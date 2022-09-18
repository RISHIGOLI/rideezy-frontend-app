import { myAxios } from "./helpler";

// to be asked to rushi 
export const loadAllCategories=()=>{
    return myAxios.get(`/api/categories/getAllCategories`).then(response=>{return response.data.data})
}  