/* eslint-disable indent */
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import Delete from '@mui/icons-material/Delete';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteOrder } from 'src/api/order';
import { formatDate, formatPrice } from 'src/helpers';
import { t } from 'src/libs/intl';
import { PATH_AUTH } from 'src/routes/paths';

import ModalDelete from '../ModalDelete';
import { CANCELLED, DELIVERED, DELIVERING, ORDERED } from './orderStatus';
import styles from './styles';
import { ItemOrderTypes } from './types';

const renderStatus = (status: number) => {
  if (status === 0) {
    return CANCELLED;
  } else if (status === 1) {
    return ORDERED;
  } else if (status === 2) {
    return DELIVERING;
  } else if (status === 3) {
    return DELIVERED;
  }
};

type Props = {
  itemOrder: ItemOrderTypes;
};

const ItemOrder: React.FC<Props> = ({ itemOrder }) => {
  const queryClient = useQueryClient();
  const [modalDeleteOrder, setModalDeleteOrder] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
  });

  const MESSAGE = {
    deleteOrderSuccess: t('Delete order successfully'),
    deleteOrderFailed: t('Delete order failed'),
  };

  const handleDeleteOrder = () => {
    mutate(itemOrder._id, {
      onSuccess: async ({ data: { status } }) => {
        if (status) {
          await queryClient.invalidateQueries({
            queryKey: ['getListOrder'],
          });

          toast.success(MESSAGE.deleteOrderSuccess);
        } else {
          toast.error(MESSAGE.deleteOrderFailed);
        }
      },
    });
  };

  return (
    <React.Fragment>
      <Box border="1px solid #e6e7eb" margin="10px 0" />
      <Box position="relative" padding="10px" display="flex">
        <Box component="h5" sx={styles.codeItem}>
          #{itemOrder._id.slice(-5)}
        </Box>
        <Box sx={styles.boxChipItem}>
          <Chip label={renderStatus(itemOrder.status)} sx={styles.chipStatus} />
        </Box>
        <Typography sx={styles.orderItem}>{formatDate(itemOrder.createdAt)}</Typography>
        <Typography sx={styles.orderItem}>{formatPrice.format(itemOrder.amount)}</Typography>
        {(renderStatus(itemOrder.status) === CANCELLED && !isLoading) ||
        (renderStatus(itemOrder.status) === DELIVERED && !isLoading) ? (
          <Typography sx={styles.boxActionIcon}>
            <Box onClick={() => setModalDeleteOrder(true)}>
              <IconButton aria-label="east">
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </Typography>
        ) : null}
        {isLoading && (
          <Typography sx={styles.boxActionIcon}>
            <Box>
              <IconButton aria-label="east">
                <RotateRightIcon fontSize="small" sx={styles.loadingIcon} />
              </IconButton>
            </Box>
          </Typography>
        )}
        <Typography>
          <Link to={`${PATH_AUTH.order.id(itemOrder._id)}`}>
            <Button
              variant="contained"
              sx={{
                border: 'none',
                boxShadow: 'none',
                borderRadius: 0,
              }}
            >
              {t('View Detail')}
            </Button>
          </Link>
        </Typography>
      </Box>
      <ModalDelete
        content={t('Delete this order')}
        openModal={modalDeleteOrder}
        handleCloseModal={() => setModalDeleteOrder(false)}
        onDelete={handleDeleteOrder}
      />
    </React.Fragment>
  );
};

export default ItemOrder;
