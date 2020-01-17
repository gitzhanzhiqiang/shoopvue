// user: state => state.user //省略写法
// user: (state, getters) => { //复杂写法
//     console.log(state)
//     return state.user;
// },
const getters = {
    token: state => state.token,
    user: state => state.user
}
//通过this.$store.getters 获取store属性
export default getters;
