<template>
  <div id="app">
    <div class="page-header">
      <h1 class="title is-1">Kanban Board</h1>
      <h4 class="subtitle is-5">A simple Kanban Board written in Vue</h4>

    </div>
    <menu-bar></menu-bar>
    <router-view/>
  </div>
</template>
<script>
import MenuBar from '@/components/MenuBar'
export default {
  name: 'app',
  components: {
    'menu-bar': MenuBar
  }
}
</script>

<style lang="scss">
@import '~bulma/bulma';

#app {
  padding-top: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.page-header h1 {
  font-weight: 300;
}
</style>
