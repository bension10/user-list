import axios from "axios";
import { UsersData  } from "src/interface/user";

const getUsersList = async () => {
  try {
    const response = await axios.get<UsersData>('https://jsonplaceholder.typicode.com/users');

    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export default getUsersList;
