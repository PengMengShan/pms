window.onload = function() {
   var oLoading = $('loading');
   showLoading();
 
   function showLoading() {
      var oSpan = oLoading.getElementsByTagName('span')[0];
      var aDiv = oLoading.getElementsByTagName('div');
      var arr = [ 'arr.png','search.png'];
      var iNow = 0;

      for (var i = 0; i < arr.length; i++) {

         var objImg = new Image();
         objImg.src = 'images/' + arr[i];
         objImg.onload = function() {
            iNow++;
            oSpan.style.width = iNow / arr.length * 100 + '%';
            /*if(iNow == arr.length){
                alert(123);
            }*/
         };

      }
      oSpan.addEventListener('webkitTransitionend', spanChange, false);
      oSpan.addEventListener('transitionend', spanChange, false);

      function spanChange() {
         if (oSpan.style.width == '100%') {
            oSpan.style.display = 'none';
            aDiv[0].style.height = 0;
            aDiv[1].style.height = 0;
         }
      }

      aDiv[0].addEventListener('webkitTransitionend', divChange, false);
      aDiv[0].addEventListener('transitionend', divChange, false);


      function divChange() {
         oLoading.parentNode.removeChild(oLoading);


      }




      //预加载 js css
      /*var bj = document.createElement('object');
      bj.data = 'base.js';
      document.body.appendChild(bj);
      bj.width = 0;
      bj.height = 0;
      bj.onload = function(){
      };*/

   }

   function $(id) {
      return document.getElementById(id);
   }
};
