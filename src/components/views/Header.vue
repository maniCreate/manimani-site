<template>
  <header id="menu">
    <div id="menu-left">
      <a href="#">
        <img :src="this.logoImageUrl" />
      </a>
    </div>
    <div id="menu-right">
      <transition-group tag="ul" name="drop-menu">
        <li v-for="(item, index) in headerMenu" :key="index" v-html="item"></li>
      </transition-group>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      logoImageUrl: require("../../assets/breath-logo.png"),
      headerMenu: [
        '<a href="#about">About</a>',
        '<a href="#experience">Experience</a>',
        '<a href="#work">Work</a>',
        '<a href="#article">Article</a>',
        '<a href="#contact">Contact</a>',
        '<div id="language"><button type="button">JP</button><button type="button">EN</button></div>'
      ]
    };
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  padding: 10px 60px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-family: milibus;
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
</style>
