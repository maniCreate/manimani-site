<template>
  <transition-group tag="ul" name="sns-fade" id="sns-buttons">
    <li v-for="(button, index) in snsButtonList" :key="index" v-html="button"></li>
  </transition-group>
</template>

<script>
export default {
  name: "SNSButtons",
  data: function() {
    return {
      snsButtonList: [
        '<a href="#"><i class="fab fa-linkedin-in"></i></a>',
        '<a href="#"><i class="fab fa-twitter"></i></a>',
        '<a href="#"><i class="fab fa-github"></i></a>',
        '<a href="#"><i class="fas fa-search"></i></a>',
        '<a href="#"><i class="fas fa-pen-nib"></i></a>'
      ]
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
