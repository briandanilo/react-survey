export default function AppReducer (state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type){
    case ("SUBMIT_ANSWER"):
      console.log(action.type,action.question,action.answer)
      return state
    case ('SERVER_GOT_USERS_ANSWER'):
      let answers = [];
      if (state.answers)
        state.answers.forEach(function(i){answers.push(i)})
      answers.push(action.data)
      let newState = Object.assign({},state,{"answers":answers})
      return newState
    default:
      return state
  }
}
