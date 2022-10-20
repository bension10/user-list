export interface UsersData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompanyDetails;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoLocation;
}

export interface UserCompanyDetails {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserGeoLocation {
  lat: string;
  lng: string;
}
