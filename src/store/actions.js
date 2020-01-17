import ajax from '@utils/config';
//这个action会被传入一个Object，这个Object里面可能有很多的方法和属性，而你只需要commit方法
// setUser(context) { //第一种
//     context.commit('setUser')
// },
// setUser({commit}, data) { //es6解构赋值 //第二个是传递过来的(整个)
//     // console.log(data)
//     commit('setUser', data);
// },
const actions = {
    SETTOKEN({ commit }, { token }) {
        commit('SET_TOKEN', token);
    },
    SETUSER({ commit }, { user }) { //es6解构赋值 //第二个是传递过来的 //相当于传过来是对象  取key为data的属性值
        commit('SET_USER', user);
    }
}
export default actions;
