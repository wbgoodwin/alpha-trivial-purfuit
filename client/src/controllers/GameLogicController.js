export async function getQuestion(categoryID) {
  let question = {}

  await fetch(`${process.env.REACT_APP_SERVER_HOST}/readQuestion/${categoryID}`)
    .then(response => response.json())
    .then(data => {
      question = data
    })
    .catch(err => console.log(err))

  return question
}
