import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    SAVE_ANSWER
  } from "./action-types";
  
  export function receiveQuestions(questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
    };
  }
  
  export function addQuestion(question) {
    return {
      type: ADD_QUESTION,
      question
    };
  }
  
  export function saveAnswer(id, answer, authedUser) {
    return {
      type: SAVE_ANSWER,
      id,
      answer,
      authedUser
    };
  }