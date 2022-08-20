export interface User {
  photoUrl: any;
  uid: string;
  isActive: boolean;
  status: UserStatus;
  photoURL: string;
  name: string;
  lastName: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
  gender: string;
  address: string;
  roles: Array<string>;
  emailVerified: boolean;
  disabled: boolean;
  accountCompleted: boolean;
  hasRestaurant: boolean;
}

export enum UserStatus {
  active = 'ACTIVE'
}
