<template>
  <article v-if="this.order % 2 == 0" class="main-work" >
    <div class="work-image">
      <img :src="this.workImageUrl" />
    </div>
    <div class="work-description">
      <p>{{ this.sub_title }}</p>
      <h3 class="work-title">{{ this.title }}</h3>
      <p class="overview">{{ this.description }}</p>
      <div class="reference">
        <div class="tags">
          <ul>
            <li v-for="(tag, key) in this.tags" :key="key">{{ tag }}</li>
          </ul>
        </div>
        <div class="extarnal-link">
          <ul>
            <li>
              <i class="fab fa-github"></i>
            </li>
            <li>
              <i class="fab fa-app-store"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
  <article  v-else class="main-work main-work-odds">
    <div class="work-image">
      <img src="./../../assets/noimage.png" />
    </div>
    <div class="work-description">
      <p>Heart shaped lifespan timer</p>
      <h3 class="work-title">Limit</h3>
      <p
        class="overview"
      >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
      <div class="reference">
        <div class="tags">
          <ul>
            <li>Swift5</li>
            <li>Firebase</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div class="extarnal-link">
          <ul>
            <li>
              <i class="fab fa-github"></i>
            </li>
            <li>
              <i class="fab fa-app-store"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "MainWork",
  props: {
    order: Number,
    title: String,
    sub_title: String,
    workImageUrl: String,
    description: String,
    tags: Array,
    github_url: String,
    appstore_url: String,
    external_url: String,
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main-work {
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 160px;
}

.work-image {
  position: relative;
  min-width: 500px;
  height: 310px;
  margin-right: 50px;
}

.work-image:after {
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: -9999;
  content: "";
  width: 100%;
  height: 100%;
  background: darkgray;
  transition: all 0.2s;
}

.work-image:hover:after {
  bottom: -18px;
  right: -18px;
  background: #fff;
  transition: all 0.2s;
}

.work-image img {
  width: 100%;
  height: 100%;
}

.work-image a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.work-description {
  text-align: left;
}

.work-title {
  font-size: 2em;
  margin: 5px 0;
}

.overview {
  display: inline-block;
  padding: 20px;
  width: calc(100% + 150px);
  height: 130px;
  transform: translateX(-150px);
  background: #fff;
  color: gray;
  font-size: 0.75em;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  line-height: 1.9em;
}

.reference {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: lightgray;
}

.reference ul {
  display: flex;
  margin: 10px 0;
}

.reference > .tags > ul {
  margin-right: 80px;
}

.reference > .tags > ul > li {
  font-style: italic;
  margin-right: 20px;
  font-size: 0.9em;
  font-weight: 100;
  font-family: milibus;
}

.reference > .extarnal-link > ul > li {
  margin-left: 20px;
  font-size: 1.4em;
}


.main-work-odds {
  flex-direction: row-reverse;
}

.main-work-odds .work-image {
  margin-right: 0;
  margin-left: 50px;
}

.main-work-odds .overview {
  transform: translateX(0px);
}
</style>
