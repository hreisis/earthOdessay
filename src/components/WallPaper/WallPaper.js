import React from "react"; 
import Box from '@mui/material/Box';

const WallPaper = () => {

  var prettyearthImage = "";
  var prettyearthBaseUrl = "https://www.gstatic.com/prettyearth/assets/full/";
  var prettyearthImgExtension = ".jpg";
  var prettyearthJson =
    "https://raw.githubusercontent.com/adriancooney/prettyearth-wallpapers/master/data/imageIds.json";

  function getLink() {
    loadJSON(function (response) {
      prettyearthImage = JSON.parse(response);
    });

    if (typeof prettyearthImage !== "undefined") {
      var randomId =
        prettyearthImage.ids[
          Math.floor(Math.random() * prettyearthImage.ids.length)
        ];
      var urlParams = new URLSearchParams(window.location.search);

      var imgUrl = prettyearthBaseUrl + randomId + prettyearthImgExtension;

      if (urlParams.has("image")) {
        return(
          '<img src="' + imgUrl + '" alt="' + randomId + '" style="width:100%">'
        );
      } else {
        return(imgUrl);
      } 
    } else {
      console.log("Error loading IDs from JSON-file");
    }
  }
  // Load JSON file locally using pure Javascript
  // Credits: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", prettyearthJson, false);
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 || xobj.status === 200) {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  };

  console.log(getLink());

  return (

        <>
           <Box sx={{ 
            backgroundImage: `url(${getLink()})`,
            backgroundSize: 'cover',
            height: '100vh'}}
            />
        </>

  );
};

export default WallPaper;