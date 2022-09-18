import { privateAxios} from "./helpler"

// Create post function
export const createPost = (postData) => {
    console.log(postData);
    return privateAxios
    .post(`/api/vehicles/user/${postData.userId}/category/${postData.categoryId}/addVehicle`, postData)
    .then((responce) => responce.data);
};


// upload post banner Image
export const uploadPostImage=(image,vehicleId)=>{
    let formData=new FormData();
    formData.append("image",image);
    return privateAxios.post(`/api/vehicles/uploadVehicleImage/${vehicleId}`,formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
    })
    .then((response)=>response.data)
}
//    /api/vehicles/user/18/category/1/addVehicle