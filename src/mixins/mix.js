export const mix = {
  created() {
    // console.log(this.$store.state)
  },
  data: () => {
    return {}
  },
  methods: {
    mix_initLoto(min, max) {
      let base = [];
      this.$store.state.availableNums = [];
      this.$store.state.calledNums = [];
      for (let j = min; j <= max; j++) {
        base.push(j);
      }

      for (let i = max; i > 0; i--) {
        let index = Math.floor(Math.random() * Math.floor(i)) // expect: 0 -> i-1
        this.$store.state.availableNums.push(base[index]);
        base.splice(index, 1);
      }
      // console.log(base,this.$store.state.availableNums)
    },

    mix_callNumber() {
      if (this.$store.state.availableNums.length == 0 && this.$store.state.calledNums.length > 0) {
        if (this.$store.state.calledNums[0] == 'OVER!') return;
        this.$store.state.calledNums.unshift('OVER!');
        return;
      }
      let index = Math.floor(Math.random() * Math.floor(this.$store.state.availableNums.length)) // expect: 0 -> i-1
      this.$store.state.calledNums.unshift(this.$store.state.availableNums[index]);
      this.$store.state.availableNums.splice(index, 1);
    }
  }
}
