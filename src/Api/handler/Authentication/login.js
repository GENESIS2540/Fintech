import axios from 'axios'; // Import axios or any HTTP client library you are using
import { LOGIN_URL} from '../../apiConfig';
import { getUserId } from '../userManagement/getUserProfile';


/**
 * Login user and store user data and credentials in the database.
 * @param {string} username_email - User email/username.
 * @param {string} password - User password.
 * @returns {Object} Object indicating the success or failure of the login request.
 */
const loginUser = async (username_email, password) => {
    try {
        let response;
        // Check if the input matches the email format
        const isEmail = /\S+@\S+\.\S+/.test(username_email);
        // Send a POST request to the login endpoint with user credentials
        if (isEmail) {
          const email = username_email;
            response = await axios.post(LOGIN_URL, { email, password });
        } else {
            const username = username_email;
            response = await axios.post(LOGIN_URL, { username , password });
        }
      
        console.log(response);
        if (response.data.key) {
        // If the login is successful, store user credentials and data
        console.log('Login successful');
        console.log('Token:', response.data.key);  
        await sessionStorage.setItem('token', response.data.key);
        await getUserId();
        return {
          success: true,
          message: 'Login successful',
          token: response.data.key,
        };
      } else {
        // If login fails, handle the error response
        console.error('Login failed:', response.data.error);
        return { success: false, message: 'Login failed', error: response.data.error };
      }
    } catch (error) {
      // Handle any network or other errors that may occur during the request
      console.error('An error occurred during login:', error);
      return { success: false, message: 'An error occurred during login', error };
    }
  };
  export { loginUser };
