import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  currentNum: 0,
  calledNums: [],
  availableNums: [],
  autoCall: false,
  minNum: 1,
  maxNum: 90,
  timeout: 6000,
  playAudio:true,
  stateBeforeOpts:{}
}
export default new Vuex.Store({
  state
})
