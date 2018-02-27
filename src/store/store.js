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
  timeout: 5000,
  audioBaseSrc:"https://raw.githubusercontent.com/hbt272/loto/master/src/assets/audio/",
  audioSrc:"",
  stateBeforeOpts:{}
}
export default new Vuex.Store({
  state
})
