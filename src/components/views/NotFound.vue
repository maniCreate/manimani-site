<template>
  <section id="not-found">
    <h2 class="content-title">404 File not found.</h2>
    <div class="notes">
      <h3>Sorry, the page your looking for cannot be found.</h3>
      <p>
        お探しのページは見つかりませんでした。
        <br />入力されたURLをご確認頂くか、TOPページからアクセスしてください。
      </p>
    </div>
    <div class="linker">
      <router-link class="sub-linker" to="/">BACK TO TOP</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 3 {
  #not-found > *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

#not-found > * {
  opacity: 0;
}

#not-found .notes {
  margin: 20px 0 60px 0;
}
</style>
