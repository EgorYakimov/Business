const helpers = {
   changePictures: function () {
      function changer1 (){
         document.querySelector(".section-1__rect").style.background = "url(img/section-1/img5.jpg)";
         document.querySelector(".section-1__rect").style.transitionDuration = "0.2s";
      }
      function changer2 (){
         document.querySelector(".section-1__rect").style.background = "url(img/section-1/img6.jpg)";
         document.querySelector(".section-1__rect").style.transitionDuration = "0.2s";
      }
      function changer3 (){
         document.querySelector(".section-1__rect").style.background = "url(img/section-1/img7.jpg)";
         document.querySelector(".section-1__rect").style.transitionDuration = "0.2s";
      }
      document.querySelector(".section-1__check-1").addEventListener("click", changer1);
      document.querySelector(".section-1__check-2").addEventListener("click", changer2);
      document.querySelector(".section-1__check-3").addEventListener("click", changer3);
      
   },
   changeSizeBlocks: function changeSizeBlocks(){
   
      let block1 = document.querySelector(".section-4__block1");
      let block2 = document.querySelector(".section-4__block2");
      let block3 = document.querySelector(".section-4__block3");
   
      block1.addEventListener("mouseover", overBlock1);
      block1.addEventListener("mouseout", outBlock1);
   
      function overBlock1(){
         block1.style.width = "395px"
         block1.style.height = "501px"
         block1.style.transitionDuration = "0.3s";
         block1.style.border = "2px solid #ccd5df"
   
         
         block2.style.width = "391px"
         block2.style.height = "441px"
         block2.style.transitionDuration = "0.3s";
      }
      function outBlock1(){
         block1.style.width = "391px"
         block1.style.height = "441px"
         block1.style.transitionDuration = "0.3s";
         block1.style.border = "1px solid #ccd5df"
   
         block2.style.width = "395px"
         block2.style.height = "501px"
         block2.style.transitionDuration = "0.3s";
         
      }
   
      if(block1.type == "mouseover"){
         overBlock1();
         block1.style.transitionDuration = "0.3s";
      }
      else if(block1.type == "mouseout"){
         outBlock1();
         block1.style.transitionDuration = "0.3s";
      }
   
   
      block3.addEventListener("mouseover", overBlock3);
      block3.addEventListener("mouseout", outBlock3);
   
      function overBlock3(){
         block3.style.width = "395px"
         block3.style.height = "501px"
         block3.style.transitionDuration = "0.3s";
         block3.style.border = "2px solid #ccd5df"
         
         block2.style.width = "391px"
         block2.style.height = "441px"
         block2.style.transitionDuration = "0.3s";
         
      }
      function outBlock3(){
         block3.style.width = "391px"
         block3.style.height = "441px"
         block3.style.transitionDuration = "0.3s";
         block3.style.border = "1px solid #ccd5df"
   
         block2.style.width = "395px"
         block2.style.height = "501px"
         block2.style.transitionDuration = "0.3s";
         
      }
   
      if(block3.type == "mouseover"){
         overBlock3();
      }
      else if(block3.type == "mouseout"){
         outBlock3();
      }
   },
}

export const changePictures = helpers.changePictures;
export const changeSizeBlocks = helpers.changeSizeBlocks;