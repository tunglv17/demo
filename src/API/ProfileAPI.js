import AxiosClient from "./AxiosClient";
const ProfileAPI = {
  getAll() {
    const url = `/profile`;
    return AxiosClient.get(url);
  },
  get(id) {
    const url = `profile/${id}`;
    return AxiosClient.get(url);
  },
  add(data) {
    const url = `/profile`;
    return AxiosClient.post(url, data);
  },
  remove(idUser){
    const url = `/profile/${idUser}`;
    return AxiosClient.delete(url)
  },
  update(data){
    const url = `/profile/${data.id}`;
    return AxiosClient.put(url,data) 
}
};
export default ProfileAPI;