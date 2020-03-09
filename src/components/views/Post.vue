<!-- Mark: Article.vueへReplace -->
<template>
  <div>
    <article class="post">
      <img :src="this.image_url" />
      <h3>{{ this.title }}</h3>
      <p>{{ this.body }}</p>
      <ul>
        <li>{{ this.update }}</li>
        <li>{{ this.ref_site }}</li>
      </ul>
      <a :href="this.post_url"></a>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: String,
    body: String,
    update: String,
    ref_site: String,
    post_url: String,
    image_url: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.post {
  position: relative;
  width: 270px;
  height: 100%;
  padding: 10px;
  background: rgba(53, 60, 72, 1);
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.75);
  text-align: left;
  transition: all 0.3s;
}

.post:hover {
  transform: translateY(-5px);
  box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
}

.post > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.post > img {
  width: 250px;
}

.post > h3 {
  font-weight: 700;
  font-size: 1.1em;
}

.post h3,
p {
  margin: 15px 0;
}

.post p {
  text-align: left;
  line-height: 2.2em;
  font-size: 0.5em;
}

.post > ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 0.8em;
  color: rgba(61, 219, 255, 1);
}
</style>
