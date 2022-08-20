export enum RestaurantStatus {
  active = 'ACTIVE'
}

export interface Restaurant {
  idRestaurant: string;
  uidUser: string;
  address: string;
  bussinessName: string;
  commune: string;
  country: string;
  email: string;
  fantasyName: string;
  phone: string;
  state: string;
  status: RestaurantStatus;
  isActive: boolean;
  category: string;
  logo: string;
  city: string;
  verified: boolean;
}
