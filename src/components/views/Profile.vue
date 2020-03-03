<template>
  <div id="profile">
    <div id="profile-left">
      <div id="profile-image">
        <img :src="this.mainImageUrl" />
        <img :src="this.subImageUrl" />
      </div>
      <div class="linker">
        <a :href="this.resumeUrl">Resume</a>
      </div>
    </div>
    <div id="profile-right">
      <p>{{ this.position }}</p>
      <h3 id="name">{{ this.name }}</h3>
      <ul>
        <li>
          <i class="fas fa-university"></i>
          {{ this.organization }}
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          {{ this.location }}
        </li>
      </ul>
      <div id="skills">
        <h4>Advanced Skills</h4>
        <ul>
          <li v-for="(skill, key) in this.skills" :key="key"></li>
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
</template>

<script>
export default {
  name: "Profile",
  props: {
    mainImageUrl: String,
    subImageUrl: String,
    resumeUrl: String,
    name: String,
    position: String,
    organization: String,
    location: String,
    skills: []
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
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

#profile #skills {
  width: 400px;
  margin-top: 50px;
  position: relative;
  border-left: 1px solid #fff;
}

#profile #skills h4 {
  display: inline-block;
  padding: 5px 15px;
  font-family: milibus;
  background: #fff;
  color: #1a1a1a;
}

#profile #skills ul {
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0px 0px 0px 15px;
  color: lightgray;
}

#profile #skills ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin: 8px 10px 8px 0;
}
</style>
