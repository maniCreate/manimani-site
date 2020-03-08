<template>
  <div class="ed-settings">
    <section id="edit-settings">
      <h3>
        <i class="fas fa-cog"></i>Settings
      </h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "EdSettings"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 1 {
  .ed-settings section:nth-child(#{$i}) {
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

.ed-settings {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ed-settings section {
  opacity: 0;
  margin: 20px 0;
  padding: 10px 30px;
  border-radius: 5px;
  text-align: left;
  background: rgba(47, 49, 68, 1);
}

.ed-settings #edit-settings {
  width: 100%;
  height: 500px;
}

.ed-settings section h3 i {
  margin-right: 15px;
}
</style>
