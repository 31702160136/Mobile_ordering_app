// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Vuex
import store from './Store/index'

import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
//配置VantUI组件
//按钮
import { Button } from 'vant';
Vue.use(Button);
//弹窗
import { Dialog } from 'vant';
Vue.use(Dialog);
//进步器
import {stepper} from '@/components/mycomponents.vue'
//图标
import { Icon } from 'vant';
Vue.use(Icon);
//单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
//搜索框
import { Search } from 'vant';
Vue.use(Search);
//商品卡片
import { Card } from 'vant';
Vue.use(Card);
//接口
Vue.prototype.HOST = '/api'
//网络
import axios from 'axios'; 
Vue.prototype.$axios = axios;

import {cookie} from './js/Cookie.js';
Vue.prototype.$cookie=cookie;
//----------------------------
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》'); 
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
        }
})
