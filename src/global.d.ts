interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
}

type SystemUser = {
  username: string;
  password: string;
  accessLevel: 0 | 1 | 2;
};

type GeoLocation = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type AuthProviderType = {
  login: (string, string) => boolean;
  logout: () => void;
  userName: string;
  accessLevel: number;
  isLoggedIn: boolean;
  users?: SystemUser[];
  posts?: Posts[];
};
