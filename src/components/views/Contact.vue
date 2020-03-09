<template>
  <section id="contact">
    <h2 class="content-title">05. Contact</h2>
    <div class="notes">
      <p>
        お仕事に関するご相談・その他のご相談はこちらから。
        <br />Gmail、SNSのDMでも受け付けておりますので、お気軽にご連絡下さい。
      </p>
      <p>
        Please contact me from the button below if you are interested in me.
        <br />I also accept your message by Gmail or DM on Twitter !
      </p>
    </div>
    <div>
      <a class="contact-button" href="mailto:mani.mlife@gmail.com">GET IN TOUCH !</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 3 {
  #contact > *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

#contact > * {
  opacity: 0;
}

#contact .notes {
  margin: 20px 0 60px 0;
}
</style>
