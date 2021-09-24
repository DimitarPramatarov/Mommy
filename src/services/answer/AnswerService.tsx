import axios from "axios"
import { getAllAnswersUrl, setCorrectAnswerUrl } from "../../constants/HttpCalls"

export const getAnswers = async (postId: string, token: string) : Promise<any[]> => {

    let answers: any;
    await axios.get<any[]>(getAllAnswersUrl, {
        params: {
          postId: postId
        },
        headers:{"Authorization" : `Bearer ${token}`}
      })
    .then(function (response) {
        answers = response.data;
    })

    return answers;
}

export const setCorrectAnswer = async(answerId:string, token:string) : Promise<string> => {
  let result: any;
   await axios.put(setCorrectAnswerUrl, {
      answerId: answerId
    },
    {
      headers:{"Authorization" : `Bearer ${token}`
    }
  })
.then(function (response) {
  console.log(response.data)
  result = response.data;
})
.catch(function (error) {
  console.log(error);
})

  return result;
}

const AnswerService = {
    getAnswers,
    setCorrectAnswer,
}

export default AnswerService

