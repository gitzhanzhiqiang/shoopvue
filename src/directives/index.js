/*
 * @Author: liwanli
 * @Date: 2019-05-09 15:48:36
 * @Last Modified by: liwanli
 * @Last Modified time: 2019-05-09 17:52:44
 * 全局自定义指令
eg:
    // bind 绑定到dom上，就开始自动执行
    //inserted 示dom插入到页面上的时候自动执行
    //update 表示自定义指令后面的值更新的时候，自动执行
    //unbind：只调用一次，指令与元素解绑时调用
    el：指令所绑定的元素，可以用来直接操作 DOM
    bind:{
        name：指令名，不包括 v- 前缀
        value：指令的绑定值
        oldValue：指令绑定的前一个值
        expression：字符串形式的指令表达式
        arg：传给指令的参数，可选
        modifiers：一个包含修饰符的对象
        vnode：Vue 编译生成的虚拟节点
        oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
    }
    Vue.directive("nodata", {
       bind:(el, binding) => {},
       inserted:(el, binding) => {}
       update:(el, binding) => {}
       unbind:()=>{}
    })
 */




import Vue from 'vue';

/**
 * 暂无数据指令
 */
import './nodata.scss'
Vue.directive("nodata", {
    // bind 绑定到dom上，就开始自动执行
    bind: (el, binding) => {
        const dom = `<img class="custom-nodata-img" src="${require("@/assets/images/wuyaoq.png")}" /><br>暂无数据列表`
        const tempDiv = document.createElement('div');
        tempDiv.className = 'custom-nodata';
        const subDiv = document.createElement('div');
        subDiv.className = 'custom-nodata-inner';
        subDiv.innerHTML = dom;
        tempDiv.appendChild(subDiv);
        el.nodataElement = tempDiv
        if (binding.value) {
            el.appendChild(tempDiv)
        }
    },
    //表示dom插入到页面上的时候自动执行
    inserted(el, binding) {
        // console.log("inserted")
    },
    // 表示自定义指令后面的值更新的时候，自动执行
    update: (el, binding) => {
        if (binding.value) {
            if (el.nodataElement.parentNode === null) {
                el.appendChild(el.nodataElement)
            }
        } else {
            if (el === el.nodataElement.parentNode) {
                el.removeChild(el.nodataElement)
            }
        }
    },
    unbind: (el) => {
        if (el.nodataElement.parentNode === el) {
            el.removeChild(el.nodataElement)
        }
        el.nodataElement = null
    }
})
