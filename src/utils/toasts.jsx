import Notifications from '../components/Notifications';
import toast from 'react-hot-toast';

const options = {
  duration: 4000,
  position: 'top-right',
  // style: {},
  // className: '',
  // icon: '👏',
  // iconTheme: {
  //   primary: '#000',
  //   secondary: '#fff',
  // },
};

export const notifyError = (message) => {
  return toast.error(message, options)
}

export const notifyCustomError = (message) => {
  return toast.custom(<Notifications message={message}/>)
}