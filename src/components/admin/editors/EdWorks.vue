<template>
  <div class="ed-works">
    <section id="edit-works">
      <h3>
        <i class="fas fa-paperclip"></i>Main Works
      </h3>
      <div id="content" class="flex-box">
        <div id="main-works">
          <p>Main works</p>
          <button class="add-works">＋</button>
          <article class="work">
            <div class="work-image">
              <img src="../../../assets/noimage.png" alt />
            </div>
            <div class="work-data">
              <p class="work-subtitle">Heat Limit LifeSpan Counter</p>
              <h4 class="work-title">Limit</h4>
              <ul class="work-techs">
                <li>Swift5</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
            <button class="work-edit">Edit</button>
          </article>
          <article class="work">
            <div class="work-image">
              <img src="../../../assets/noimage.png" alt />
            </div>
            <div class="work-data">
              <p class="work-subtitle">Heat Limit LifeSpan Counter</p>
              <h4 class="work-title">Limit</h4>
              <ul class="work-techs">
                <li>Swift5</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
            <button class="work-edit">Edit</button>
          </article>
          <article class="work">
            <div class="work-image">
              <img src="../../../assets/noimage.png" alt />
            </div>
            <div class="work-data">
              <p class="work-subtitle">Heat Limit LifeSpan Counter</p>
              <h4 class="work-title">Limit</h4>
              <ul class="work-techs">
                <li>Swift5</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
            <button class="work-edit">Edit</button>
          </article>
        </div>
        <div id="other-works">
          <p>Other works</p>
          <button class="add-works">＋</button>
          <article class="work">
            <div class="work-image">
              <img src="../../../assets/noimage.png" alt />
            </div>
            <div class="work-data">
              <p class="work-subtitle">Heat Limit LifeSpan Counter</p>
              <h4 class="work-title">Limit</h4>
              <ul class="work-techs">
                <li>Swift5</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
            <button class="work-edit">Edit</button>
          </article>
          <article class="work">
            <div class="work-image">
              <img src="../../../assets/noimage.png" alt />
            </div>
            <div class="work-data">
              <p class="work-subtitle">Heat Limit LifeSpan Counter</p>
              <h4 class="work-title">Limit</h4>
              <ul class="work-techs">
                <li>Swift5</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
            <button class="work-edit">Edit</button>
          </article>
          <article class="work">
            <div class="work-image">
              <img src="../../../assets/noimage.png" alt />
            </div>
            <div class="work-data">
              <p class="work-subtitle">Heat Limit LifeSpan Counter</p>
              <h4 class="work-title">Limit</h4>
              <ul class="work-techs">
                <li>Swift5</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
            <button class="work-edit">Edit</button>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EdWorks"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 1 {
  .ed-works section:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{200ms * $i};
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

* {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 15px;
}
a {
  color: #42b983;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.9em;
  font-family: milibus;
}

.flex-box {
  display: flex;
  flex-wrap: wrap;
}

.ed-works {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ed-works section {
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  padding: 30px;
  border-radius: 5px;
  text-align: left;
  background: rgba(47, 49, 68, 1);
}

.ed-works section h3 {
  margin-top: 0;
}

.ed-works section h3 i {
  margin-right: 15px;
}

#edit-works #content {
  justify-content: space-between;
}

#edit-works #content > div {
  width: calc(100% / 2 - 30px);
  height: 100%;
}

#edit-works #content .add-works {
  margin: 20px 0;
  display: block;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 5px;
  outline: 2px dashed rgba(255, 255, 255, 0.6);
  outline-offset: -15px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.05);
  font-size: 30px;
}

#edit-works #content .work {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 0.8em;
}

.work .work-image > img {
  width: 150px;
}

.work .work-data {
  width: 200px;
  height: 100%;
}

.work .work-data .work-subtitle {
  margin: 0 0 10px 0;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.6);
}

.work .work-data .work-title {
  margin: 15px 0;
  font-size: 1.5em;
}

.work .work-data .work-techs {
  font-weight: 100;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}

.work .work-data .work-techs li:before {
  content: "#";
  margin-right: 5px;
}

.work .work-edit {
  width: 80px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.9);
  background: #42b983;
  border-radius: 3px;
}
</style>
