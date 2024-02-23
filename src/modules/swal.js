// @ts-check
import Swal from 'sweetalert2';

/**
 * @param {import('sweetalert2').SweetAlertOptions} config
 */
export default function swal(config) {
  /** @type {import('sweetalert2').SweetAlertOptions} */
  const defaultConfig = {
    color: 'inherit',
    confirmButtonColor: '#3098b4',
  };
  return Swal.fire(Object.assign(defaultConfig, config));
}

/**
 * @param {import('sweetalert2').SweetAlertOptions} config
 */
export function toast(config) {
  /** @type {import('sweetalert2').SweetAlertOptions} */
  const defaultConfig = {
    toast: true,
    color: 'inherit',
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 5000,
    showCloseButton: true,
    timerProgressBar: true,
  };

  const swal = Swal.fire(Object.assign(defaultConfig, config));

  document.addEventListener('visibilitychange', () => {
    const time_left = Swal.getTimerLeft() || 0;
    if (document.hidden) {
      Swal.isTimerRunning() && Swal.stopTimer();
    } else {
      if (Swal.isTimerRunning()) {
        Swal.increaseTimer(5000 - time_left);
        Swal.resumeTimer();
      }
      Swal.resumeTimer();
    }
  });

  return swal;
}
