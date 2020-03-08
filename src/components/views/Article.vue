<template>
  <section id="article">
    <h2 class="content-title">04. Article</h2>
    <div id="posts">
      <Post
        v-for="(post, key) in postsDataList"
        :key="key"
        :title="post.title"
        :body="post.body"
        :update="post.update"
        :ref_site="post.refSite"
        :site_url="post.siteUrl"
        :image_url="post.imageUrl"
      ></Post>
    </div>
    <div class="linker">
      <a class="sub-linker" href="#">LEARN MORE</a>
    </div>
  </section>
</template>

<script>
import Post from "@/components/views/Post";

export default {
  name: "Article",
  components: {
    Post
  },
  data: function() {
    return {
      postsDataList: [
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../../assets/noimage.png")
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 6 {
  #posts > *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

#article .content-title:before {
  left: 50%;
  transform: translateX(-50%);
}

#article #posts {
  display: flex;
  width: 960px;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px auto;
}

</style>
