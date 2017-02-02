/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_barra_2} > div:nth-child(5) > img:nth-child(1)": [
            ["transform", "translateY", '400px']
         ],
         "${_barra_2} > div:nth-child(4) > img:nth-child(1)": [
            ["transform", "translateY", '400px']
         ],
         "${_barra_menu}": [
            ["transform", "translateY", '-80px'],
            ["style", "opacity", '0']
         ],
         "${_barra_2} > div:nth-child(2) > img:nth-child(1)": [
            ["transform", "translateY", '400px']
         ],
         "${_Image1}": [
            ["transform", "translateY", '0px'],
            ["style", "opacity", '0']
         ],
         "${_barra_2} > div:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateY", '400px']
         ],
         "${_barra_2} > div:nth-child(3) > img:nth-child(1)": [
            ["transform", "translateY", '400px']
         ],
         "${_topo}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid76", tween: [ "transform", "${_barra_2} > div:nth-child(5) > img:nth-child(1)", "translateY", '0px', { fromValue: '400px'}], position: 1000, duration: 1250, easing: "easeInOutCubic" },
            { id: "eid74", tween: [ "transform", "${_barra_2} > div:nth-child(4) > img:nth-child(1)", "translateY", '0px', { fromValue: '400px'}], position: 1000, duration: 1000, easing: "easeInOutCubic" },
            { id: "eid73", tween: [ "transform", "${_barra_2} > div:nth-child(3) > img:nth-child(1)", "translateY", '0px', { fromValue: '400px'}], position: 1000, duration: 750, easing: "easeInOutCubic" },
            { id: "eid72", tween: [ "transform", "${_barra_2} > div:nth-child(2) > img:nth-child(1)", "translateY", '0px', { fromValue: '400px'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid71", tween: [ "transform", "${_barra_2} > div:nth-child(1) > img:nth-child(1)", "translateY", '0px', { fromValue: '400px'}], position: 1000, duration: 250, easing: "easeInOutCubic" },
            { id: "eid58", tween: [ "style", "${_Image1}", "opacity", '1', { fromValue: '0'}], position: 665, duration: 85 },
            { id: "eid55", tween: [ "transform", "${_barra_menu}", "translateY", '0px', { fromValue: '-80px'}], position: 500, duration: 750, easing: "easeOutBounce" },
            { id: "eid47", tween: [ "style", "${_topo}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1250 },
            { id: "eid59", tween: [ "style", "${_barra_menu}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 248, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "transform", "${_Image1}", "translateY", '0px', { fromValue: '0px'}], position: 1000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-42899827");
