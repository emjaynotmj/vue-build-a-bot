import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import BrowseHeads from '../components/parts/BrowseHeads.vue';
import BrowseArms from '../components/parts/BrowseArms.vue';
import BrowseTorsos from '../components/parts/BrowseTorsos.vue';
import BrowseBases from '../components/parts/BrowseBases.vue';
import SidebarStandard from '../components/sidebars/SidebarStandard.vue';
import SidebarBuild from '../components/sidebars/SidebarBuild.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: '/build',
      name: 'RobotBuilder',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: 'heads',
          name: 'BrowseHeads',
          component: BrowseHeads,
        },
        {
          path: 'arms',
          name: 'BrowseArms',
          component: BrowseArms,
        },
        {
          path: 'torsos',
          name: 'BrowseTorsos',
          component: BrowseTorsos,
        },
        {
          path: 'bases',
          name: 'BrowseBases',
          component: BrowseBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
  ],
});
