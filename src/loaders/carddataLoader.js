import axios from "axios";


const carddataLoader=async () => {
    const productdata= await axios.get("/datas/productdata.json");
    return  productdata.data;

}



export default carddataLoader;