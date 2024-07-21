export interface IAuthState {
  sideBarOpened: boolean;
  coords: {
    lat: number;
    long: number;
    offset: number | string;
  };
}
