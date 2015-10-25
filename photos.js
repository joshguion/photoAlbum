var allPhotoAlbums = [
   {
    photo1: "images/photo1.jpg",
    photo2: "images/photo2.jpg",
    photo3: "images/photo3.jpg"
  },
  {
    photo1: "images/photo4.jpg",
    photo2: "images/photo5.jpg",
    photo3: "images/photo6.jpg"
  },
  {
    photo1: "images/photo7.jpg",
    photo2: "images/photo8.jpg",
    photo3: "images/photo9.jpg"
  },
  {
    photo1: "images/photo10.jpg",
    photo2: "images/photo11.jpg",
    photo3: "images/photo12.jpg"
  },
  {
    photo1: "images/photo13.jpg",
    photo2: "images/photo14.jpg",
    photo3: "images/photo15.jpg"
  },
  {
    photo1: "images/photo16.jpg",
    photo2: "images/photo17.jpg",
    photo3: "images/photo18.jpg"
  }
];


$(document).ready(function(){

var albumVar = _.template($('#albumTmpl').html());
var albumStr = '';

_.each(allPhotoAlbums, function(currElem, idx, arr){
  albumStr += albumVar(currElem);

  $('.myAlbums').html(albumStr);

});


var otherAlbums = [
  { photo: "images/photo1.jpg"},
  { photo: "images/photo2.jpg" },
  { photo: "images/photo3.jpg"}
];

var photos = otherAlbums.forEach(function(el) {
  $('.photosView1').append("<img src='" + el.photo + "'>");

});

var otherAlbums2 = [
  { photo: "images/photo4.jpg"},
  { photo: "images/photo5.jpg" },
  { photo: "images/photo6.jpg"}
];

var photos2 = otherAlbums2.forEach(function(el) {
  $('.photosView2').append("<img src='" + el.photo + "'>");

});
var otherAlbums3 = [
  { photo: "images/photo4.jpg"},
  { photo: "images/photo5.jpg" },
  { photo: "images/photo6.jpg"}
];

var photos3 = otherAlbums2.forEach(function(el) {
  $('.photosView3').append("<img src='" + el.photo + "'>");

});
var otherAlbums4 = [
  { photo: "images/photo4.jpg"},
  { photo: "images/photo5.jpg" },
  { photo: "images/photo6.jpg"}
];

var photos4 = otherAlbums2.forEach(function(el) {
  $('.photosView4').append("<img src='" + el.photo + "'>");

});
var otherAlbums5 = [
  { photo: "images/photo4.jpg"},
  { photo: "images/photo5.jpg" },
  { photo: "images/photo6.jpg"}
];

var photos5 = otherAlbums2.forEach(function(el) {
  $('.photosView5').append("<img src='" + el.photo + "'>");

});
var otherAlbums6 = [
  { photo: "images/photo4.jpg"},
  { photo: "images/photo5.jpg" },
  { photo: "images/photo6.jpg"}
];

var photos6 = otherAlbums2.forEach(function(el) {
  $('.photosView6').append("<img src='" + el.photo + "'>");

});






});
