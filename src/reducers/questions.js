import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    SAVE_ANSWER
  } from "../actions/action-types";
  
  function questions(state = {}, action) {
    const { type, question, id, answer, authedUser } = action;
    switch (type) {
      case RECEIVE_QUESTIONS:
        return {
          ...state,
          ...action.questions
        };
      case ADD_QUESTION:
        return {
          ...state,
          [question.id]: question
        };
      case SAVE_ANSWER:
        return {
          ...state,
          [id]: {
            ...state[id],
            [answer]: {
              ...state[id][answer],
              votes: state[id][answer].votes.concat(authedUser)
            }
          }
        };
      default:
        return state;
    }
  }
  
  export default questions;