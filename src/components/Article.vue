<template>
  <div class="content">
    <div class="loading" v-if="isLoading">
      <img src="../assets/cnodejs_light.svg" alt="">
    </div>
    <div class="posts" v-else>
      {{post.title}}
      <div class="topic-header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>发布于{{post.creat_at | dateFormatter}}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data: function () {
    return {
      isLoading: false,
      // 是否正在加载
      post: {}
    }
  },
  methods: {
    getData: function () {
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)``
        .then(res => {
          if (res.data.success === true) {
            this.post = res.data.data
            this.isLoading = false
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeMount () {
    this.isLoading = true
    this.getData()
  }
}
</script>

<style scoped>

</style>
