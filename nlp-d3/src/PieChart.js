var canvas = d3.select("body").append("svg")
.attr("width", 500)
.attr("height", 500);
var group = canvas.append("g")
.attr("transform", "translate(200, 200)");
var r = 100;
var p = Math.PI * 2;
var arc = d3.svg.arc()
.innerRadius(r- 20)
.outerRadius(r)
.startAngle(0)
.endAngle(p-8);
group.append("path")
.attr("d", arc);