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
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<template>
<div id="app">
  <md-toolbar class="md-primary">
    <!-- <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
        </md-button> -->
    <span class="md-title">Loto</span>
    <!-- <span>{{$store.state.currentNum}}</span> -->

    <div class="md-toolbar-section-end">
      <router-link to="/">
        <md-button>Home</md-button>
      </router-link>
      <router-link to="/check">
        <md-button>Check</md-button>
      </router-link>
    </div>
  </md-toolbar>
  <!-- <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">My App name</span>
        </md-toolbar>

        <md-list>
            <md-list-item>
                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
                <md-icon>send</md-icon>
                <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
                <md-icon>delete</md-icon>
                <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
                <md-icon>error</md-icon>
                <span class="md-list-item-text">Spam</span>
            </md-list-item>
        </md-list>
    </md-drawer> -->
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  })
}
</script>
