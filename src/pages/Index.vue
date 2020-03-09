<template>
  <div class="index">
    <header id="menu">
      <div id="menu-left">
        <router-link to="/">
          <img :src="require('../assets/breath-logo.png')" />
        </router-link>
      </div>
      <div id="menu-right">
        <ul>
          <li>
            <router-link to="/profile">Profile</router-link>
          </li>
          <li>
            <router-link to="/experience">Experience</router-link>
          </li>
          <li>
            <router-link to="/work">Work</router-link>
          </li>
          <li>
            <router-link to="/article">Article</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <button id="setting">
              <i class="fas fa-cog"></i>
            </button>
          </li>
        </ul>
      </div>
    </header>
    <div id="sns-buttons">
      <ul>
        <li>
          <a href="#" id="linkedin">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#" id="twitter">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" id="github">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#" id="qiita">
            <i class="fas fa-search"></i>
          </a>
        </li>
        <li>
          <a href="#" id="blog">
            <i class="fas fa-pen-nib"></i>
          </a>
        </li>
      </ul>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data: function() {
    return {
      profileData: {
        mainImageUrl: require("../assets/profile-light.png"),
        subImageUrl: require("../assets/apple.jpg"),
        resumeUrl: "",
        name: "mani / Shunsuke Nakao",
        position: "Software Engineer iOS/AR",
        organization: "Fukuoka University",
        location: "Fukuoka, Japan",
        skills: [
          { name: "swift", level: "★★★★★" },
          { name: "swift", level: "★★★★★" },
          { name: "swift", level: "★★★★★" },
          { name: "swift", level: "★★★★★" },
          { name: "swift", level: "★★★★★" }
        ]
      },
      postsDataList: [
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../assets/noimage.png")
        },
        {
          title: "【Swift5】TableViewの再利用による...【iOS】",
          body:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ...",
          update: "2019.2.19",
          refSite: "Qiita",
          siteUrl: "url",
          imageUrl: require("../assets/noimage.png")
        }
      ],
      externalLinks: []
    };
  }
};
</script>

<style lang="scss">
@for $i from 1 through 6 {
  #menu-right ul li:nth-child(#{$i}) {
    -webkit-animation: fadeInDown 0.8s forwards;
    animation: fadeInDown 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

@for $i from 1 through 5 {
  #sns-buttons ul li:nth-child(#{$i}) {
    -webkit-animation: fadeInRight 0.8s forwards;
    animation: fadeInRight 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
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

body {
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
}

ul {
  padding: 0;
  list-style: none;
  font-weight: 500;
}

h1,
h2,
h3 {
  color: rgba(255, 255, 255, 1);
}

h1 {
  font-size: 4em;
  font-weight: 900;
}

h2 {
  margin: 0;
  font-size: 2.8em;
  font-weight: 900;
}
h3 {
  font-size: 1.6em;
  font-weight: 700;
}
h4 {
  font-size: 1em;
  font-weight: 700;
}

p {
  font-weight: 300;
  font-size: 1em;
  line-height: 2em;
  color: rgba(255, 255, 255, 0.8);
}

button {
  border: none;
  background: none;
  font-size: 1em;
  font-weight: 900;
}

.index {
  font-size: 1em;
  font-family: "Roboto", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: scroll;
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("./../assets/background-logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(30, 34, 41, 1);
}

#menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
}

#menu-left {
  display: flex;
  align-self: center;
}
#menu-left img {
  width: 40px;
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
  opacity: 0;
  transform: translateY(-50px);
}

#menu-right ul li a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  transition: all 0.3s;
}

#menu-right ul li a:hover {
  color: rgba(255, 255, 255, 1);
  transition: all 0.3s;
}

#menu-right ul li a:after {
  position: absolute;
  bottom: -8px;
  left: 0;
  content: "";
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s;
}

#menu-right ul li a:hover:after {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.3s;
}

#menu-right ul li #setting i {
  color: rgba(255, 255, 255, 0.8);
}

#sns-buttons {
  position: fixed;
  bottom: 20px;
  left: 50px;
  font-size: 1.2em;
}

#sns-buttons:before {
  content: "";
  display: inline-block;
  height: 50vh;
  width: 1px;
  background: rgba(255, 255, 255, 0.4);
}

#sns-buttons ul li {
  margin-bottom: 30px;
  opacity: 0;
  transform: translateX(-50px);
}

#sns-buttons ul li a {
  position: relative;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s;
}

#sns-buttons ul li a:hover {
  color: rgba(255, 255, 255, 1);
  transition: all 0.3s;
}

#sns-buttons ul li a:after {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 0.8em;
  opacity: 0;
  transition: all 0.3s;
}
#sns-buttons ul li a:hover:after {
  left: 30px;
  opacity: 1;
  transition: all 0.3s;
}

#sns-buttons ul li a#linkedin:after {
  content: "Linkedin";
}
#sns-buttons ul li a#twitter:after {
  content: "Twitter";
}
#sns-buttons ul li a#github:after {
  content: "GitHub";
}
#sns-buttons ul li a#qiita:after {
  content: "Qiita";
}
#sns-buttons ul li a#blog:after {
  content: "Blog";
}

#container {
  width: 1200px;
  margin: 0px auto;
}

#container section {
  max-width: 1200px;
  margin: 120px auto;
}

#container section#top {
  margin: 100px auto 50px auto;
}

#container section h2.content-title {
  position: relative;
  display: inline-block;
  line-height: 2em;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 1);
  opacity: 0;
  animation: fade-in 0.8s forwards;
}

#container section h2.content-title:before {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  width: 100px;
  height: 6px;
  background: rgba(61, 219, 255, 1);
}

.linker {
  text-align: center;
  margin: 20px 0;
}

.linker a {
  display: inline-block;
  padding: 0 40px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 40px;
  transition: all 0.3s;
}

.linker .main-linker {
  color: rgba(30, 34, 41, 1);
  background: rgba(61, 219, 255, 1);
}

.linker .sub-linker {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(53, 60, 72, 1);
}

.linker a:hover {
  letter-spacing: 3px;
  transition: all 0.3s;
}
.linker .sub-linker:hover {
  color: rgba(61, 219, 255, 1);
}

.contact-button {
  display: inline-block;
  width: 230px;
  line-height: 50px;
  font-size: 1em;
  font-weight: 900;
  text-align: center;
  border-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.75);
  color: rgba(30, 34, 41, 1);
  background: rgba(61, 219, 255, 1);
  transition: all 0.3s;
}

.contact-button:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.9);
  transform: translateY(-5px);
  transition: all 0.3s;
}

.sub-button {
  width: 230px;
  line-height: 50px;
  border-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.75);
  color: rgba(30, 34, 41, 1);
  background: rgba(61, 219, 255, 1);
  transition: all 0.3s;
}
</style>

