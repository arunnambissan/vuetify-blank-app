export default {    
    setStateValue({state, commit}, payload) {
        commit('setStateValue', {key: payload.key, value: payload.value});
    },
}