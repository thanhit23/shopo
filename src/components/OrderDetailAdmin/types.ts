import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { PostOrderDetailType, PostOrderType } from 'src/common/types';
import { OrderDetailType } from 'src/pages/Order/types';

export type Props = {
  orderDetail: OrderDetailType;
  onCreateOrder?: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderType, unknown>;
  onReviewProduct: UseMutationResult<AxiosResponse<any, any>, unknown, object, unknown>;
  onCreateOrderDetail: UseMutationResult<AxiosResponse<any, any>, unknown, PostOrderDetailType, unknown>;
  isGetOrderDetailLoading: boolean;
};
