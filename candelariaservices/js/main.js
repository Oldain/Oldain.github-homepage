console.log("Connected to javascript...");
var divToHide = document.getElementById("licenseDiv");
divToHide.hidden = "true";
function clickedButton()
{
    divToHide.toggleAttribute("hidden");
}
var imgArray =
    [
    'images/new home 1.jpg',
    'images/new home 2.jpg',
    'images/new home 3.jpg',
    'images/new home 4.jpg'
    ],
    curIndex = 0;
    imgDuration = 5000;
  
  function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function()
        {
            document.getElementById('slider').src = imgArray[curIndex];
            document.getElementById('slider').className = "";
        },1000);
    curIndex++;
    if (curIndex == imgArray.length)
        {
            curIndex = 0;
        }
    setTimeout(slideShow, imgDuration);
  }
slideShow();