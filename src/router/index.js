import Vue from 'vue'
import Router from 'vue-router'


// 首页
// import Index from '../pages/Index/Index'
const Index = resolve => require(['../pages/Index/Index'], resolve)
//消息
// import Message from '../pages/messages/message'
const Message = resolve => require(['../pages/messages/message'], resolve)

//应用
// import Application from '../pages/application/application'
const Application = resolve => require(['../pages/application/application'], resolve)
// 借款
//我的借款
// import myLoan from '../pages/application/loan/myLoan'
const myLoan = resolve => require(['../pages/application/loan/myLoan'], resolve)

//我的借款
// import paymentDetails from '../pages/application/loan/paymentDetails'
const paymentDetails = resolve => require(['../pages/application/loan/paymentDetails'], resolve)
//我信息查询
// import informationSearch from '../pages/application/informationSearch/informationSearch'
const informationSearch = resolve => require(['../pages/application/informationSearch/informationSearch'], resolve)

// 新增发文
// import emailArticle from '../pages/application/emailArticle/emailArticle'
const emailArticle = resolve => require(['../pages/application/emailArticle/emailArticle'], resolve)
// 新增公文详情
// import documentDetail from '../pages/application/emailArticle/documentDetail'
const documentDetail = resolve => require(['../pages/application/emailArticle/documentDetail'], resolve)
//新增填写回执
// import WriteHZ from '../pages/application/emailArticle/writeHZ'
const WriteHZ = resolve => require(['../pages/application/emailArticle/writeHZ'], resolve)

// 报销
//我的报销
// import myAccount from '../pages/application/account/myAccount'
const myAccount = resolve => require(['../pages/application/account/myAccount'], resolve)

// 我的信息
// import myInformation from '../pages/Mine/myInformation/myInformation'
const myInformation = resolve => require(['../pages/Mine/myInformation/myInformation'], resolve)

// 我的资产
// import myProperty from '../pages/Mine/myProperty/myProperty'
const myProperty = resolve => require(['../pages/Mine/myProperty/myProperty'], resolve)
// 历史记录
// import historyRecord from '../pages/Mine/myProperty/historyRecord'
const historyRecord = resolve => require(['../pages/Mine/myProperty/historyRecord'], resolve)
// 薪酬
//我的薪酬-密码
// import enterPassword from '../pages/Mine/mySalary/enterPassword'
const enterPassword = resolve => require(['../pages/Mine/mySalary/enterPassword'], resolve)
//我的薪酬
// import mySalary from '../pages/Mine/mySalary/mySalary'
const mySalary = resolve => require(['../pages/Mine/mySalary/mySalary'], resolve)
//工资详情
// import salaryDetail from '../pages/Mine/mySalary/salaryDetail'
const salaryDetail = resolve => require(['../pages/Mine/mySalary/salaryDetail'], resolve)

// 左右滑动
import abc from '../pages/myProject/abc'
// 我的项目
// import myProject from '../pages/Mine/myProject/myProject'
const myProject = resolve => require(['../pages/Mine/myProject/myProject'], resolve)
// 项目详情
// import projectDetail from '../pages/Mine/myProject/projectDetail'
const projectDetail = resolve => require(['../pages/Mine/myProject/projectDetail'], resolve)
// 项目预算
// import projectBudget from '../pages/Mine/myProject/projectBudget'
const projectBudget = resolve => require(['../pages/Mine/myProject/projectBudget'], resolve)
// 项目团队
// import projectGroup from '../pages/Mine/myProject/projectGroup'
const projectGroup = resolve => require(['../pages/Mine/myProject/projectGroup'], resolve)
// 核算账号
// import checkAccountNumber from '../pages/Mine/myProject/checkAccountNumber'
const checkAccountNumber = resolve => require(['../pages/Mine/myProject/checkAccountNumber'], resolve)

//通讯录
// import Contact from '../pages/contacts/contact'
const Contact = resolve => require(['../pages/contacts/contact'], resolve)
//通讯录下一级
// import SubContact from '../pages/contacts/subContact/subContact'
const SubContact = resolve => require(['../pages/contacts/subContact/subContact'], resolve)
//通讯录下下一级
// import SubContact1 from '../pages/contacts/subContact1/subContact1'
const SubContact1 = resolve => require(['../pages/contacts/subContact1/subContact1'], resolve)
//个人信息详细页
// import PersonDetail from '../pages/contacts/personDetail/personDetail'
const PersonDetail = resolve => require(['../pages/contacts/personDetail/personDetail'], resolve)

import Mine from '../pages/Mine/Mine'
//引入头部组件
import Title from '../components/header'
//引入底部组件
import Footer from '../components/footer'
// 引入主体内容组件
import Container from '../components/container'

//注册全局组件
Vue.component('m-header',Title);
Vue.component('m-footer',Footer);
Vue.component('m-contain',Container);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {keepAlive: false, menuId: '01'}
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {keepAlive: false, menuId: '02'}
    },
    // 我的报销
    {
       path: '/mine/myAccount',
       name: 'myAccount',
       component: myAccount,
       meta: {keepAlive: false, menuId: ''}
    },
    // 发文的路由配置
    {
      path: '/application/emailArticle',
      name: 'emailArticle',
      component:emailArticle,
      id:'emailArticle',
      meta: {keepAlive: false, menuId: ''}
    },
    // 公文详情的路由配置
    {
      path: '/application/emailArticle/documentDetail',
      name: 'documentDetail',
      component:documentDetail,
      id:'documentDetail',
      meta: {keepAlive: false, menuId: ''}
    },
    //  填写回执的路由配置
    {
      path: '/application/emailArticle/documentDetail/writeHZ',
      name: 'WriteHZ',
      component: WriteHZ,
      meta: {keepAlive: false, menuId: ''}
    },
    // 我的信息的路由配置
    {
      path: '/mine/myInformation',
      name: 'myInformation',
      component:myInformation,
      meta: {keepAlive: false, menuId: ''}
    },
    // 我的资产的路由配置
    {
      path: '/mine/myProperty',
      name: 'myProperty',
      component:myProperty,
      meta: {keepAlive: false, menuId: ''}
    },
    // 历史记录的路由配置
    {
      path: '/mine/myProperty/historyRecord',
      name: 'historyRecord',
      component:historyRecord,
      meta: {keepAlive: false, menuId: ''}
    },
    {
        path: '/message/abc',
        name: 'abc',
        component:abc,
        id:'abc',
        meta: {keepAlive: false, menuId: ''}
    },
    // 我的项目
    {
      path: '/mine/myProject',
      name: 'myProject',
      component: myProject,
      meta: {keepAlive: false, menuId: ''}
    },
    // 项目详情
    {
      path: '/mine/myProject/projectDetail',
      name: 'projectDetail',
      component:projectDetail,
      meta: {keepAlive: false, menuId: ''}
    },
    // 项目预算
    {
      path: '/mine/myProject/projectDetail/projectBudget',
      name: 'projectBudget',
      component:projectBudget,
      meta: {keepAlive: false, menuId: ''}
    },
    // 项目团队
    {
      path: '/mine/myProject/projectDetail/projectGroup',
      name: 'projectGroup',
      component:projectGroup,
      meta: {keepAlive: false, menuId: ''}
    },
    // 核算账号
    {
      path: '/mine/myProject/projectDetail/checkAccountNumber',
      name: 'checkAccountNumber',
      component: checkAccountNumber,
      meta: {keepAlive: false, menuId: ''}
    },
    // 薪酬
    // 我的薪酬-密码
    {
      path: '/mine/mySalary/enterPassword',
      name: 'enterPassword',
      component: enterPassword,
      meta: {keepAlive: false, menuId: ''}
    },
    // 我的薪酬-密码
    {
      path: '/mine/mySalary/mySalary',
      name: 'mySalary',
      component: mySalary,
      meta: {keepAlive: false, menuId: ''}
    },
    // 工资详情
    {
      path: '/mine/mySalary/mySalary/mySalary/salaryDetail',
      name: 'salaryDetail',
      component: salaryDetail,
      meta: {keepAlive: false, menuId: ''}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {keepAlive: false, menuId: '03'}
    },
    {
      path: '/contact/subContact',
      name: 'SubContact',
      component: SubContact,
      meta: {keepAlive: false, menuId: '07'}
    },
    {
      path: '/contact/subContact/subContact1',
      name: 'SubContact1',
      component: SubContact1,
      meta: {keepAlive: false, menuId: '08'}
    },
    {
      path: '/contact/subContact/subContact1/personDetail',
      name: 'PersonDetail',
      component: PersonDetail,
      meta: {keepAlive: false, menuId: '09'}
    },
    // 应用 路由配置
    {
      path: '/application',
      name: 'Application',
      component: Application,
      meta: {keepAlive: false, menuId: '04'}
    },
    // 借款 路由配置
    {
      path: '/application/myLoan',
      name: 'myLoan',
      component: myLoan,
      meta: {keepAlive: false, menuId: ''}
    },
    // 借款详情 路由配置
    {
      path: '/application/myLoan/paymentDetails',
      name: 'paymentDetails',
      component: paymentDetails,
      meta: {keepAlive: false, menuId: ''}
    },
    // 信息查询 路由配置
    {
      path: '/application/informationSearch',
      name: 'informationSearch',
      component: informationSearch,
      meta: {keepAlive: false, menuId: ''}
    },
    // 我的 路由配置
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {keepAlive: false, menuId: '05'}
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
