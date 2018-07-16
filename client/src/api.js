import axios from "axios/index";

export function getCurrentProfileData() {
  return axios
    .get('/api/profile')
    .then(res => res.data);
}

export function getProfileHandleData(handle) {
  console.log('axios handle', handle);

  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => res.data);
}