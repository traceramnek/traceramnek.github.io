
/* Kwan Holloway, August 2016
* Test Website jQuery
* 
*/

$(document).ready(function () { // load on opening of html page, JQUERY START

    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var headerHgt = $('.header').height();
    var abtHgt = $('.AboutSection').height();
    var abtHgtReg = $('.AboutSection').height();
    var abtHgtALT = $('.AboutSection').height() - $('.ExtraBio').height();
    var jumbHgt = $('.jumbotron').height();
    var artHgt = $('.ArtworkSection').height();
    var projHgt = $('.ProjectsSection').height();
    var topBtnOffset = 230;
    var fadeTime = 300;
    var duration = 300;
    var ExtraBioVisible = false;
    var OtherExpVisible = false;
    //used to disable parralax on mobile devices
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  
  
    $('.promoIMG').mouseenter(function(){ // when mouse enters #promoIMG
        $(this).css('opacity',1); // change opacity
    });

    $('.promoIMG').mouseleave(function(){ //when mouse leaves #promoIMG
        $(this).css('opacity',0.75); // change opacity
    });
  
    $('.ToTopButton').click(function() { // animate back to top if pressed
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
    

    $('.jumbotron').hover(function(){ // when the mouse hovers in and out
    	//when mouse enters
    	$('#worksButton, #projButton').fadeTo('fast',1); //show the buttons
    } , 
    function() {
    	//when mouse leaves
    	$('#worksButton, #projButton').fadeTo('fast',0.5); // hide the buttons
    } );

    $("#AbtButton").click(function() { // smooth scroll to aboutSect
        $('html, body').animate({
          scrollTop: $("#aboutSect").offset().top
        }, 2000);
    });
    $("#ArtButton").click(function() { // smooth scroll to artSect
        $('html, body').animate({
          scrollTop: $("#artSect").offset().top
        }, 2000);
    });
    $("#PrjButton").click(function() { // smooth scroll to projSect
        $('html, body').animate({
          scrollTop: $("#projSect").offset().top
        }, 2000);
    });

    //ADD PARALLAX SCROLLING TO PAGE
    $(window).on('scroll',function(e){
      if(!isMobile){ parallaxScroll(); } // only call if on computer
        
    });
 
    function parallaxScroll(){ // scrolls image when scrolling in jumbotron
      var multiplier = 0.2 // //higher multipier = more image
      //scrolls the image by num pixels + scrollY* multiplier
      $('.blurBG').css('background-position','center -'+( (scrollTop * multiplier) )+'px');
      
    }

    $(window).scroll(function () { // SCROLL START
      
      //Show or hide the To Top Button Arrow
      if (scrollTop > topBtnOffset ) { //show button
			//$('.ToTopButton').fadeTo('fast',1)
          $('.ToTopButton').css('opacity', 1);
      } 
      else { // hide button
			//$('.ToTopButton').fadeTo('fast',0);
            $('.ToTopButton').css('opacity', 0);
      }
      
      //NOTE: (ScrollTop - sectionHgt) gets the size of the div

      //fade out Jumbotron
      $('.jumbotron').css({
        'opacity': ( ( height - scrollTop  ) / ( jumbHgt/3 ) )
      }); 

//      scrollTop = $(window).scrollTop();
//      
//      // change value to correct fading of each section
//      if( ExtraBioVisible ){ 
//          abtHgt = abtHgtReg;
//      }
//      else{
//        abtHgt = abtHgtALT;
//      }
//      //fade out About Section
//      $('.AboutSection').css({
//        'opacity': ( ( height - (scrollTop - abtHgt)  ) / (abtHgt/7) )
//      });
//      
//      // fade out Artwork Section
//      $('.ArtworkSection').css({             //height of abtHgt + artHgt
//        'opacity': ( ( height - (scrollTop - (artHgt) )  ) / (artHgt/3) )
//      }); 
//
//      // fade out Artwork Section
//      $('.ProjectsSection').css({             //height of abtHgt + artHgt
//        'opacity': ( ( height - (scrollTop - (projHgt) )  ) / (projHgt/7) )
//      }); 

//      $(".icon-menu").click(function() {
//          $(".menu").fadeTo("fast",1);
//      });
      
    }); //SCROLL END

    $('.OtherExp, .ExtraBio').hide();
    
    $('.OtherExpTitle').click(function(){ // show OtherExp if clicked
      $('.OtherExp').slideToggle("slow",function(){
        //nothing
      });
      OtherExpVisible = !OtherExpVisible;
      if(OtherExpVisible){ $('.OtherExpTitle').html('Other Experience - Click To Hide'); }
      else{ $('.OtherExpTitle').html('Other Experience - Click To View');}
    });
  
    $('.ExtraBioTitle').click(function(){
      $('.ExtraBio').slideToggle("slow",function(){
        //nothing
      });
      ExtraBioVisible = !ExtraBioVisible;
      if(ExtraBioVisible){ $('.ExtraBioTitle').html('Continued Bio - Click To Hide'); }
      else{ $('.ExtraBioTitle').html('Continued Bio - Click To View');}
      
    });

    // IF USER TYPES BRICK, make BG a brick image
    $('#PassButton').click(function(){ // call function for brick bg
      brickPassword();
    });
  
     
  
      // IF USER TYPES BRICK, make BG a brick image
     function brickPassword(){ // scrolls image when scrolling in jumbotron
        var password = prompt("Secret Passowrd? Enter it:"); // get user password
       
        // show brick bg
        if(password == "brick" || password == 'Brick' || password == 'BRICK'){
          $('html, body').css('background-image','url(Images/BricksWallpaper.jpg)');
        } 
       //return to normal
       if(password == "normal" || password == 'Normal' || password == 'NORMAL'){
          $('html, body').css('background-image','url(Images/NoisyTexture2.png)');
        } 
    }
  
}); //JQUERY END