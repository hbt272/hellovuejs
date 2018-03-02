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
      this.mix_playAudio()
    },

    mix_playAudio() {
      if(!this.$store.state.playAudio) return;
      
      console.log(this.$refs.a);
      this.$store.state.audioSrc = this.$store.state.audioBaseSrc + this.$store.state.calledNums[0] + '.mp3';
      let player = new Audio('../../static/audio/'+ this.$store.state.calledNums[0] +'.mp3');
      player.play();
    },

    mix_onOffAutoCall(){
      if(!this.$store.state.autoCall){
        if(this.$store.state.availableNums.length == 0){
          this.mix_initLoto(this.$store.state.minNum,this.$store.state.maxNum)
        }
        this.$store.state.autoCall = true;
        this.mix_autoCall();
      }
      else{
        this.$store.state.autoCall = false;
      }

    },

    mix_autoCall(){
      if(this.$store.state.autoCall && this.$store.state.availableNums.length > 0){
        this.mix_callNumber();
        setTimeout(()=>{
          this.mix_autoCall();
        },this.$store.state.timeout)
      }
      else{
        this.$store.state.autoCall = false;
      }
    }

  }
}
