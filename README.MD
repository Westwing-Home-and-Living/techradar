# Westwing tech radar 

At [Westwing](http://westwing.com), we maintain a [public Tech
Radar](https://westwing-home-and-living.github.io/techradar/) to help our engineering teams
align on technology choices. It is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains the code to generate the visualization:
[`radar.js`](https://github.com/Westwing-Home-and-Living/techradar/blob/main/radar.js) (based on [d3.js v4](https://d3js.org)).
Feel free to use and adapt it for your own purposes.

All the radar's points are coming from a public [gSheet](https://docs.google.com/spreadsheets/d/1qxqDFvSeZvmaHd5MNnJ-JiDcmUTXilXjCm9xfJe03EM/edit#gid=0) and to trigger a refresh you only need to run the  "Rebuild points and publish" action. 


The action is also triggered from any merge to the main branch. 


So, please **don't commit changes to points.js** since it will be automatically overwritten (and pushed) from the action. 

This solution is based on the original [Zalando tech radar](https://github.com/zalando/tech-radar)  
```