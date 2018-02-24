<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.md-drawer {
  width: 300px;
  max-width: calc(100vw - 60px);
}
</style>

<template>
<div id="app">
  <md-toolbar class="md-primary">
    <md-button class="md-icon-button" @click="showNavigation = true;">
            <md-icon>menu</md-icon>
    </md-button>
    <span class="md-title">LÔ TÔ</span>
    <!-- <span>{{$store.state.currentNum}}</span> -->

    <div class="md-toolbar-section-end">
      <router-link to="/">
        <md-button>Home</md-button>
      </router-link>
      <router-link to="/check">
        <md-button>KIỂM TRA</md-button>
      </router-link>
    </div>
  </md-toolbar>
  <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class=" md-accent"  md-elevation="0">
            <span class="md-title ">CÀI ĐẶT</span>
        </md-toolbar>

        <md-list>
            <md-list-item>
                <md-field>
                  <label>MIN</label>
                  <md-input v-model="$store.state.minNum"></md-input>
                </md-field>
            </md-list-item>

            <md-list-item>
                <md-field>
                  <label>MAX</label>
                  <md-input v-model="$store.state.maxNum"></md-input>
                </md-field>
            </md-list-item>

            <md-list-item>
                <md-field>
                  <label>TIME-OUT</label>
                  <md-input v-model="$store.state.timeout"></md-input>
                </md-field>
            </md-list-item>
        </md-list>
    </md-drawer>
  <router-view/>
</div>
</template>

<script>
import {
  mix
}
from './mixins/mix'

export default {
  name: 'App',
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  }),

  watch:{
    showNavigation: function (newVal){
      if(newVal){
        this.$store.state.stateBeforeOpts['minNum'] = this.$store.state.minNum;
        this.$store.state.stateBeforeOpts['maxNum'] = this.$store.state.maxNum;
        this.$store.state.stateBeforeOpts['autocall'] = this.$store.state.autoCall;
        if(this.$store.state.autoCall) this.$store.state.autoCall = false;
      }
      else{

        if(this.$store.state.stateBeforeOpts['minNum'] != this.$store.state.minNum || 
          this.$store.state.stateBeforeOpts['maxNum'] != this.$store.state.maxNum){
          this.mix_initLoto(this.$store.state.minNum, this.$store.state.maxNum);
        }
        else{
          if(this.$store.state.stateBeforeOpts['autocall']){
            this.mix_onOffAutoCall();
          }
        }
        
        this.$store.state.stateBeforeOpts = {}
      }
    }
  },
  mixins: [mix]
}
</script>
