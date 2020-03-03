<template>
  <div class="index">
    <Header></Header>
    <SNSButtons></SNSButtons>
    <div id="container">
      <section id="top">
        <h2>manimani.site</h2>
      </section>
      <section id="about">
        <h2 class="section-title-w">About</h2>
        <Profile
          :mainImageUrl="this.profileData.mainImageUrl"
          :subImageUrl="this.profileData.subImageUrl"
          :resumeUrl="this.profileData.resumeUrl"
          :name="this.profileData.name"
          :position="this.profileData.position"
          :organization="this.profileData.organization"
          :location="this.profileData.location"
          :skills="this.profileData.skills"
        ></Profile>
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
          <Experience
            :title="careerData.title"
            :start_date="careerData.start_date"
            :end_date="careerData.end_date"
            :position="careerData.position"
            :description="careerData.description"
            :report_url="careerData.report_url"
          ></Experience>
        </div>
      </section>
      <section id="work">
        <h2 class="section-title-w">Work</h2>
        <div id="main-works">
          <MainWork
            v-for="(work, key) in mainWorkDataList"
            :key="key"
            :title="work.title"
            :sub_title="work.sub_title"
            :description="work.description"
            :tags="work.tags"
            :github_url="work.github_url"
            :appstore_url="work.appstore_url"
            :external_url="work.external_url"
          ></MainWork>
        </div>
        <div id="other-projects">
          <h3 class="section-title-w sub-title">Other Projects</h3>
          <OtherProject
            v-for="(project, key) in otherProjectDataList"
            :key="key"
            :title="project.title"
            :sub_title="project.sub_title"
            :tags="project.tags"
            :github_url="project.github_url"
            :appstore_url="project.appstore_url"
            :external_url="project.external_url"
          ></OtherProject>
          <div class="linker">
            <a href="#">See more</a>
          </div>
        </div>
      </section>
      <section id="article">
        <h2 class="section-title-b">Article</h2>
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
import Header from "@/components/views/Header";
import SNSButtons from "@/components/views/SnsButtons";
import Profile from "@/components/views/Profile";
import Experience from "@/components/views/Experience";
import MainWork from "@/components/views/MainWork";
import OtherProject from "@/components/views/OtherProject";
import Post from "@/components/views/Post.vue";

export default {
  name: "index",
  components: {
    Header,
    SNSButtons,
    Profile,
    MainWork,
    Experience,
    OtherProject,
    Post
  },
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
      careerData: {
        title: "Yahoo!JAPAN inc.",
        start_date: "Feb, 2019",
        end_date: "Mar, 2019",
        position: "Software Engineer Intern (iOS)",
        description: [],
        report_url: ""
      },
      mainWorkDataList: [
        {
          title: "",
          sub_title: "",
          description: "",
          tags: [],
          github_url: "",
          appstore_url: "",
          external_url: ""
        }
      ],
      otherProjectDataList: [
        {
          title: "",
          sub_title: "",
          tags: [],
          github_url: "",
          appstore_url: "",
          external_url: ""
        }
      ],
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
  width: 180px;
  height: 100%;
  margin: 0;
  border-left: 2px solid lightgray;
  overflow: scroll;
}

#career-list ul li {
  cursor: pointer;
  position: relative;
  padding: 15px 20px;
  transition: all 0.3s;
}

#career-list ul li:hover {
  transform: translateX(15px) scale(1.05);
  background: #1a1a1a;
  color: #fff;
  transition: all 0.3s;
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

#posts {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px 0;
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

