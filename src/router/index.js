import Vue from 'vue'
import Router from 'vue-router'
import choose_table from '@/pages/Choose_table/choose_table.vue'
import check_out from '@/pages/Check_out/check_out.vue'
import have_dinner from '@/pages/Have_dinner/have_dinner.vue'
import order from '@/pages/Order/order.vue'
import settle_accounts from '@/pages/Settle_accounts/settle_accounts.vue'
import search from '@/pages/Search/search.vue'
import ordering from '@/pages/ordering/ordering.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/check_out',
			name: 'check_out',
			component: check_out
		},
		{
			path: '/have_dinner',
			name: 'have_dinner',
			component: have_dinner
		},
		{
			path: '/',
			name: 'order',
			component: order
		},
		{
			path: '/settle_accounts',
			name: 'settle_accounts',
			component: settle_accounts
		},
		{
			path: '/search',
			name: 'search',
			component: search
		},
		{
			path: '/ordering',
			name: 'ordering',
			component: ordering
		}
	]
})
