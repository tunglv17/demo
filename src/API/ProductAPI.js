import AxiosClient from "./AxiosClient";
const ProductAPI = {
  getAll() {
    const url = `/product`;
    return AxiosClient.get(url);
  },
  get(id) {
    const url = `product/${id}`;
    return AxiosClient.get(url);
  },
  add(data) {
    const url = `/product`;
    return AxiosClient.post(url, data);
  },
  remove(idPro){
    const url = `/product/${idPro}`;
    return AxiosClient.delete(url)
  },
  update(data){
    const url = `/product/${data.id}`;
    return AxiosClient.put(url,data) 
}
};
export default ProductAPI;