<template>
  <section id="top">
    <div id="left-content">
      <h2>
        <span>m</span>
        <span>a</span>
        <span>n</span>
        <span>i</span>
        <span>m</span>
        <span>a</span>
        <span>n</span>
        <span>i</span>
        <span>.</span>
        <span>s</span>
        <span>i</span>
        <span>t</span>
        <span>e</span>
      </h2>
      <p>
        Hi ! I am a Software Engineer in Tokyo, Japan, specializing in
        developing Mobile App ( iOS/Android ) and AR App.
        Also designing Interactive User Interface and User Experiences occasionally.
      </p>
      <div>
        <a href="#" class="contact-button">GET IN TOUCH!</a>
      </div>
    </div>
    <div id="right-content">
      <div id="carousels">
        <div id="items">
          
        </div>
        <div id="consoles"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Top",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 13 {
  #left-content h2 > span:nth-child(#{$i}) {
    -webkit-animation: letterFadeIn 0.8s forwards;
    animation: letterFadeIn 0.8s forwards;
    animation-delay: #{80ms * $i};
  }
}

@for $i from 2 through 3 {
  #left-content > *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{250ms * $i + 1300ms};
  }
}

@keyframes letterFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

#top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
}

#left-content {
  width: 520px;
  text-align: left;
}

#left-content h2 {
  position: relative;
  display: inline-block;
  font-size: 5em;
  line-height: 1.5em;
}

#left-content h2 > span {
  display: inline-block;
  opacity: 0;
}

#left-content h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  display: inline-block;
  width: 80%;
  height: 6px;
  background: rgba(61, 219, 255, 1);
}

#left-content p {
  margin: 40px 0;
  font-size: 1.1em;
}

#left-content > *:not(h2) {
  opacity: 0;
}

#right-content {
  width: calc(100% - 600px);
  height: 600px;
  background: gray;
}
</style>
