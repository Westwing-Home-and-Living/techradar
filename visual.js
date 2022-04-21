const entries = [];
const rings = [ "Adopt", "Trial", "Assess", "Hold" ];
const quadrants = ["Tools", "Languages & Frameworks", "Infrastructure", "Data"];

// map gsheet points in zradar script points 
points.forEach(point => {
  const temp = {};
  // check inconsintencies in the points 
  if (point.name && rings.indexOf(point.ring) > -1 && 
    quadrants.indexOf(point.quadrant) > -1 && 
    rings.indexOf(point.ring) > -1) {
      temp.label = point.name;
      temp.ring = rings.indexOf(point.ring);
      temp.quadrant = quadrants.indexOf(point.quadrant);
      temp.ring = rings.indexOf(point.ring);
      temp.active = true;
      temp.moved = 0;
      entries.push(temp);       
  }
});


radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1040,
    moveup: 210,
    colors: {
      background: "#fff",
      grid: "#bbb",
      inactive: "#ddd"
    },
    title: "Westwing Tech Radar — 2022.04",
    quadrants: [
      { name: quadrants[0] },
      { name: quadrants[1] },
      { name: quadrants[2] },
      { name: quadrants[3] },
    ],
    rings: [
      { name: rings[0].toUpperCase(), color: "#93c47d" },
      { name: rings[1].toUpperCase(), color: "#93d2c2" },
      { name: rings[2].toUpperCase(), color: "#fbdb84" },
      { name: rings[3].toUpperCase(), color: "#efafa9" }
    ],
    print_layout: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries: entries
    //ENTRIES
  });