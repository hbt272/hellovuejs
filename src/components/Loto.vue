<style lang="scss" scoped>
.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}

.md-gutter {
    margin-right: -15px!important;
    margin-left: -15px!important;
}

.md-content {
    // max-height: 80%;
    overflow: auto;
}

.md-display-4 {
    font-size: 4rem;
}

.isNumber {
    font-size: 12rem;
}

.md-speed-dial {
    z-index: 3;
}

.md-speed-dial.md-top-left,
.md-speed-dial.md-top-right {
    top: 62px;
}

.md-speed-dial.md-bottom-left,
.md-speed-dial.md-bottom-right {
    position: fixed;
}

.md-layout.md-alignment-center{
  align-items: unset;
}

.align-center {
    margin: auto;
}

.currentNum {
    color: green;
}
</style>

<template>
<div>
  <md-speed-dial class="md-top-left" md-direction="bottom">
    <md-speed-dial-target @click="mix_initLoto($store.state.minNum,$store.state.maxNum)">
      <md-icon>autorenew</md-icon>
      <!-- <md-icon class="md-morph-final">edit</md-icon> -->
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button class="md-icon-button">
        <md-icon>edit</md-icon>
      </md-button>

      <!-- <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button> -->
    </md-speed-dial-content>
  </md-speed-dial>
  <md-speed-dial class="md-top-right" md-direction="bottom">
    <md-speed-dial-target class="md-primary" @click="mix_callNumber">
      <md-icon>my_location</md-icon>
    </md-speed-dial-target>
  </md-speed-dial>
  <md-speed-dial class="md-bottom-left" md-direction="top">
    <md-speed-dial-target class="md-primary" @click="play">
      <md-icon v-if="!$store.state.autoCall">play_circle_outline</md-icon>
      <md-icon v-if="$store.state.autoCall">pause</md-icon>
    </md-speed-dial-target>
  </md-speed-dial>
  <md-speed-dial class="md-bottom-right" md-direction="top">
    <md-speed-dial-target class="md-primary" @click="mix_onOffAutoCall">
      <md-icon v-if="!$store.state.autoCall">play_circle_outline</md-icon>
      <md-icon v-if="$store.state.autoCall">pause</md-icon>
    </md-speed-dial-target>
  </md-speed-dial>
  <div class="md-layout md-alignment-center">
    <div class="md-layout-item md-small-100 md-xsmall-size-100">
      <!-- <md-button class="md-primary md-raised md-accent" @click="mix_initLoto(1,10)">RESET</md-button> -->
      <md-empty-state>
        <span class="md-display-4 currentNum" :class="{ 'isNumber': (typeof $store.state.calledNums[0]) === 'number'}">{{$store.state.calledNums[0] || 'GO!'}}</span>
        <!-- <md-button class="md-primary md-raised" @click="mix_callNumber">CALL NEW NUMBER</md-button> -->
      </md-empty-state>
    </div>
    <div class="md-layout-item md-size-100">
      <Adsense
        data-ad-client="ca-pub-8525780142236607"
        data-ad-slot="9262103896">
      </Adsense>
    </div>
    <div class="md-layout-item md-small-100 md-xsmall-size-100">
      <md-content class="md-scrollbar">
        <md-list>
          <md-list-item v-for="(num, index) in $store.state.calledNums" :key="index" v-if="index !=0 ">
            <div class="align-center" >
              <span class="md-display-2">{{num}}</span>
              <div v-if="(index % 9) == 0">
                <InArticleAdsense
                  data-ad-client="ca-pub-8525780142236607"
                  data-ad-slot="9421885996">
                </InArticleAdsense>
              </div>
            </div>
          </md-list-item>
        </md-list>
      </md-content>
    </div>
  </div>
  <audio ref="player" autoplay preload="auto">
    <source :src="$store.state.audioBaseSrc + $store.state.calledNums[0] +'.mp3'" type="audio/mpeg">
  </audio>
  <audio-player :sources="audioSources" :loop="true"></audio-player>
  <!-- <audio v-el:audio :src="$store.state.audioSRC" preload="auto"></audio> -->
</div>
</template>

<script>
import {
  mix
}
from '../mixins/mix'

import AudioPlayer from './audio-player.vue'

export default {
  name: 'Loto',
  components: {
      AudioPlayer
    },
  data: () => {
    return {
      audioSources: [
          "assets/audio/25.mp3"
        ]
    }
  },
  methods: {
    callNumber() {
      this.$store.state.currentNum += 1;
    },
    reduceNumber() {
      this.$store.state.currentNum -= 1;
    },
    play(){
      this.$refs.player.play();
    }
  },
  created() {
    if (this.$store.state.availableNums.length == 0 && this.$store.state.calledNums.length == 0) {
      this.mix_initLoto(this.$store.state.minNum, this.$store.state.maxNum)
    }
    // this.$http.get('http://172.25.97.37:666/sal/20172318').then(res => {
    //   console.log(res);
    // })
  },
  mixins: [mix]
}
</script>
