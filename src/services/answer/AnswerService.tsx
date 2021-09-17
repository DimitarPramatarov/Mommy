import axios from "axios"
import { getAllAnswersUrl } from "../../constants/HttpCalls"

export const getAnswers = async (postId: string, token: string) : Promise<any[]> => {

    let answers: any;
    await axios.get<any[]>(getAllAnswersUrl, {
        params: {
          postId: postId
        },
        headers:{"Authorization" : `Bearer ${token}`}
      })
    .then(function (response) {
        console.log(response.data);
        answers = response.data;
    })

    return answers;
}

const AnswerService = {
    getAnswers,
}

export default AnswerService

