<template>
  <section id="experience">
    <h2 class="content-title">02. Experience</h2>
    <div id="career">
      <div id="career-list">
        <ul>
          <li
            v-for="(career, index) in this.careerDataList"
            v-bind:key="index"
            v-on:click="ChangeCareer(index)"
          >{{ career.title }}</li>
        </ul>
      </div>
      <div id="career-detail">
        <div id="detail-title">
          <h3 class="company">{{ this.careerDataList[selectedCareerId].title }}</h3>
          <p
            class="period"
          >{{ this.careerDataList[selectedCareerId].start_date }} ~ {{ this.careerDataList[selectedCareerId].end_date }}</p>
        </div>
        <h4 class="position">{{ this.careerDataList[selectedCareerId].position }}</h4>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p>テキストテキストテキストテキストテキストテキストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキテキストテキスト</p>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ</p>
        <div class="linker">
          <a class="main-linker" :href="this.careerDataList[selectedCareerId].report_url">LEARN MORE</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data: function() {
    return {
      selectedCareerId: 0,
      careerDataList: [
        {
          title: "DMM.com LLC.",
          start_date: "Feb, 2019",
          end_date: "Mar, 2019",
          position: "Software Engineer Intern (iOS)",
          description: [],
          report_url: ""
        },
        {
          title: "CyberAgent inc.",
          start_date: "Feb, 2019",
          end_date: "Mar, 2019",
          position: "Software Engineer Intern (iOS)",
          description: [],
          report_url: ""
        },
        {
          title: "Yahoo!JAPAN inc.",
          start_date: "Feb, 2019",
          end_date: "Mar, 2019",
          position: "Software Engineer Intern (iOS)",
          description: [],
          report_url: ""
        },
        {
          title: "Life is Tech! inc.",
          start_date: "Feb, 2019",
          end_date: "Mar, 2019",
          position: "Software Engineer Intern (iOS)",
          description: [],
          report_url: ""
        }
      ]
    };
  },
  props: {},
  methods: {
    ChangeCareer: function(careerId) {
      this.selectedCareerId = careerId;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@for $i from 1 through 3 {
  #experience #career > *:nth-child(#{$i}) {
    -webkit-animation: fade-in 0.8s forwards;
    animation: fade-in 0.8s forwards;
    animation-delay: #{130ms * $i};
  }
}

#experience #career > * {
  opacity: 0;
}

#experience h2.content-title:before {
  left: 50%;
  transform: translateX(-50%);
}

#career {
  display: flex;
  justify-content: center;
}

#career-list {
  text-align: left;
  margin-right: 20px;
  font-size: 1em;
}

#career-list ul {
  width: 200px;
  height: 400px;
  margin: 0;
  border-left: 2px solid lightgray;
  overflow: scroll;
}

#career-list ul li {
  cursor: pointer;
  position: relative;
  padding: 15px 20px;
  color: #fff;
  transition: all 0.3s;
}

#career-list ul li:hover {
  transform: translateX(15px) scale(1.05);
  transition: all 0.3s;
}

#career-detail {
  width: 500px;
  height: 400px;
  padding: 30px 25px;
  text-align: left;
  background: rgba(53, 60, 72, 1);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.75);
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
  background: rgba(255, 255, 255, 1);
}

#career-detail #detail-title h3.company,
#career-detail #detail-title p.period {
  margin: 0;
}
#career-detail #detail-title p.period {
  font-size: 0.9em;
  font-weight: 400;
}

#career-detail .position {
  font-weight: 500;
  color: rgba(61, 219, 255, 1);
}

#career-detail > p {
  line-height: 1.9em;
  font-size: 0.75em;
  margin-left: 15px;
  position: relative;
}

#career-detail > p::before {
  position: absolute;
  top: 0;
  left: -18px;
  content: "▶︎";
  color: rgba(61, 219, 255, 1);
}
</style>
