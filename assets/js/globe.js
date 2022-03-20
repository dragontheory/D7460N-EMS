var width = 1000,
    height = 1000,
    speed = -2e-3,
    start = Date.now();

var sphere = {type: "Sphere"};

var projection = d3.geo.orthographic()
    .scale(width / 2.1)
    .translate([width / 2, height / 2])
    .precision(.5);

var graticule = d3.geo.graticule();

var canvas = d3.select("body").append("canvas")
    .attr("width", width)
    .attr("height", height);

var context = canvas.node().getContext("2d");

var path = d3.geo.path()
    .projection(projection)
    .context(context);

d3.json("https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/world-110m.json", function(error, topo) {
  if (error) throw error;

  var land = topojson.feature(topo, topo.objects.land),
      grid = graticule();

  d3.timer(function() {
    context.clearRect(0, 0, width, height);

    projection.rotate([speed * (Date.now() - start), -15]).clipAngle(90);

    context.beginPath();
    path(sphere);
    context.lineWidth = 0;
    context.strokeStyle = "rgba(102,175,233,1)";
    context.stroke();
    context.fillStyle = "rgba(102,175,233,0.0)";
    context.fill();

    projection.clipAngle(180);

    context.beginPath();
    path(land);
    context.fillStyle = "rgba(102,175,233,0.04)";
    context.fill();

    context.beginPath();
    path(grid);
    context.lineWidth = .5;
    context.strokeStyle = "rgba(102,175,233,0.3)";
    context.stroke();

    projection.clipAngle(90);

    context.beginPath();
    path(land);
    context.fillStyle = "rgba(102,175,233,0.1)";
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = "transparent";
    context.stroke();
  });
});

d3.select(self.frameElement).style("height", height + "px");