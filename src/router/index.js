import Vue from 'vue'
import VueRouter from 'vue-router'
import FooterMvp from "@/components/FooterMvp.vue"
import MainPage from "@/views/MainPage.vue"
import HeaderMvp from "@/components/HeaderMvp.vue"
import RegisterClients from "@/components/RegisterClients.vue"
import LoginClients from "@/views/LoginClients.vue"
import DeleteClients from "@/components/DeleteClients.vue"
import EditClients from "@/components/EditClients.vue"
import ClientProfile from "@/views/ClientProfile.vue"
import OpeningMain from "@/components/OpeningMain.vue"
import PortfolioMain from "@/views/PortfolioMain.vue"
import TopPortBar from "@/components/TopPortBar.vue"
import VertNav from "@/components/VertNav.vue"
import DescriptionMain from "@/components/DescriptionMain.vue"
import RegisterFolio from "@/components/RegisterFolio.vue"

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
    path: "/clientProfile",
    component: ClientProfile
  },
  {
    path: "/open",
    component: OpeningMain
  },
  {
    path: "/portfolio",
    component: PortfolioMain
  },
  {
    path: "/topPort",
    component: TopPortBar
  },
  {
    path: "/vertNav",
    component: VertNav
  },
  {
    path: "/describeMain",
    component: DescriptionMain
  },
  {
    path: "/registerFolio",
    component: RegisterFolio
  },




]

const router = new VueRouter({
  routes
})

export default router
