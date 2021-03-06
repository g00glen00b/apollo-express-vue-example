import Vue from 'vue';
import Router from 'vue-router';
import QuestionsPage from '@/components/questions/QuestionsPage';
import UsersPage from '@/components/users/UsersPage';
import NotFoundPage from '@/components/core/NotFoundPage';
import CreateQuestionPage from '@/components/questions/CreateQuestionPage';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/questions',
    name: 'Questions',
    component: QuestionsPage
  }, {
    path: '/questions/create',
    name: 'CreateQuestion',
    component: CreateQuestionPage
  }, {
    path: '/users',
    name: 'Users',
    component: UsersPage
  }, {
    path: '/',
    name: 'Home',
    redirect: {name: 'Questions'}
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFoundPage
  }],
  mode: 'history'
});