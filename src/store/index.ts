import { createStore } from 'vuex'
import { IRootState } from './type'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'qqq',
      age: 22
    }
  }
})

export default store
