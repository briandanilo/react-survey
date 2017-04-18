export default function server (QnA) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {

    dispatch( { type: "ABOUT_TO_POST_NEW_QUESTION" });
    //Do the ajax call
    return  $.ajax({
      url: "http://tiny-za-server.herokuapp.com/collections/bdSurvey2",
      type: "POST",
      data: {
        "id": QnA.id,
        "question": QnA.question,
        "answer": QnA.answer
      }
    }).then(function (d,s,x) {
      //After the ajax call dispatch any needed actions
      console.log("response ",d,s,x)
      dispatch( { type: "SERVER_GOT_USERS_ANSWER",data:d } );
    })
  }
}
