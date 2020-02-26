<template>
  <transition appear>
    <div v-if="show" class="admin">
      <section id="login">
        <img src="./../../assets/breath-logo.png" alt="" />
        <h2>Sign In</h2>
        <p>管理者アカウントを使用します。</p>
        <div id="form">
          <input
            v-model="username"
            type="username"
            name=""
            id="id"
            placeholder="UserName"
          />
          <input
            v-model="password"
            type="password"
            name=""
            id="password"
            placeholder="Password"
          />
        </div>
        <button @click="signIn" id="submit">Sign in</button>
      </section>
    </div>
  </transition>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignIn",
  data: function() {
    return {
      show: true,
      username: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          () => {
            this.$router.push("/editor")
          },
          err => {
            alert(err.message)
          }
        )
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.admin {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 400px;
  padding: 40px 0;
}
#login img {
  width: 30px;
}
#login h2 {
  font-family: milibus;
  font-size: 2em;
  margin: 20px 0 10px 0;
}
#login p {
  font-size: 0.9em;
  color: gray;
}
#login #form {
  margin: 40px 0;
}
#login input {
  display: block;
  width: 60%;
  margin: 20px auto;
  padding: 10px;
  font-size: 1em;
}
#login #submit {
  cursor: pointer;
  width: fit-content;
  padding: 10px 40px;
  border-style: none;
  border: 1px solid gray;
  transition: all 0.3s;
  background: #1a1a1a;
  color: #fff;
}
#login #submit:hover {
  transition: all 0.3s;
  background: rgba(49, 49, 49, 0.7);
}
</style>
