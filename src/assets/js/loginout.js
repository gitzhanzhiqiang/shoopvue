import store from '@/store';
import Cookies from 'js-cookie';
import baseURL from '@/assets/js/ajax/baseURL';
export default loginout => {
    // token
    // store.dispatch('SETUSER',{user: ''});
    const host = window.location.origin;
    store.dispatch('SETTOKEN', { token: '' });
    Cookies.remove('token');
    Cookies.remove('orderId');
    Cookies.remove('phone');
    Cookies.remove("fromPath");
    window.location.reload();
    window.location.href = host + '/login';
    // window.location.href = "http://192.168.0.121:8081/birdPC/#/login";
    // window.location.href = "http://119.29.150.98/phoenix/mobile/api/#/login";
}
