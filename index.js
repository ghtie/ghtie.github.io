var BR = "<br />";

function setup(){
  $("#submitButton").click(postComment);
  $("#submitButton").mouseenter(addBorder);
  $("#submitButton").mouseleave(removeBorder);
}

function addBorder(){
  $(this).addClass("hover");
}
function removeBorder(){
  $(this).removeClass("hover");
}

function postComment(event){
  comment = $("#commentArea").val();
  if (comment != ""){
    $("#commentArea").val("");
    $("#displayComments").append(comment+BR);
  }
  else {

  }



  //selct div, append into p
}
$(document).ready(setup);
