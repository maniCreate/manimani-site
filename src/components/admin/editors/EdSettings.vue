<template>
  <div class="ed-settings">
    <section id="edit-settings">
      <h3><i class="fas fa-cog"></i>Settings</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "EdSettings"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  margin: 20px 0;
  padding: 10px 30px;
  border-radius: 5px;
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
