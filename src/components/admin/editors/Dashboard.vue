<template>
  <div class="dashboard">
    <section id="detail-analytics">
      <div id class></div>
      <div id class></div>
      <div id class></div>
      <div id class></div>
    </section>
    <section id="insights">
      <h3>
        <i class="fas fa-chart-bar"></i>Insights
      </h3>
      <div id="insight-inner">
        <canvas id="insight-chart"></canvas>
      </div>
    </section>
    <section id="device-analytics">
      <div class="clip-board">
				<i class="fas fa-mobile-alt"></i>
        <h3>Device Analytics</h3>
				<p>Febrary 2020</p>
      </div>
      <p id="increased-device">5%</p>
      <div id="device-inner">
        <canvas id="device-chart"></canvas>
      </div>
    </section>
    <section id="user-analytics">
      <h3>
        <i class="fas fa-chart-pie"></i>User Analytics
      </h3>
      <div id="user-sex-inner">
				<canvas id="user-sex-chart"></canvas>
			</div>
      <div id="user-type-inner">
				<canvas id="user-type-chart"></canvas>
			</div>
    </section>
    <section id="page-traffics">
      <h3>
        <i class="fas fa-map-signs"></i>Page Traffics
      </h3>
    </section>
		<section id="recent-comments">
      <h3>
        <i class="fas fa-comments"></i>Recent Comments
      </h3>
			<div class="section-inner">
				<article class="share-comment">
					<div class="user-img">
						<img src="../../../assets/profile-light.png" alt="">
					</div>
					<div class="share-data">
						<h4>UserName</h4>
						<p>textetxtetxtetxtetxtetx</p>
						<ul>
							<li class="comment-twitter">Twitter</li>
							<li>PM18:09 Feb 2020</li>
						</ul>
					</div>
				</article>
			</div>
    </section>
    <section id="develop-activities">
      <h3>
        <i class="fas fa-code-branch"></i>Develop Activities
      </h3>
    </section>
  </div>
</template>

<script>
import chart from "chart.js";

const drawCircleChart = function() {
  var ctx = document.getElementById("device-chart").getContext("2d");

  new chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "Desktop",
        "Mobile",
        "Tablet"
        // "Windows",
        // "Macintosh",
        // "Android",
        // "iPhone",
        // "iPad",
        // "OtherDesktop",
        // "OtherMobile",
        // "OtherTablet",
      ],
      datasets: [
        {
          data: [30, 15, 5],
          borderWidth: [5, 5, 5],
          borderColor: [
            "rgba(39, 211, 202, 1)",
            "rgba(39, 211, 202, 1)",
            "rgba(39, 211, 202, 1)"
          ],
          backgroundColor: [
            "rgba(25, 94, 101, 1)",
            "rgba(36, 163, 183, 1)",
            "rgba(236, 240, 235, 1)"
          ]
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          fontColor: "rgba(255, 255, 255, 0.9)",
          fontFamily: "milibus"
        }
      },
      // Responsives
      responsive: true,
      maintainAspectRatio: false,
      // Animations
      animation: {
        animateRotate: true,
        animateScale: true
      }
    }
  });
};

const drawLinearChart = function() {
  var ctx = document.getElementById("insight-chart").getContext("2d");

  var gradientStroke = ctx.createLinearGradient(0, 0, 0, 500);
  gradientStroke.addColorStop(0, "rgba(255, 87, 185, 0.8)");
  gradientStroke.addColorStop(1, "rgba(255, 87, 185, 0)");

  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 500);
  gradientStroke2.addColorStop(0, "rgba(74, 160, 255, 0.8)");
  gradientStroke2.addColorStop(1, "rgba(74, 160, 255, 0)");

  new chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Apr, 2019",
        "May, 2019",
        "Jun, 2019",
        "Jul, 2019",
        "Aug, 2019",
        "Sep, 2019",
        "Oct, 2019",
        "Nov, 2019",
        "Dec, 2019",
        "Jan, 2020"
      ],
      datasets: [
        {
          label: "Page View",
          data: [3, 34, 17, 100, 24, 15, 342, 95, 18, 72],
          fill: 1,
          backgroundColor: gradientStroke,
          borderColor: "rgba(255, 87, 185, 1)",
          pointRadius: 4,
          pointHoverRadius: 12,
          pointHoverBorderWidth: 3,
          pointBackgroundColor: "rgba(255, 255, 255, 0.9)",
          lineTension: 0.3
        },
        {
          label: "Unique User",
          data: [1, 20, 10, 70, 14, 5, 242, 65, 8, 52],
          fill: "origin",
          backgroundColor: gradientStroke2,
          borderColor: "rgba(74, 160, 255, 1)",
          pointRadius: 4,
          pointHoverRadius: 12,
          pointHoverBorderWidth: 3,
          pointBackgroundColor: "rgba(255, 255, 255, 0.9)",
          lineTension: 0.3
        }
      ]
    },
    options: {
      // Global legend Setting
      legend: {
        display: true,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          fontColor: "rgba(255, 255, 255, 0.9)",
          fontFamily: "milibus"
        }
      },
      // Responsives
      responsive: true,
			maintainAspectRatio: false,
			// Animations
			animation: {},
      // Graph Grids & Labels Style
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(255,255,255, 0.1)"
            },
            ticks: {
              fontFamily: "milibus",
              fontColor: "rgba(255,255,255, 0.6)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(255,255,255, 0.1)"
            },
            ticks: {
              fontFamily: "milibus",
              fontColor: "rgba(255,255,255, 0.6)",
              suggestedMax: 40,
              suggestedMin: 0,
              stepSize: 40,
              callback: function(value) {
                return value;
              }
            }
          }
        ]
      }
    }
  });
};

const drawDonutChart = function() {
	var ctx = document.getElementById("user-sex-chart").getContext("2d");

	new chart(ctx, {
		type: "doughnut",
		data: {
			labels: [
				"Male",
				"Female"
			],
			datasets: [
				{
					data: [30, 20],
					borderWidth: 5,
					borderColor: [
						"rgba(47, 49, 68, 1)",
						"rgba(47, 49, 68, 1)"
					],
					backgroundColor: [
						"rgba(74, 160, 255, 1)",
						"rgba(255, 87, 185, 1)"
					]
				}
			]
		},
		options: {
			legend: {
        display: true,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          fontColor: "rgba(255, 255, 255, 0.9)",
          fontFamily: "milibus"
        }
      },
			// Responsives
      responsive: true,
      maintainAspectRatio: false,
		},
	})
};

export default {
  name: "Dashboard",
  mounted: function() {
    drawLinearChart();
		drawCircleChart();
		drawDonutChart();
  }
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
}
a {
  color: #42b983;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1em;
  font-family: milibus;
}

.dashboard {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.dashboard section {
  margin-bottom: 30px;
  padding: 10px 30px 30px 30px;
  border-radius: 5px;
  background: rgba(35, 37, 51, 1);
}

.dashboard section .clip-board {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
	flex-direction: column;
	margin: 15px 0;
  width: 100%;
  height: 50px;
}

.dashboard section h3 i {
  margin-right: 15px;
}

.dashboard .clip-board i {
  display: inline-block;
  margin-right: 15px;
  width: 35px;
  line-height: 35px;
  font-size: 35px;
}
.dashboard .clip-board h3 {
  display: inline-block;
  margin: 0;
  line-height: 30px;
  font-size: 1.2em;
}
.dashboard .clip-board p {
  display: inline-block;
  margin: 0;
  line-height: 20px;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.6);
}

.dashboard #insights {
  width: calc(70% - 20px);
  height: 500px;
}

#insights #insight-inner {
  position: relative;
  width: 100%;
  height: 400px;
}

.dashboard #device-analytics {
  width: calc(30% - 20px);
  height: 500px;
  background: rgba(39, 211, 202, 1);
}

#device-analytics #increased-device {
  font-size: 2em;
}

#device-analytics #device-inner {
  position: relative;
  width: 100%;
  height: 60%;
}

.dashboard #detail-analytics {
  width: 100%;
  height: 200px;
}


.dashboard #recent-comments,
.dashboard #develop-activities {
  width: calc(50% - 20px);
  height: 500px;
}

.dashboard #user-analytics {
	width: calc(30% - 20px);
  height: 500px;
}

.dashboard #page-traffics {
	width: calc(70% - 20px);
  height: 500px;
}

#user-analytics #user-sex-inner {
	width: 100%;
  height: 50%;
}

#recent-comments .share-comment {
	display: flex;
	padding: 20px 0;
	width: 100%;
	height: 100%;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.share-comment .user-img {
	margin-right: 15px;
}

.share-comment .user-img img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}

.share-comment .share-data {
	display: block;
	width: 100%;
	height: 100%;
}

.share-comment .share-data h4 {
	margin: 0;
}

.share-comment .share-data p {
	font-size: 0.8em;
	color: rgba(255, 255, 255, 0.6);
}

.share-comment .share-data ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 0.8em;
	font-weight: 100;
	color: rgba(255, 255, 255, 0.6);
}

.comment-twitter {
	padding: 2px 20px;
	border-radius: 2px;
	color: rgba(0, 0, 0, 0.6);
	background: rgba(255, 255, 255, 1);
}

</style>
