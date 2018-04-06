/*
$.ajax({
    url: "images/",
    success: function(data){
       $(data).find("a:contains(.jpg)").each(function(){
          var filename = this.href.replace(window.location.host, "").replace("file://", ""); // https
          $("doby").append("<img src='images/" + filename + "'>");
       });
    }
  });
  */
 /*
 function parent() {
    var xmlhttp = new XMLHttpRequest();
   
   xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState == XMLHttpRequest.DONE) {
       if (xmlhttp.status == 200) {
         var n = (xmlhttp.responseText.match(/jpg/g) || []).length;
   
         for (var i = 1; i <= n; i++) {
           var img1 = document.createElement('img');
           img1.src = 'images/' + 'img_' + i + '.jpg';
           document.body.appendChild(img1);
         }
       }
     }
   };
   
   xmlhttp.open("GET", "images/", true);
   xmlhttp.send();
 }*/
 function parent() {
    var n=6;
    for(var i=1; i<=n; i++) {
      var img1 = document.createElement('img');
      img1.src = 'images/img_'+i+'.jpg';
      document.body.appendChild(img1);
    }
  }
