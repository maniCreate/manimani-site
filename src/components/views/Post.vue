<template>
  <article class="post">
    <img src="../../assets/noimage.png" />
    <h3>{{ this.title }}</h3>
    <p>{{ this.body }}</p>
    <ul>
      <li>{{ this.update }}</li>
      <li>{{ this.ref_site }}</li>
    </ul>
    <a :href="this.post_url"></a>
  </article>
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-family: milibus;
  display: inline-block;
}
a {
  color: #42b983;
}

.post {
  position: relative;
  width: 270px;
  height: 100%;
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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
  color: #999;
  text-align: left;
  line-height: 2.2em;
  font-size: 0.5em;
}

.post > ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 0.8em;
  color: gray;
}
</style>
