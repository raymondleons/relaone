
import Swal from 'sweetalert2'


export const getRole = () => {
  return {
    type: "FETCH_ROLE"
  };
};

export const signOut = () => {
    Swal.fire({
      title: "Successfully Signed Out",
      timer: 1000,
      type: "success"
    });
    return {
      type: "SIGN_OUT"
    };
  };