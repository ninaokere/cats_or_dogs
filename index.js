function toggleVoteContainer() {
  //find the vote container on webpage
  var voteContainer = document.getElementById ("vote-container");

  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;
  likes = parseInt(likes);
  likes += 1;
  element.innerText = likes;

  var scores = document.getElementsByClassName("score");
  var score = scores[0];
  scores.style.color = "green";

}




 var catImages = ["https://i.pinimg.com/originals/16/61/94/16619430941e11ec9f1d0f08133bd97b.jpg",
 "https://i.pinimg.com/600x315/52/4b/d8/524bd8368c353a1cbbc8e1a400b38acd.jpg",
 "http://s2.favim.com/orig/150328/aesthetic-animal-cat-cute-Favim.com-2599613.jpg"];

 var dogImages = ["https://i.pinimg.com/736x/83/8c/29/838c296fb1403878aa12a57517fbe394.jpg",
 "http://s10.favim.com/orig/160219/aesthetic-cute-dog-pink-Favim.com-4021125.jpg",
"https://img.buzzfeed.com/buzzfeed-static/static/2014-10/29/14/enhanced/webdr05/enhanced-18963-1414605764-16.jpg"];

function changeImage(element) {
  console.log("here");

  var animals =[];

  if(element.id === "cats-carousel") {
    animals = catImages;
  } else {
    animals = dogImages;
  }

  var carousel = document.getElementById(element.id);

  var image = carousel.getElementsByTagName('img')[0];

  var imageUrl = image.getAttribute('src');

  var imageIndex = animals.indexOf(imageUrl);

  if(imageIndex === animals.length - 1){
    imageIndedex = 0;
  } else {
    imageIndex += 1;
  }

  imageUrl = animals[imageIndex];

  image.src = imageUrl;

}
