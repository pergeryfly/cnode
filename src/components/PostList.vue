<template>
  <article>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="">
    </div>
    <div class="article" v-else>
      <div class="nav">
        <ul>
          <li><a href="">全部</a></li>
          <li><a href="">精华</a></li>
          <li><a href="">分享</a></li>
          <li><a href="">问答</a></li>
          <li><a href="">招聘</a></li>
          <li><a href="">客户端测试</a></li>
        </ul>
      </div>
      <div class="news" v-for="(post, index) in posts" :key="index">
        <a href=""> <img :src="post.author.avatar_url" :alt="post.author.loginname"></a>
        <span>
      <span class="reply_count">{{post.reply_count}}</span>
      <span class="list-divider">/</span>
      <span class="visit_count">{{post.visit_count}}</span>
    </span>
        <span
            :class="[{post_good:(post.good===true),post_top:(post.top===true),'tab':(post.good!==true&&post.good!==true)}]">{{post | tabFormatter}}</span>
        <a href="" class="title">
          <router-link :to="{name:'post_content' ,params:{id:post.id}}">{{post.title}}</router-link>

        </a>
        <a href="" class="visit_news">
          <img :src="post.author.avatar_url" alt="">
          <span>{{post.last_reply_at | dateFormatter()}}</span>
        </a>
      </div>
      <div class="page"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostList',
  data: function () {
    return {
      isLoading: false,
      posts: []
    }
  },
  methods: {
    getData () {
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 10
      }).then(res => {
        this.isLoading = false
        this.posts = res.data.data
        // 加载成功去除动画
      }).catch(err => {
        console.log(err)
      })
    }
  },
  beforeMount () {
    this.isLoading = true
    // 页面加载前加载动画
    this.getData()
  }
}
</script>

<style lang="less" scoped>
  article {
    float: left;
    width: 77%;
    background: white;

    > .loading {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-posts: center;
    }

    > .article {
      position: relative;

      > .nav {
        background: #f6f6f6;

        > ul {
          list-style: none;
          margin: 0 10px;
          padding: 6px 0;

          > li {
            display: inline-block;
            margin: 0 10px;

            > a {
              display: inline-block;
              text-decoration: none;
              background-color: #80bd01;
              color: #fff;
              padding: 3px 4px;
              border-radius: 3px;
            }
          }
        }
      }

      > .news {
        position: relative;
        padding: 10px 0;
        font-size: 14px;

        > a {
          margin: 0 10px;

          > img {
            width: 30px;
            height: 30px;
          }
        }

        > span {
          margin: 0 10px;

          > .reply_count {
            color: #9e78c0;
            font-size: 14px;
          }

          > .list-divider {
            font-size: 10px;
          }

          > .visit_count {
            font-size: 10px;
            color: #b4b4b4;
          }
        }

        > .tab {
          background-color: #e5e5e5;
          color: #999;
          padding: 2px 4px;
          border-radius: 3px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -o-border-radius: 3px;
          font-size: 12px;
        }

        > .post_good, .post_top {
          background: #80bd01;
          padding: 2px 4px;
          border-radius: 3px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -o-border-radius: 3px;
          color: #fff;
          font-size: 12px;
        }

        > .title {
          max-width: 70%;
          -o-text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          line-height: 30px;
          text-decoration: none;
          color: #333;
        }

        > .visit_news {
          position: absolute;
          right: 0;
          text-decoration: none;

          > img {
            height: 18px;
            width: 18px;
            vertical-align: middle;
            margin-right: .5em;
            border-radius: 3px;
          }

          > span {
            font-size: 11px;
            text-align: right;
            min-width: 50px;
            display: inline-block;
            white-space: nowrap;
            color: #778087;
            line-height: 2em;
          }
        }
      }
    }
  }
</style>
