$(document).ready(function(){
    $("#lines").mouseenter(function(){
      $("#box1").animate({width: "430px"});
      $("#box2").animate({width: "550px"});
      $("#box3").animate({width: "350px"});
      $("#box4").animate({width: "470px"});
      $(".boxtext").fadeIn(500)
    });
    $("#lines").mouseleave(function(){
      $("#box1").animate({width: "20px"});
      $("#box2").animate({width: "20px"});
      $("#box3").animate({width: "20px"});
      $("#box4").animate({width: "20px"});
      $(".boxtext").fadeOut(500)
    });
});