<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <ul>
      <li v-for="article in articles">
        {{ article.title }}
      </li>
    </ul>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
export default {
  name: "secondcomponent",
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
    }
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {"Access-Control-Allow-Origin": "*"},
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调

      this.articles = response.data.subjects
      // this.articles = response.data["subjects"] 也可以

    }, function (response) {
      // 这里是处理错误的回调
      console.log(response)
    });
  }
}
</script>

<style scoped>

</style>