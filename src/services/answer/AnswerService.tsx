import axios from "axios"
import { getAllAnswersUrl, setCorrectAnswerUrl, createAnswerUrl, deleteAnswerUrl} from "../../constants/HttpCalls"

export const createAnswerService = async (postId: string, description: string, token: string) => {

  let result = await axios.post(createAnswerUrl, {
    description: description,
    postId: postId,
  },
  {
    headers:{"Authorization" : `Bearer ${token}`}
  })

  return result;
}

export const getAnswers = async (postId: string, token: string) => {

    let answers = await axios.get(getAllAnswersUrl, {
        params: {
          postId: postId
        },
        headers:{"Authorization" : `Bearer ${token}`}
      })

    return answers.data;
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

export const deleteAnswerService = async (answerId:string, token: string) => {
    console.log(answerId);
  let result = await axios.post(deleteAnswerUrl, {
    id: answerId
  },
  {
    headers:{"Authorization" : `Bearer ${token}`
  }
  })

  return result;
}

export const updateAnswerService = async (AnswerId: string, description: string, token: string) => {

  let result = await axios.put("url", {
      id: AnswerId,
      description: description,
  },
  {
      headers: {"Authorization" : `Bearer ${token}`}
  })
  
  return result.data
}


const AnswerService = {
    getAnswers,
    setCorrectAnswer,
    deleteAnswerService,
}

export default AnswerService

