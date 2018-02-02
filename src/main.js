
import Vue from 'vue'
import App from './App'
import router from './router'

//引入自己写的less
import './assets/less/app.less';

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/iconfont.css';

//注册mint
Vue.use(Mint);

import $ from 'jquery'
/* eslint-disable no-new */

//过滤器
Vue.filter('tgdate', function(val) {
	var date = new Date();
	var year = date.getFullYear();
	var day = date.getDate();
	var week1 = date.getDay();
	var month = date.getMonth() + 1;
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	var week
	switch(week1) {
		case 0:
			week = "周日";
			break;
		case 1:
			week = "周一";
			break;
		case 2:
			week = "周二";
			break;
		case 3:
			week = "周三";
			break;
		case 4:
			week = "周四";
			break;
		case 5:
			week = "周五";
			break;
		case 6:
			week = "周六";
			break;
	}
//	console.log(year + '-' + month + '-' + day + '-' + week)
	var m_d = month + '月' + day + '号';
	var y_m_d = year + '-' + month + '-' + day
	var y_m_d_w = year + '-' + month + '-' + day+' '+week
	if(val == m_d) {
		return '刚刚';
	} else if(val.slice(0, 10) == y_m_d) {
		return '今天'+val.slice(10,val.length)
	} else if(val.slice(0,14) == y_m_d_w){
		return '今天'
	}
	else {
		return val;
	}
})

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})