import axios from 'axios';
const API_URL = 'https://inenco.herokuapp.com/api';

export const getUser = (username) => {
  return axios.get(`${API_URL}/owners/${username}`)
  .then(({data}) => data.owner)
}

export const getUsers = () => {
  return axios
    .get(`${API_URL}/owners`)
    .then(({ data }) => data.owners);
};

export const addSite = async (address_houseNumber, address_street, address_city, address_postcode, address_telephone, manager, floorspace, AMRenabled, gasMeterNumber, electricityMeterNumber, id) => {
const {data} = await axios.post(`${API_URL}/sites/${id}`, {
      address_houseNumber: address_houseNumber,
      address_street: address_street,
      address_city: address_city,
      address_postcode: address_postcode,
      address_telephone: address_telephone,
      gasMeterNumber: gasMeterNumber, 
      electricityMeterNumber: electricityMeterNumber,
      AMRenabled: AMRenabled,
      manager: manager,
      floorspace: floorspace,
    })
return data.newSite
  };

export const getSites = () => {
    return axios.get(`${API_URL}/sites`)
    .then(({data}) => data.sites)
}

export const getSite = (owner_id) => {
    return axios.get(`${API_URL}/sites/${owner_id}`)
    .then(({data}) => data.sites)
}
  
export const postSite =  (id, body, created_by ) => {
  return axios.post(`${API_URL}/sites/${id}`, {body, created_by})
    .then(({data}) => data.comment)
}

export const deleteSite =  (id) => {
    return axios.delete(`${API_URL}/sites/${id}`)
}

// export const addOwner = async (username, firstName, lastName, email) => {
//   const {data} = await axios.post(`${API_URL}/owners/`)
//   return axios
//   .post(`${API_URL}/owners/`, {
//     username: username,
//     firstName: firstName,
//     lastName: lastName,
//     email: email
//   })
//   .then(({ data }) => data.owners);
// };