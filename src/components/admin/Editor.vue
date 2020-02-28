<template>
  <div class="editor">
    <div id="editor-left">
      <div id="cms-logo">
        <p>Breath CMS</p>
        <!-- <img src="../../assets/breath-cms-logo.png" alt=""> -->
      </div>
      <div id="profile">
        <img src="../../assets/profile-light.png" alt />
        <p id="user-name">Shunsuke Nakao</p>
        <button @click="logOut">
          <i class="fas fa-sign-out-alt"></i>Sign out
        </button>
      </div>
      <div class="edit-menu">
        <p>Main</p>
        <ul>
          <li>
            <router-link to="/editor/dashboard">
              <i class="fas fa-poll"></i>Dashboard
            </router-link>
          </li>
        </ul>
      </div>
      <div class="edit-menu">
        <p>Editor</p>
        <ul>
          <li>
            <router-link to="/editor/profile">
              <i class="fas fa-user-circle"></i>Profile
            </router-link>
          </li>
          <li>
            <router-link to="/editor/experiences">
              <i class="fas fa-code-branch"></i>Experience
            </router-link>
          </li>
          <li>
            <router-link to="/editor/works">
              <i class="fas fa-paperclip"></i>Works
            </router-link>
          </li>
          <li>
            <router-link to="/editor/settings">
              <i class="fas fa-cog"></i>Setting
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="editor-right">
      <div id="header">
        <div id="header-left">
          <button id="notification">
            <i class="fas fa-bell"></i>
          </button>
          <button id="editing-site">manimani-site</button>
        </div>
        <div id="header-right">
          <input id="search-bar" type="text" />
        </div>
      </div>
      <div id="editor-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "editor",
  methods: {
    logOut: function() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          this.$router.push("/signin");
        });
    }
  },
  props: {
    msg: String
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.9);
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.9em;
  font-family: milibus;
}

.editor {
  width: 100%;
  min-height: 100vh;
  display: flex;
  font-family: milibus;
  background: rgba(25, 26, 36, 1);
}

#editor-left {
  position: fixed;
  width: 220px;
  height: 100vh;
  /* box-shadow: 0px 4px 32px rgba(4 , 4, 6, 0.8); */
  background: rgba(35, 37, 51, 1);
  overflow: scroll;
}

#editor-left #cms-logo {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background: gray;
}
#editor-left #cms-logo p {
  margin: 0;
}

#editor-left i {
  width: 20px;
  line-height: 25px;
  margin-right: 10px;
  font-size: 1.1em;
}

#editor-left #profile {
  width: 150px;
  margin: 25px auto;
  text-align: center;
}

#editor-left #profile #user-name {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
}

#editor-left #profile img {
  width: 70px;
  border-radius: 50%;
}

#editor-left #profile button {
  border-radius: 3px;
  margin-top: 25px;
  padding: 12px 25px;
  background: rgba(255, 87, 185, 1);
  background: linear-gradient(
    90deg,
    rgba(255, 87, 185, 1) 0%,
    rgba(167, 4, 253, 1) 100%
  );
  transition: all 0.3s;
}

#editor-left .edit-menu {
  text-align: left;
}

#editor-left .edit-menu > p {
  margin: 0;
  padding: 10px 35px;
  font-size: 0.75em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
}

#editor-left .edit-menu ul {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  color: rgba(255, 255, 255, 0.7);
}

#editor-left .edit-menu ul li a {
  position: relative;
  display: block;
  padding: 12px 35px;
  font-size: 0.9em;
  font-weight: 100;
  text-decoration: none;
  transition: all 0.3s;
}
#editor-left .edit-menu ul li a:after {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  content: "\f054";
  font-size: 0.8em;
  font-weight: 900;
  font-family: "Font Awesome 5 Free";
}

#editor-left .edit-menu ul li a:hover {
  background: rgba(66, 69, 96, 1);
  transition: all 0.3s;
}

#editor-right {
  width: 100%;
  height: 100%;
  margin-left: 220px;
}

#editor-right #header {
  position: fixed;
  z-index: 100;
  width: calc(100% - 220px);
  height: 50px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgb(25, 113, 205);
}

#editor-right #header #header-left #notification {
  margin-right: 30px;
  font-size: 1.4em;
}

#editor-right #header #header-left #editing-site {
  color: rgba(255, 255, 255, 0.9);
}

#editor-right #header #header-right #search-bar {
  width: 200px;
  line-height: 30px;
  padding: 0 15px;
  border: none;
  border-radius: 15px;
  font-size: 0.8em;
  background: rgba(255, 255, 255, 0.6);
}

#editor-right #editor-content {
  margin: 80px 30px 30px 30px;
  overflow: scroll;
}

#editor-right #editor-content section {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  background: rgba(25, 26, 36, 1);
}
</style>

