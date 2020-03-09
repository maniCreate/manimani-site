<template>
  <article class="other-project">
    <div class="project-image">
      <img src="./../../assets/noimage.png" />
    </div>
    <div class="project-description">
      <p class="project-sub-title">OSS - Wave Animation for iOS UI</p>
      <h3 class="project-title">WaveAnimationView</h3>
      <div class="reference">
        <div class="tags">
          <ul>
            <li>Swift5</li>
            <li>UIKit</li>
            <li>CocoaPods</li>
          </ul>
        </div>
        <div class="extarnal-links">
          <ul>
            <li>
              <a href>
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fas fa-external-link-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "OtherProject",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.other-project {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 80px 0;
}

.project-image {
  width: 350px;
  height: 220px;
  overflow: hidden;
  margin-right: 30px;
}

.project-image > img {
  height: 100%;
}

.project-description {
  text-align: left;
}

.project-title {
  position: relative;
  font-size: 1.8em;
}

.project-title:after {
  position: absolute;
  bottom: -15px;
  right: 0;
  content: "";
  width: 130%;
  height: 5px;
  background: rgba(255, 255, 255, 1);
}

.project-sub-title {
  font-weight: 400;
  color: rgba(61, 219, 255, 1);
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
}

.reference > .extarnal-links > ul > li {
  margin-left: 20px;
  font-size: 1.4em;
}

.reference > .extarnal-links > ul > li a {
  transition: all 0.3s;
}

.reference > .extarnal-links > ul > li a:hover {
  color: rgba(61, 219, 255, 1);
  transition: all 0.3s;
}
</style>
