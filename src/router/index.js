import Vue from 'vue'
import VueRouter from 'vue-router'
import FooterMvp from "@/components/FooterMvp.vue"
import MainPage from "@/views/MainPage.vue"
import HeaderMvp from "@/components/HeaderMvp.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/header',
    component: HeaderMvp
  },
  {
    path: "/footer",
    component: FooterMvp
  }
]

const router = new VueRouter({
  routes
})

export default router
