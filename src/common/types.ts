import { AuthType } from 'src/pages/Authenticated/types';

export type Nullable<T> = Partial<T | null>;

export type MapAction<A, K = keyof A> = K extends keyof A
  ? [A[K]] extends [never]
    ? { type: K }
    : { type: K; payload: A[K] }
  : never;

export type State = {
  global: {
    locale: string;
    auth: AuthType;
    loading: {
      showLoading: false;
    };
    category: { list: ListCategory[] };
    product: {
      cart: {
        list: ProductCart[];
      };
      detail: object;
    };
    cart: { count: number };
    brand: {
      list: [];
    };
  };
};

export interface ProductCart {
  name: string;
  price: number;
  priceInitial: number;
  productId: string;
  quantity: number;
  thumbnail: string;
  slug: string;
}

export type Product = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  brand: {
    id: string;
    name: string;
  };
  category: {
    _id: string;
    name: string;
  };
  description?: string;
  images?: string[];
  size?: string[];
  star?: number;
  review?: number;
  thumbnail?: string;
  rating?: number;
  sold?: number;
  totalComment?: number;
  createdAt?: string;
  deletedAt?: string | undefined;
  updatedAt?: string;
  quantity?: number;
};

export type Brand = {
  _id: string;
  id?: string;
  logo: string;
  name: string;
  slug: string;
  createdAt: string;
  deleteAt: string;
  updatedAt: string;
};

export type ListCategory = {
  name: string;
  deleteAt?: string;
  slug: string;
  id: string;
};

export type AddToCartProduct = {
  productId: string;
  quantity: number;
};

export type UpdateQuantityProduct = {
  id: string;
  quantity: string;
};

export type PostOrderType = {
  fullName: string;
  phoneNumber: string;
  address: string;
  customerNote?: string;
  status: number;
  amount: number;
  quantity: number;
};

export type PostOrderDetailType = {
  products: {
    product: string;
    quantity: number;
    price: number;
  }[];
  order: string;
  discountPercent?: number;
  shipingFee?: number;
};

export type OrderType = {
  _id: string;
  user: {
    name: string;
    _id: string;
  };
  phoneNumber: number;
  fullName: string;
  customerNote: string;
  methodPayment: string;
  address: string;
  amount: number;
  quantity: number;
  status: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderType = {
  id: string;
  address: string;
  amount: number;
  quantity: number;
  status: number;
  methodPayment: number;
};
