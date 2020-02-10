import {routesComponent} from './routesComponent'

export const routes = [

  {
    path:'/navPage',
    name:'navPage',
    component:routesComponent.navPageComponent,

    children :[
        {
          path: '/home',
          name: 'home',
          component:routesComponent.homeComponent
        },
        {
          path:'/zhaomh',
          name:'zhaomh',
          component:routesComponent.zhaomhComponent,
        },
        {
          path:'/mineBook',
          name:'mineBook',
          component:routesComponent.mineBookComponent,
        },
        {
          path:'/zhangHao',
          name:'zhangHao',
          component:routesComponent.zhangHaoComponent,
        },
        {
          path:'/huati',
          name:'huati',
          component:routesComponent.huatiComponent,
        },
    ]

  },

  {
    path:'/detailed/:url',
    name:'detailed',
    component:routesComponent.detailedComponent,
  },

  {
    path:'/search',
    name:'search',
    component:routesComponent.searchComponent,
  },

  {
    path:'/searchEnd/:name/:type',
    name:'searchEnd',
    component:routesComponent.searchEndComponent,
  },

  {
    path:'/content/:list/:num',
    name:'content',
    component:routesComponent.contentComponent,
  },

  {
    path:'/payZhongxin',
    name:'payZhongxin',
    component:routesComponent.payZhongxinComponent,
  },

  {
    path:'/huatiContent/:neirong',
    name:'huatiContent',
    component:routesComponent.huatiContentComponent,
  },

  {
    path:'/release',
    name:'release',
    component:routesComponent.releaseComponent,
  },

  {
    path:'/listPage',
    name:'listPage',
    component:routesComponent.listPageComponent,
  },

  {
    path:'/follow',
    name:'follow',
    component:routesComponent.followComponent,
  },

  {
    path:'/register',
    name:'register',
    component:routesComponent.registerComponent,
  },

  {
    path:'/login/:come',
    name:'login',
    component:routesComponent.loginComponent,
  },

  {
    path:'/show',
    name:'show',
    component:routesComponent.showComponent,
  },

  {
    path:'*',
    redirect:{name:'show'}
  }
]
