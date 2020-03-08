<template>
  <section id="profile">
    <div id="profile-left">
      <div id="profile-image">
        <img :src="this.profileData.mainImageUrl" />
        <img :src="this.profileData.subImageUrl" />
      </div>
      <div class="linker">
        <a class="sub-linker" :href="this.profileData.resumeUrl">RESUME</a>
      </div>
    </div>
    <div id="profile-right">
      <h2 class="content-title">01. Profile</h2>
      <p id="position">{{ this.profileData.position }}</p>
      <h3 id="name">{{ this.profileData.name }}</h3>
      <ul>
        <li>
          <i class="fas fa-university"></i>
          {{ this.profileData.organization }}
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          {{ this.profileData.location }}
        </li>
      </ul>
      <div id="skills">
        <!-- <h4>Programming Language
          <button>
            <i class="fas fa-chevron-circle-down"></i>
          </button>
        </h4>-->
        <ul>
          <li v-for="(skill, key) in this.profileData.skills" :key="key">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-level">{{ skill.level }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      profileData: {
        mainImageUrl: require("../..//assets/profile-light.png"),
        subImageUrl: require("../../assets/apple.jpg"),
        resumeUrl: "",
        name: "mani / Shunsuke Nakao",
        position: "Software Engineer iOS/AR",
        organization: "Fukuoka University",
        location: "Fukuoka, Japan",
        skills: [
          { name: "Swift", level: "★★★★★" },
          { name: "Swift", level: "★★★★★" },
          { name: "Swift", level: "★★★★★" },
          { name: "Swift", level: "★★★★★" },
          { name: "Swift", level: "★★★★★" }
        ]
      }
    };
  },
  props: {},
  methods: {
    // fadeIn: function() {
    //   if (this.isAppeared) {
    //     return;
    //   }
    //   var windowHight = window.innerHeight;
    //   var offsetTop = this.$el.getBoundingClientRect().top;
    //   var focusY = offsetTop - windowHight;
    //   if (focusY < 0) {
    //     this.isAppeared = true;
    //     return;
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 20 {
  #profile *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

#profile * {
  opacity: 0;
}

#profile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
}

#profile-left {
  margin-right: 50px;
}

#profile-image {
  position: relative;
  margin-bottom: 50px;
}

#profile-image img {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.75);
  border-radius: 50%;
}

#profile-image img:first-child {
  width: 280px;
  height: 280px;
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
  text-align: left;
}

#profile-right > ul {
  display: flex;
  color: lightgray;
}
#profile-right > ul li {
  font-weight: 400;
  margin-right: 15px;
}
#profile-right > ul li i {
  margin-right: 8px;
}

#profile-right #name {
  position: relative;
  font-size: 2.6em;
  font-weight: 900;
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

#profile #position {
  font-weight: 400;
}

#profile #skills {
  width: 400px;
  margin-top: 40px;
  position: relative;
}

/* #profile #skills h4 {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
} */

#profile #skills ul {
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin-right: 15px;
  color: lightgray;
}

#profile #skills ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin: 6px 10px 6px 0;
}

#profile #skills ul li span.skill-name {
  color: rgba(255, 255, 255, 1);
}

#profile #skills ul li span.skill-level {
  color: rgba(61, 219, 255, 1);
}
</style>
