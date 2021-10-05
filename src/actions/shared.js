import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveAnswer
  } from "../utils/_DATA";
  import {
    receiveUsers,
    addQuestionToAuthedUser,
    saveAnswerToAuthedUser
  } from "./users";
  import { receiveQuestions, addQuestion, saveAnswer } from "./questions";
  import { setAuthedUser } from "./authed-user";
  
  let AUTHED_ID = localStorage.getItem("loggedInUser");
  if (AUTHED_ID === "null") {
    AUTHED_ID = null;
  }
  
  export function handleInitialData() {
    return dispatch => {
      return Promise.all([_getUsers(), _getQuestions()]).then(values => {
        dispatch(receiveUsers(values[0]));
        dispatch(receiveQuestions(values[1]));
        dispatch(setAuthedUser(AUTHED_ID));
      });
    };
  }
  
  export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
      return _saveQuestion({
        author: authedUser,
        optionOneText,
        optionTwoText
      }).then(question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToAuthedUser(authedUser, question.id));
      });
    };
  }
  
  export function handleSaveAnswer(id, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
      return _saveAnswer({
        authedUser,
        qid: id,
        answer
      })
        .then(dispatch(saveAnswer(id, answer, authedUser)))
        .then(dispatch(saveAnswerToAuthedUser(authedUser, id, answer)));
    };
  }
  