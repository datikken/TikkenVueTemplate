import store from '../store/store'

export default function(to, from, next) {
    if(store.getters.user) {
        next()
    } else {
        next('/sign_in?loginError="true"')
    }
} 