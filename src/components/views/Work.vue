<template>
  <section id="work">
    <h2 class="content-title">03. Work</h2>
    <div id="main-works">
      <MainWork
        v-for="(work, index) in this.mainWorkDataList"
        :key="work.name"
        :order="index"
        :title="work.title"
        :sub_title="work.sub_title"
        :workImageUrl="work.workImageUrl"
        :description="work.description"
        :tags="work.tags"
        :github_url="work.github_url"
        :appstore_url="work.appstore_url"
        :external_url="work.external_url"
      ></MainWork>
    </div>
    <div id="other-projects">
      <h3>
        <i class="fas fa-folder-open"></i>Other Projects
      </h3>
      <OtherProject></OtherProject>
      <!-- <OtherProject
        v-for="(project, key) in this.otherProjectDataList"
        :key="key"
        :title="project.title"
        :sub_title="project.sub_title"
        :tags="project.tags"
        :github_url="project.github_url"
        :appstore_url="project.appstore_url"
        :external_url="project.external_url"
      ></OtherProject>-->
    </div>
    <div class="linker">
      <a class="sub-linker" href="#">LEARN MORE</a>
    </div>
  </section>
</template>

<script>
import MainWork from "./MainWork";
import OtherProject from "./OtherProject";

export default {
  name: "work",
  components: {
    MainWork,
    OtherProject
  },
  data: function() {
    return {
      mainWorkDataList: [
        {
          title: "Limit",
          sub_title: "Heart shaped lifespan timer",
          workImageUrl: require("../../assets/noimage.png"),
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          tags: ["Swift", "Firebase", "Node.js"],
          github_url: "",
          appstore_url: "",
          external_url: ""
        },
        {
          title: "Limit",
          sub_title: "Heart shaped lifespan timer",
          workImageUrl: require("../../assets/noimage.png"),
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          tags: ["Swift", "Firebase", "Node.js"],
          github_url: "",
          appstore_url: "",
          external_url: ""
        },
        {
          title: "Limit",
          sub_title: "Heart shaped lifespan timer",
          workImageUrl: require("../../assets/noimage.png"),
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          tags: ["Swift", "Firebase", "Node.js"],
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
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 10 {
  #work > *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

#work {
  width: 960px;
}

#work > * {
  opacity: 0;
}

#work #other-projects h3 i.fa-folder-open {
  margin-right: 15px;
}
</style>
