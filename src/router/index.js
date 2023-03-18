import Vue from 'vue'
import VueRouter from 'vue-router'
import FooterMvp from "@/components/FooterMvp.vue"
import MainPage from "@/views/MainPage.vue"
import HeaderMvp from "@/components/HeaderMvp.vue"
import WatchList from "@/views/WatchList.vue"
import RegisterClients from "@/components/RegisterClients.vue"
import LoginClients from "@/views/LoginClients.vue"
import DeleteClients from "@/components/DeleteClients.vue"
import EditClients from "@/components/EditClients.vue"
import PortFolioProfile from "@/views/PortFolioProfile.vue"

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
  },
  {
    path: "/watch-list",
    component: WatchList
  },
  {
    path: "/registerClient",
    component: RegisterClients
  },
  {
    path: "/loginClient",
    component: LoginClients
  },
  {
    path: "/deleteClient",
    component: DeleteClients
  },
  {
    path: "/editClient",
    component: EditClients
  },
  {
    path: "/portProfile",
    component: PortFolioProfile
  },
]

const router = new VueRouter({
  routes
})

export default router
