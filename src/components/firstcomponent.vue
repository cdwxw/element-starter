<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script>
export default {
  name: "firstcomponent",
  data () {
    return {
      author: "微信公众号 jinkey-love",
    }
  }
}
</script>

<style scoped>

</style>