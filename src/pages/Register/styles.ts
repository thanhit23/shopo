const boxRegister = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
};

const paper = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 8px 45px',
  overflow: 'hidden',
  borderRadius: '8px',
  width: '500px',
  padding: '2rem 3rem',
};

const formControl = {
  display: 'flex',
  gap: '8px',
};

const btnConfirm = {
  width: '100px !important',
  margin: '0px !important',
  fontWeight: 500,
  padding: '0px',
  mt: 3,
  mb: 2,
  color: '#fff',
  backgroundColor: '#d23f57',
  boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#e3364e',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const btnSubmit = {
  mt: 3,
  mb: 2,
  borderRadius: 0,
  color: '#fff',
  backgroundColor: 'black',
  boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  '&:hover': {
    opacity: 0.8,
    backgroundColor: 'black',
    boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
  },
};

const errorMessage = {
  '&:first-letter': {
    textTransform: 'capitalize',
  },
};

const visibilityOffIcon = {
  color: '#dae1e7',
  fontSize: '1.25rem',
};

const visibilityIcon = {
  color: '#7d879c',
  fontSize: '1.25rem',
};

const iconBtnShowPassword = {
  padding: '5px',
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
};

const typography = {
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '1.5',
  textAlign: 'center',
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default {
  iconBtnShowPassword,
  visibilityOffIcon,
  visibilityIcon,
  errorMessage,
  boxRegister,
  formControl,
  btnSubmit,
  typography,
  btnConfirm,
  paper,
};
