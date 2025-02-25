import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams-list',
      path: '/teams', // our-domain.com/teams => TeamsList
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      meta: { needsAuth: true },
      alias: '/',
      beforeEnter(to, from, next) {
        console.log('beforeEnter');
        console.log(to, from);
        next();
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
          
        },
      ],
    },
    // {
    //     path: '/teams/:teamId', // our-domain.com/teams/teamId
    //     component: TeamMembers,
    //     props: true
    // },
    {
      name: 'users-list',
      path: '/users', // our-domain.com/users => UsersList
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    },
    {
      name: 'not-found',
      path: '/:notFound(.*)',
      redirect: '/teams',
    },
  ],
  linkActiveClass: 'custom-active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    if(to.meta.needsAuth) {
        //you can check whether the user is authenticated or not
        next(true);
    } else {
        next(true);
    }
    
});

router.afterEach(function(to, from) {
    console.log('Global afterEach');
    console.log(to, from);
});


export default router;