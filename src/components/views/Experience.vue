<template>
  <div id="career-detail">
    <div id="detail-title">
      <h3>{{ this.title }}</h3>
      <p>{{ this.start_date }} ~ {{ this.end_date }}</p>
    </div>
    <h4>{{ position }}</h4>
    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    <p>テキストテキストテキストテキストテキストテキストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキテキストテキスト</p>
    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ</p>
    <div class="linker">
      <a :href="this.report_url">View the Report</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  props: {
    title: String,
    start_date: String,
    end_date: String,
    position: String,
    descriptions: [String],
    report_url: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

#career-detail {
  width: 500px;
  height: 400px;
  padding: 30px 25px;
  text-align: left;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#career-detail #detail-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}

#career-detail #detail-title:after {
  position: absolute;
  bottom: -15px;
  left: 0;
  content: "";
  width: 100%;
  height: 3px;
  background: #1a1a1a;
}

#career-detail #detail-title h3,
#career-detail #detail-title p {
  font-family: "milibus";
  margin: 0;
}
#career-detail #detail-title h3 {
  font-size: 1.4em;
}
#career-detail #detail-title p {
  font-size: 0.9em;
  font-weight: 100;
  color: gray;
}

#career-detail > p {
  color: gray;
  line-height: 1.9em;
  font-size: 0.75em;
  margin-left: 15px;
  position: relative;
}

#career-detail > p::before {
  position: absolute;
  top: 0;
  left: -18px;
  content: "▷";
  color: #1a1a1a;
}
</style>
