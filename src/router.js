import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import index from '@/components/Index'

import admin from '@/components/admin/Admin'
import editor from '@/components/admin/Editor'
import dashboard from '@/components/admin/editors/Dashboard'
import ed_experiences from '@/components/admin/editors/EdExperiences'
import ed_profile from '@/components/admin/editors/EdProfile'
import ed_works from '@/components/admin/editors/EdWorks'
import ed_settings from '@/components/admin/editors/EdSettings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/signin',
      name: 'signin',
      component: admin,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            next('/editor/dashboard')
          } else {
            next()
          }
        })
      }
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
      meta: { requireAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: dashboard,
          meta: { requireAuth: true },
        },
        {
          path: 'profile',
          name: 'Profile',
          component: ed_profile,
          meta: { requireAuth: true },
        },
        {
          path: 'experiences',
          name: 'Experiences',
          component: ed_experiences,
          meta: { requireAuth: true },
        },
        {
          path: 'works',
          name: 'Works',
          component: ed_works,
          meta: { requireAuth: true },
        },
        {
          path: 'settings',
          name: 'Settings',
          component: ed_settings,
          meta: { requireAuth: true },
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  if (requireAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next('/admin')
      }
    })
  } else {
    next()
  }
})

export default router

