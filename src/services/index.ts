import axios from "axios";

interface UsersData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompanyDetails;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoLocation;
}

interface UserCompanyDetails {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserGeoLocation {
  lat: string;
  lng: string;
}

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
