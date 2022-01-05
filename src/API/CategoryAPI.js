import AxiosClient from "./AxiosClient";
const CategoryAPI = {
  getAll() {
    const url = `/category`;
    return AxiosClient.get(url);
  },
  get(id) {
    const url = `category/${id}`;
    return AxiosClient.get(url);
  },
  add(data) {
    const url = `/category`;
    return AxiosClient.post(url, data);
  },
  remove(idCate){
    const url = `/category/${idCate}`;
    return AxiosClient.delete(url)
  },
  update(data){
    const url = `/category/${data.id}`;
    return AxiosClient.put(url,data) 
}
};
export default CategoryAPI;