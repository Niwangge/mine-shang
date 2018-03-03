// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' // 这是基于vue的一个插件

import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
//import Shopcart from '../component/admin/shopcart/Shopcart.vue'

//商品管理模块相关组件
import GoodsList from '../component/admin/goods/list/List.vue'
import GoodsDetial from '../component/admin/goods/detail/Detail.vue'
import GoodsComment from '../component/admin/goods/comment/Comment.vue'

Vue.use(VueRouter)

// 购物车页面路由配置
// const shopcart = [
//     { name: 'shopcart', path: 'shopcart', component: Shopcart } // 子路由path不加/自动拼接父路由path
// ];

//admin的子路由=>商品管理模块相关页面
const goods=[
    { name: 'goodsLis', path: 'goods/list', component: GoodsList},  //子路由path不加/自动拼接父路由path
    { name: 'goodsDetial', path: 'goods/detial/:id', component: GoodsDetial},  //子路由path不加/自动拼接父路由path
    { name: 'goodsComment', path: 'goods/comment', component: GoodsComment}  //子路由path不加/自动拼接父路由path
];

// 导出路由实例 
export default new VueRouter({
    routes: [
        // 登陆
        { name: 'login', path: '/login', component: Login },

        // 后台管理
        //{ name: 'admin', path: '/admin', component: Admin, children: [...shopcart] },
        { name: 'admin', path: '/admin', component: Admin, children:[...goods] },  //三点运算符，展开数组每一项
    ]
});