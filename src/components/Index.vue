<template>
  <div class="index">
    <header id="menu">
      <div id="menu-left">
        <img src="./../assets/breath-logo.png" />
      </div>
      <div id="menu-right">
        <transition-group tag="ul" name="drop-menu">
          <li v-for="(item, index) in headerMenu" :key="index" v-html="item"></li>
        </transition-group>
      </div>
    </header>
    <transition-group tag="ul" name="sns-fade" id="sns-buttons">
      <li v-for="(item, index) in snsList" :key="index" v-html="item"></li>
    </transition-group>
    <div id="container">
      <section id="top">
        <h2>manimani.site</h2>
      </section>
      <section id="about">
        <h2 class="section-title-w">About</h2>
        <div id="profile">
          <div id="profile-left">
            <div id="profile-image">
              <img src="./../assets/profile-light.png" />
              <img src="./../assets/apple.jpg" />
            </div>
            <div class="linker">
              <a href="#">Resume</a>
            </div>
          </div>
          <div id="profile-right">
            <p>Software Engineer, iOS /AR</p>
            <h3 id="name">mani / Shunsuke Nakao</h3>
            <ul>
              <li><i class="fas fa-university"></i>Fukuoka Univ.</li>
              <li><i class="fas fa-map-marker-alt"></i>Fukuoka, Japan</li>
            </ul>
            <div id="skills">
              <h4>Advanced Skills</h4>
              <ul>
                <li>
                  <span class="skill-name">Swift</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">Kotlin</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">Vue.js</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">Node.js</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">Python3</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">Golang</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">TypeScript</span>
                  <span class="skill-level">★★★★★</span>
                </li>
                <li>
                  <span class="skill-name">HTML/CSS</span>
                  <span class="skill-level">★★★★★</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <h2 class="section-title-b">Experience</h2>
        <div id="career">
          <div id="career-list">
            <ul>
              <li>DMM.com</li>
              <li>Cyber Agent</li>
              <li>Yahoo! JAPAN</li>
              <li>Life is Tech!</li>
            </ul>
          </div>
          <div id="career-detail">
            <div id="detail-title">
              <h3>Yahoo! JAPAN inc.</h3>
              <p>2019.2 ~ 2019.3</p>
            </div>
            <h4>KUROOBI & OSS Developer Internship</h4>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p>テキストテキストテキストテキストテキストテキストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキテキストテキスト</p>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ</p>
            <div class="linker">
              <a href="#">View the Report</a>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <h2 class="section-title-w">Work</h2>
        <div id="main-works">
          <article class="main-work">
            <div class="work-image">
              <img src="./../assets/noimage.png" />
              <a href="#"></a>
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
          <article class="main-work">
            <div class="work-image">
              <img src="./../assets/noimage.png" />
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
          <article class="main-work">
            <div class="work-image">
              <img src="./../assets/noimage.png" />
            </div>
            <div class="work-description">
              <p>Heart shaped lifespan timer</p>
              <h3 class="work-title">Limit</h3>
              <p class="overview">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
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
        </div>
        <div id="other-projects">
          <h3 class="section-title-w sub-title">Other Projects</h3>
          <article class="other-project">
            <div class="project-image">
              <img src="./../assets/noimage.png" />
            </div>
            <div class="project-description">
              <p>OSS - Wave Animation for iOS UI</p>
              <h3 class="project-title">WaveAnimationView</h3>
              <div class="reference">
                <div class="tags">
                  <ul>
                    <li>Swift5</li>
                    <li>UIKit</li>
                    <li>CocoaPods</li>
                  </ul>
                </div>
                <div class="extarnal-link">
                  <ul>
                    <li>
                      <i class="fab fa-github"></i>
                    </li>
                    <li>
                      <i class="fas fa-external-link-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article class="other-project">
            <div class="project-image">
              <img src="./../assets/noimage.png" />
            </div>
            <div class="project-description">
              <p>OSS - Wave Animation for iOS UI</p>
              <h3 class="project-title">WaveAnimationView</h3>
              <div class="reference">
                <div class="tags">
                  <ul>
                    <li>Swift5</li>
                    <li>UIKit</li>
                    <li>CocoaPods</li>
                  </ul>
                </div>
                <div class="extarnal-link">
                  <ul>
                    <li>
                      <i class="fab fa-github"></i>
                    </li>
                    <li>
                      <i class="fas fa-external-link-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article class="other-project">
            <div class="project-image">
              <img src="./../assets/noimage.png" />
            </div>
            <div class="project-description">
              <p>OSS - Wave Animation for iOS UI</p>
              <h3 class="project-title">WaveAnimationView</h3>
              <div class="reference">
                <div class="tags">
                  <ul>
                    <li>Swift5</li>
                    <li>UIKit</li>
                    <li>CocoaPods</li>
                  </ul>
                </div>
                <div class="extarnal-link">
                  <ul>
                    <li>
                      <i class="fab fa-github"></i>
                    </li>
                    <li>
                      <i class="fas fa-external-link-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <div class="linker">
            <a href="#">See more</a>
          </div>
        </div>
      </section>
      <section id="article">
        <h2 class="section-title-b">Article</h2>
        <div id="posts">
          <article class="post">
            <img src="./../assets/noimage.png" />
            <h3>【Swift5】TableViewの再利用による...【iOS】</h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
            <ul>
              <li>2019.2.19</li>
              <li>manilabo.net</li>
            </ul>
            <a href="#"></a>
          </article>
          <article class="post">
            <img src="./../assets/noimage.png" />
            <h3>【Swift5】TableViewの再利用による...【iOS】</h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
            <ul>
              <li>2019.2.19</li>
              <li>manilabo.net</li>
            </ul>
            <a href="#"></a>
          </article>
          <article class="post">
            <img src="./../assets/noimage.png" />
            <h3>【Swift5】TableViewの再利用による...【iOS】</h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
            <ul>
              <li>2019.2.19</li>
              <li>manilabo.net</li>
            </ul>
            <a href="#"></a>
          </article>
          <article class="post">
            <img src="./../assets/noimage.png" />
            <h3>【Swift5】TableViewの再利用による...【iOS】</h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
            <ul>
              <li>2019.2.19</li>
              <li>manilabo.net</li>
            </ul>
            <a href="#"></a>
          </article>
          <article class="post">
            <img src="./../assets/noimage.png" />
            <h3>【Swift5】TableViewの再利用による...【iOS】</h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
            <ul>
              <li>2019.2.19</li>
              <li>manilabo.net</li>
            </ul>
            <a href="#"></a>
          </article>
          <article class="post">
            <img src="./../assets/noimage.png" />
            <h3>【Swift5】TableViewの再利用による...【iOS】</h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...</p>
            <ul>
              <li>2019.2.19</li>
              <li>manilabo.net</li>
            </ul>
            <a href="#"></a>
          </article>
        </div>
        <div class="linker">
          <a href="#">See more</a>
        </div>
      </section>
      <section id="contact">
        <h2 class="section-title-w">Contact</h2>
        <p>
          お仕事に関するご相談・その他のご相談はこちらから。
          <br />Gmail、SNSのDMでも受け付けておりますので、お気軽にご連絡下さい。
        </p>
        <p>
          Please contact me from the button below if you are interested in me.
          <br />I also accept your message by Gmail or DM on Twitter !
        </p>
        <div class="linker">
          <a href="mailto:mani.mlife@gmail.com">Get In Touch !</a>
        </div>
      </section>
    </div>
    <footer>
      <p>Copyright © 2020 manimani site All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
// import Profile from './views/Profile'
// import Skills from './views/Skills'
// import Experience from './views/Experience'
// import Works from './views/Works'
// import Posts from './views/Posts'

export default {
  name: "index",
  data: function() {
    return {
      headerMenu: [
        '<a href="#about">About</a>',
        '<a href="#experience">Experience</a>',
        '<a href="#work">Work</a>',
        '<a href="#article">Article</a>',
        '<a href="#contact">Contact</a>',
        '<div id="language"><button type="button">JP</button><button type="button">EN</button></div>',
      ],
      snsList: [
        '<a href="#"><i class="fab fa-linkedin-in"></i></a>',
        '<a href="#"><i class="fab fa-twitter"></i></a>',
        '<a href="#"><i class="fab fa-github"></i></a>',
        '<a href="#"><i class="fas fa-search"></i></a>',
        '<a href="#"><i class="fas fa-pen-nib"></i></a>'
      ]
    }
  },
  components: {
    // Profile,
    // Skills,
    // Experience,
    // Works,
    // Posts
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: gray;
}

ul {
  padding: 0;
  list-style: none;
}

h2 {
  font-size: 2.8em;
}
h3 {
  font-size: 1.6em;
}
h4 {
  font-size: 1em;
}

p {
  font-size: 1em;
  color: lightgray;
}

li,
a,
h2 {
  font-family: milibus;
}

h2,
h3 {
  font-weight: 900;
}

.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
}

#menu {
  display: flex;
  padding: 10px 60px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#menu-left {
  display: flex;
}
#menu-left img {
  width: 20px;
}

#menu-right ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#menu-right ul li {
  display: inline-block;
  margin: 0 30px;
  font-size: 1em;
}


#menu-right >>> ul li a {
  text-decoration: none;
  color: #1a1a1a;
  position: relative;
  transition: all 0.3s;
}

#menu-right >>> ul li a:after {
  position: absolute;
  bottom: -8px;
  left: 0;
  content: "";
  width: 0;
  height: 3px;
  background: #1a1a1a;
  transition: all 0.3s;
}

#menu-right >>> ul li a:hover:after {
  width: 120%;
  transition: all 0.3s;
}

#menu-right >>> #language {
  background: #1a1a1a;
  border-radius: 5px;
  padding: 5px 20px;
}

#menu-right >>> #language button {
  font-size: 0.8em;
  line-height: 25px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

#sns-buttons {
  position: fixed;
  left: 70px;
  bottom: 10px;
  font-size: 1.4em;
}

#sns-buttons >>> li {
  margin: 30px 0;
}

#sns-buttons >>> li i {
  color: #fff;
  transition: 0.3s all;
  position: relative;
}

#sns-buttons >>> li i:after {
  position: absolute;
  top: -10px;
  left: -5px;
  z-index: -100;
  content: "";
  width: 100%;
  height: 100%;
  padding: 10px 5px;
  transform: skewY(-15deg);
  background: gray;
}

#sns-buttons >>> li i:hover {
  color: rgba(0, 0, 0, 0.6);
  transition: 0.3s all;
}

#container {
  width: 960px;
  margin: 0 auto;
}

section {
  margin: 180px 0;
  padding: 80px 0;
}

#container section:last-child {
  margin-bottom: 0;
  padding-bottom: 150px;
}
#container section:last-child:after {
  height: 122%;
}

.linker {
  text-align: center;
  margin: 20px 0;
}

.linker a {
  display: inline-block;
  padding: 7px 40px;
  font-size: 0.9em;
  border: 1px solid gray;
  border-radius: 5px;
  transition: all 0.3s;
}

.linker a:hover {
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.section-title-w {
  color: #fff;
  text-shadow: 6px 5px 0px rgba(255, 255, 255, 0.2);
}
.section-title-b {
  color: #1a1a1a;
  text-shadow: 6px 5px 0px rgba(0, 0, 0, 0.08);
}

.sub-title {
  font-family: "milibus";
  font-weight: 300;
  font-size: 1.8em;
}

.title-img {
  width: 120px;
}

#top {
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
}

#top h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#about {
  position: relative;
  color: #fff;
}

#about:after {
  position: absolute;
  top: 50%;
  left: -50%;
  transform: rotate(-5deg) translateY(-50%);
  z-index: -10000;
  content: "";
  width: 130vw;
  height: 120%;
  background: #1a1a1a;
}

#about .linker a {
  margin-top: 30px;
  color: #fff;
  border-color: #fff;
}

#profile {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 80px 0;
}

#profile-left {
  margin-right: 50px;
}


#profile-image {
  position: relative;
}

#profile-image img {
  border: 5px solid gray;
  border-radius: 50%;
}

#profile-image img:first-child {
  width: 250px;
  height: 250px;
}

#profile-image img:nth-child(2) {
  position: absolute;
  bottom: 10px;
  right: -10px;
  border: 4px solid rgba(0, 0, 0, 0.8);
  width: 80px;
  height: 80px;
}

#profile-right {
  font-family: milibus;
  text-align: left;
}

#profile-right > ul {
  display: flex;
  font-weight: 100;
  color: lightgray;
}
#profile-right > ul li {
  margin-right: 15px;
}
#profile-right > ul li i {
  margin-right: 8px;
}

#profile-right #name {
  position: relative;
  font-weight: 900;
  font-size: 2.6em;
  margin: 10px 0 30px 0;
}

#profile-right #name:after {
  position: absolute;
  bottom: -10px;
  left: 2px;
  content: "";
  display: inline-block;
  height: 3px;
  width: 60%;
  background: #fff;
}

#about #skills {
  width: 400px;
  margin-top: 50px;
  position: relative;
  border-left: 1px solid #fff;
}

#about #skills h4 {
  display: inline-block;
  padding: 5px 15px;
  font-family: milibus;
  background: #fff;
  color: #1a1a1a;
}

#about #skills ul {
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0px 0px 0px 15px;
  color: lightgray;
}

#about #skills ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin: 8px 10px 8px 0;
}

#career {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}

#career-list {
  text-align: left;
  margin-right: 20px;
  font-size: 1.1em;
}

#career-list ul {
  margin: 0;
  border-left: 3px solid lightgray;
}

#career-list ul li {
  cursor: pointer;
  position: relative;
  padding: 15px 20px;
  transition: all 0.3s;
}

#career-list ul li:hover {
  transform: translateX(-15px) scale(1.05);
  background: #1a1a1a;
  color: #fff;
  transition: all 0.3s;
}

#career-detail {
  width: 500px;
  height: 400px;
  padding: 30px 25px;
  text-align: left;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#career-detail #detail-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}

#career-detail #detail-title:after {
  position: absolute;
  bottom: -15px;
  left: 0;
  content: "";
  width: 100%;
  height: 3px;
  background: #1a1a1a;
}

#career-detail #detail-title h3,
#career-detail #detail-title p {
  font-family: "milibus";
  margin: 0;
}
#career-detail #detail-title p {
  font-size: 1em;
  font-weight: 100;
  color: gray;
}

#career-detail > p {
  color: gray;
  line-height: 1.9em;
  font-size: 0.75em;
  margin-left: 15px;
  position: relative;
}

#career-detail > p::before {
  position: absolute;
  top: 0;
  left: -18px;
  content: "▷";
  color: #1a1a1a;
}

#work {
  position: relative;
  color: #fff;
}

#work:after {
  position: absolute;
  top: 50%;
  left: -60%;
  transform: rotate(5deg) translateY(-50%);
  z-index: -10000;
  content: "";
  width: 150vw;
  height: 100%;
  padding: 50px 0;
  background: #1a1a1a;
}

#work .linker a {
  color: #fff;
  border-color: #fff;
}

#main-works {
  margin: 70px 0 150px 0;
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

.main-work:nth-child(2) {
  flex-direction: row-reverse;
}

.main-work:nth-child(2) .work-image {
  margin-right: 0;
  margin-left: 50px;
}

.main-work:nth-child(2) .overview {
  transform: translateX(0px);
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
}

.reference > .extarnal-link > ul > li {
  margin-left: 20px;
  font-size: 1.4em;
}

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
  background: #fff;
}

#article {
}

#posts {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px 0;
}

.post {
  position: relative;
  width: 270px;
  height: 100%;
  margin: 20px 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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

#contact {
  position: relative;
}

#contact:after {
  position: absolute;
  top: 50%;
  left: -60%;
  transform: rotate(-5deg) translateY(-50%);
  z-index: -10000;
  content: "";
  width: 150vw;
  height: 100%;
  padding: 50px 0;
  background: #1a1a1a;
}

#contact a {
  color: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  font-size: 1em;
  padding: 15px 30px;
  margin: 40px;
}

footer {
  font-size: 0.8em;
  margin: 0;
  padding: 2px;
  background: #212121;
}
footer p {
  color: darkgray;
}

</style>

