class RoutesComponent{
  homeComponent(){
    return import('../views/Home.vue')
  }

  navPageComponent(){
    return import('../views/NavPage.vue')
  }

  detailedComponent(){
    return import('../views/DetailedPage.vue')
  }

  searchComponent(){
    return import('../views/SearchPage.vue')
  }

  zhaomhComponent(){
    return import('../views/Zhaomh.vue')
  }

  searchEndComponent(){
    return import('../views/SearchEnd.vue')
  }

  contentComponent(){
    return import('../views/ContentPage.vue')
  }

  mineBookComponent(){
    return import('../views/MineBook.vue')
  }

  zhangHaoComponent(){
    return import('../views/ZhangHao.vue')
  }

  payZhongxinComponent(){
    return import('../views/PayZhongxin.vue')
  }

  huatiComponent(){
    return import('../views/HuatiPage.vue')
  }

  huatiContentComponent(){
    return import('../views/HuatiContent.vue')
  }

  releaseComponent(){
    return import('../views/ReleaseHuati.vue')
  }

  listPageComponent(){
    return import('../views/ListPage.vue')
  }

  followComponent(){
    return import('../views/Follow.vue')
  }

  registerComponent(){
    return import('../views/Register.vue')
  }

  loginComponent(){
    return import('../views/Login.vue')
  }
  
  showComponent(){
    return import('../views/Show.vue')
  }

}

export const routesComponent = new RoutesComponent();
