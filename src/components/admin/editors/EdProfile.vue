<template>
  <div class="ed-profile">
    <section id="edit-profile">
      <h3>
        <i class="fas fa-user-circle"></i>Profile
      </h3>
      <button id="save">Save</button>
      <div id="content" class="flex-box">
        <div id="profile-images">
          <p>Main Image</p>
          <p id="main-image" class="hover-image">
            <img src="../../../assets/noimage.png" alt />
          </p>
          <p>Sub Image</p>
          <p id="sub-image" class="hover-image">
            <img src="../../../assets/apple.jpg" alt />
          </p>
        </div>
        <div id="profile-datas">
          <p>Jobs</p>
          <input type="text" />
          <p>NickName, Name</p>
          <input type="text" />
          <p>Working</p>
          <input type="text" />
          <p>Location</p>
          <input type="text" />
          <p>Resume</p>
          <input type="text" />
        </div>
        <div id="profile-skills">
          <p>Skills</p>
          <input type="text" />
          <ul>
            <li>
              <span class="skill-name">Swift</span>
              <span class="skill-level">★★★★★</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EdProfile"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 1 {
  .ed-profile section:nth-child(#{$i}) {
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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  font-size: 1.1em;
  line-height: 2em;
  padding: 0 10px;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
}

.flex-box {
  display: flex;
  flex-wrap: wrap;
}

.ed-profile {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ed-profile section {
  opacity: 0;
  margin: 20px 0;
  padding: 30px;
  border-radius: 5px;
  text-align: left;
  background: rgba(47, 49, 68, 1);
}

.ed-profile section h3 {
  margin-top: 0;
}

.ed-profile section h3 i {
  margin-right: 15px;
}

.ed-profile #edit-profile {
  width: 100%;
  height: 100%;
}

#edit-profile #content > div {
  margin-right: 50px;
}

#edit-profile #profile-images {
  position: relative;
  width: 250px;
  height: 100%;
}

#edit-profile #profile-images #main-image {
  width: 250px;
  height: 250px;
}

#edit-profile #profile-images #sub-image {
  width: 100px;
  height: 100px;
}

#edit-profile #profile-images .hover-image {
  position: relative;
  border-radius: 5px;
  display: inline-block;
  overflow: hidden;
  transition: all 0.3s;
}

#edit-profile #profile-images .hover-image:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "\f03e";
  display: inline-block;
  font-family: "Font Awesome 5 Free";
  font-size: 70px;
  color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s;
}
#edit-profile #profile-images .hover-image:hover:after {
  opacity: 1;
  transition: all 0.3s;
}

#edit-profile #profile-images .hover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}
#edit-profile #profile-images .hover-image img:hover {
  filter: brightness(1.2);
  transform: scale(1.1);
  transition: all 0.3s;
}

#edit-profile #profile-datas input {
}
</style>
