export default {
	state: {
		totalPrice: ""
	},
	actions: {},
	mutations: {
		changePrice(state,data) {
			state.totalPrice = parseInt(data) * 40
		}
	},
	getters: {}
}