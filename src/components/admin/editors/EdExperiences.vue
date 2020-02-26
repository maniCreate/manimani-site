<template>
  <div class="ed-experiences">
    <section id="edit-experiences">
      <h3><i class="fas fa-code-branch"></i>Experiences</h3>
      <div id="content" class="flex-box">
        <button id="new-post">
          ＋
        </button>
        <article class="career">
          <h4 class="campany">DMM.com LLC</h4>
          <p class="term">Feb,2019 ~ Mar, 2019</p>
          <p class="position">Engineer</p>
          <p class="report">https://example.com/report</p>
          <button class="career-edit">Edit</button>
        </article>
        <article class="career">
          <h4 class="campany">Cyber Agent inc.</h4>
          <p class="term">Feb,2019 ~ Mar, 2019</p>
          <p class="position">Internship</p>
          <p class="report">https://example.com/report</p>
          <button class="career-edit">Edit</button>
        </article>
        <article class="career">
          <h4 class="campany">Yahoo! JAPAN inc.</h4>
          <p class="term">Feb,2019 ~ Mar, 2019</p>
          <p class="position">KUROOBI&OSS Developer Internship</p>
          <p class="report">https://example.com/report</p>
          <button class="career-edit">Edit</button>
        </article>
        <article class="career">
          <h4 class="campany">Life is Tech! inc.</h4>
          <p class="term">Feb,2019 ~ Mar, 2019</p>
          <p class="position">iOS Dev Instractor</p>
          <p class="report">https://example.com/report</p>
          <button class="career-edit">Edit</button>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EdExperiences"
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

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.9em;
  font-family: milibus;
}

.flex-box {
  display: flex;
  flex-wrap: wrap;
}

.ed-experiences {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ed-experiences section {
  margin: 20px 0;
  padding: 30px;
  border-radius: 5px;
  background: rgba(47, 49, 68, 1);
}

.ed-experiences section h3 {
  margin-top: 0;
}

.ed-experiences section h3 i {
  margin-right: 15px;
}

.ed-experiences #edit-experiences {
  width: 100%;
  height: 100%;
}

#edit-experiences #content > * {
  width: calc(100%/4 - 30px);
  height: 300px;
  margin: 15px;
  padding: 15px;
  background: rgba(255,255,255, 0.2);
}

#edit-experiences #content #new-post {
  border: none;
  border-radius: 5px;
  outline: 2px dashed rgba(255, 255, 255, 0.6);
  outline-offset: -15px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.05);
  font-size: 70px;
}

#edit-experiences #content .career {
  position: relative;
  border-radius: 5px;
}

.career p {
  position: relative;
  font-size: 0.8em;
  font-weight: 100;
  padding-left: 25px;
  color: rgba(255, 255, 255, 0.6);
}

.career .term:before {
  position: absolute;
  left: 0;
  content: "\f784";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
.career .position:before {
  position: absolute;
  left: 0;
  content: "\f500";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}

.career .report:before {
  position: absolute;
  left: 0;
  content: "\f0c6";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}

.career .campany {
  margin: 15px 0;
  padding: 0 0 10px 0;
  font-size: 1.2em;
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
}

.career .career-edit {
  position: absolute;
  bottom: 15px;
  display: block;
  width: calc(100% - 30px);
  line-height: 40px;
  color: rgba(255, 255, 255, 0.9);
  background: #42b983;
}


</style>
