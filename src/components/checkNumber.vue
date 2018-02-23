<style lang="scss" scoped>
.md-speed-dial.md-top-left,
.md-speed-dial.md-top-right {
    top: 62px;
}

.exits{
  color: red;
  font-weight: bold;
}
</style>

<template>
<div>
  <div class="md-layout md-alignment-center">
    <div class="md-layout-item md-size-10" v-for="(num, index) in numbers" :key="index">
      <span class="" :class="{ 'exits': exits(num, $store.state.calledNums) }">{{num}}</span>
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
  name: 'checkNumber',
  data: () => {
    return {
      numbers:[]
    }
  },
  methods: {
    exits(num, set){
      return (set.indexOf(num) != -1)
    }
  },
  created() {
    this.$store.state.autoCall = false;
    this.numbers = [];
    for(let i=1; i<=90; i++){
      this.numbers.push(i);
    }
  },
  mixins: [mix]
}
</script>
