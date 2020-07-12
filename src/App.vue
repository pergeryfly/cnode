<template>
  <div id="app">
    <Header></Header>
    <main class="clearfix">
      <router-view name="main">
      </router-view>
      <Aside></Aside>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
// import Article from './components/Article'
import Aside from './components/Aside'

export default {
  name: 'App',
  components: {
    Header,
    // Article,
    Aside
  }
}
</script>
<style>
</style>
