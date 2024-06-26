const codeItem = {
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
  margin: '6px',
  textAlign: 'left',
  textTransform: 'none',
  whiteSpace: 'normal',
  flex: '1 1 0',
};

const boxChipItem = {
  margin: '6px',
  flex: '1 1 0',
};

const chipStatus = {
  padding: '0.25rem 0.5rem',
  fontSize: '12px',
  color: '#0c0e30',
  backgroundColor: '#e8e8ee',
  height: '24px',
  '& > span': {
    paddingLeft: '8px',
    paddingRight: '8px',
    fontFamily:
      'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  },
};

const orderItem = {
  fontSize: '14px',
  fontFamily:
    'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  margin: '6px',
  textAlign: 'left',
  letterSpacing: 'inherit',
  flex: '1 1 0',
};

const boxActionIcon = {
  position: 'absolute',
  right: '60px',
  top: '50%',
  transform: 'translateY(-50%)',
};

const loadingIcon = {
  opacity: '.5',
  animation: 'spinner .6s linear infinite',
  '@keyframes spinner': {
    from: {
      transform: 'rotate(0)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
};

export default {
  boxChipItem,
  boxActionIcon,
  loadingIcon,
  chipStatus,
  orderItem,
  codeItem,
};
