import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import index from '@/pages/Index'

import admin from '@/pages/Admin'
import editor from '@/pages/Editor'

import top from '@/components/views/Top'
import profile from '@/components/views/Profile'
import experience from '@/components/views/Experience'
import work from '@/components/views/Work'
import article from '@/components/views/Article'
import contact from '@/components/views/Contact'

import notFound from '@/components/views/NotFound'

import dashboard from '@/components/editors/Dashboard'
import ed_experiences from '@/components/editors/EdExperiences'
import ed_profile from '@/components/editors/EdProfile'
import ed_works from '@/components/editors/EdWorks'
import ed_settings from '@/components/editors/EdSettings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: 'top',
          component: top
        },
        {
          path: 'profile',
          name: 'profile',
          component: profile
        },
        {
          path: 'experience',
          name: 'experience',
          component: experience
        },
        {
          path: 'work',
          name: 'work',
          component: work
        },
        {
          path: 'article',
          name: 'article',
          component: article
        },
        {
          path: 'contact',
          name: 'contact',
          component: contact
        },
        {
          // MARK: 以下 signin/editorまでリダイレクトされてしまう
          path: '*',
          name: 'notFound',
          component: notFound
        },
      ]
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
        next('/signin')
      }
    })
  } else {
    next()
  }
})

export default router

