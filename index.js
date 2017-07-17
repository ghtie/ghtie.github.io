var BR = "<br />";

function setup(){
  $("#submitButton").click(postComment);
}

function postComment(event){
  comment = $("#commentArea").val();
  $("#displayComments").append(comment+BR)

  //selct div, append into p
}
$('document').ready(setup)
