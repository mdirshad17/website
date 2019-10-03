import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d6a2ace = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _640e220a = () => interopDefault(import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */))
const _0908245a = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _5740bebc = () => interopDefault(import('../pages/library.vue' /* webpackChunkName: "pages/library" */))
const _238e2a70 = () => interopDefault(import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */))
const _d30ea230 = () => interopDefault(import('../pages/sponsors.vue' /* webpackChunkName: "pages/sponsors" */))
const _2a4fdba8 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _5611ed78 = () => interopDefault(import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */))
const _2b0e6392 = () => interopDefault(import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */))
const _e0256cb2 = () => interopDefault(import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */))
const _106b62e1 = () => interopDefault(import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */))
const _4d220593 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2d6a2ace,
    name: "about"
  }, {
    path: "/Credits",
    component: _640e220a,
    name: "Credits"
  }, {
    path: "/gallery",
    component: _0908245a,
    name: "gallery"
  }, {
    path: "/library",
    component: _5740bebc,
    name: "library"
  }, {
    path: "/Request",
    component: _238e2a70,
    name: "Request"
  }, {
    path: "/sponsors",
    component: _d30ea230,
    name: "sponsors"
  }, {
    path: "/team",
    component: _2a4fdba8,
    name: "team"
  }, {
    path: "/ThankYou",
    component: _5611ed78,
    name: "ThankYou"
  }, {
    path: "/events/:event?",
    component: _2b0e6392,
    name: "events-event"
  }, {
    path: "/form/:form?",
    component: _e0256cb2,
    name: "form-form"
  }, {
    path: "/galleries/:gallery?",
    component: _106b62e1,
    name: "galleries-gallery"
  }, {
    path: "/",
    component: _4d220593,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
