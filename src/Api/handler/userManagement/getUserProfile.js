import axios from 'axios'; // Import axios or any HTTP client library you are using
import {GET_USER_PROFILE,GET_USER_ID } from '../../apiConfig';


const getUserId = async () => {
  try {
    const authToken = sessionStorage.getItem('token');
      const response = await axios.get(`${GET_USER_ID}`, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data.pk)
        await getUserProfile(response.data.pk);
      }
  }
  catch (error) {
    console.error(`An error occurred while getting user Id`, error);
    throw new Error(`Error getting user Id`);
  }
};
const getUserProfile = async (userId) => {
  try {
    const authToken = sessionStorage.getItem('token');
    if(authToken === null) {
    alert("User not logged In");
    }else{
      const response = await axios.get(`${GET_USER_PROFILE}${userId}/`, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      if (response.status === 200) {
          const userProfile = {
            id: response.data.id,
            username: response.data.username,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            user_type: response.data.user_type,
            is_active: response.data.is_active,
            image: response.data.image,
            last_login: response.data.last_login,
          };
        await sessionStorage.setItem('userProfile' , JSON.stringify(userProfile));
      }
    }
  }
  catch (error) {
    console.error(`An error occurred while getting user Id`, error);
    throw new Error(`Error getting user Id`);
  }
};
export {getUserId,getUserProfile};