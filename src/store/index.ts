import { createStore, useStore as vuexStore } from 'vuex'
import { IRootState, IStore } from './type'

import loginModule from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'qqq',
      age: 22
    }
  },
  modules: {
    loginModule
  }
})

export const setupStore = () => {
  store.dispatch('loginModule/loadLocalCache')
}

// export const useStore = (): Store<IStore> => {
//   return vuexStore<IStore>()
// }

export const useStore = () => {
  return vuexStore<IStore>()
}

export default store
