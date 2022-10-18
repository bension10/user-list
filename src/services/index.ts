import axios from 'axios';

type GetUsersData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompanyDetails;

}

type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoLocation;
}

type UserCompanyDetails = {
  name: string;
  catchPhrase: string;
  bs: string;
}

type UserGeoLocation = {
  lat: string;
  lng: string;
}

const getUsersList = async () => {
  try {
    const response = await axios.get<GetUsersData>(
      'https://jsonplaceholder.typicode.com/users', {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    console.log('response ', response);
  } catch {

  }
};

export default getUsersList;