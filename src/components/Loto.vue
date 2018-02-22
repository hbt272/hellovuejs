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
    max-height: 50%;
    overflow: auto;
}

.md-display-4 {
    font-size: 15rem;
}

.number-over {
    font-size: 15rem;
}

</style>

<template>

<div>
    <md-speed-dial class="md-top-left" md-direction="top">
        <md-speed-dial-target @click="mix_initLoto(1,90)">
            <md-icon >autorenew</md-icon>
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
    <md-speed-dial class="md-top-right" md-direction="top">
        <md-speed-dial-target class="md-primary" @click="mix_callNumber">
            <md-icon >my_location</md-icon>
        </md-speed-dial-target>
    </md-speed-dial>
    <div class="md-layout md-gutter">
        <div class="md-layout-item">

        </div>
        <div class="md-layout-item">
            <!-- <md-button class="md-primary md-raised md-accent" @click="mix_initLoto(1,10)">RESET</md-button> -->
            <md-empty-state>
                <span class="md-display-4">{{$store.state.calledNums[0] || 'GO!'}}</span>
                <!-- <md-button class="md-primary md-raised" @click="mix_callNumber">CALL NEW NUMBER</md-button> -->
            </md-empty-state>
        </div>
        <div class="md-layout-item">
            <md-content class="md-scrollbar">
                <md-list>
                    <md-list-item v-for="num in $store.state.calledNums">
                        <span class="md-display-2 md-alignment-top-center">{{num}}</span>
                    </md-list-item>
                </md-list>
            </md-content>
        </div>
    </div>
</div>

</template>

<script>

import {
    mix
}
from '../mixins/mix'

export default {
    name: 'Loto',
    data: () => {
        return {}
    },
    methods: {
        callNumber() {
                this.$store.state.currentNum += 1;
            },
            reduceNumber() {
                this.$store.state.currentNum -= 1;
            }
    },
    mixins: [mix]
}

</script>
