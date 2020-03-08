<template>
  <section id="top">
    <div id="left-content">
      <h2>manimani.site</h2>
      <p>
        Hi ! I am a Software Engineer in Tokyo, Japan, specializing in
        developing Mobile App ( iOS/Android ) and AR App.
        Also designing Interactive User Interface and User Experiences occasionally.
      </p>
      <a href="#" class="contact-button">GET IN TOUCH!</a>
    </div>
    <div id="right-content"></div>
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

#right-content {
  width: calc(100% - 600px);
  height: 600px;
  background: gray;
}
</style>
