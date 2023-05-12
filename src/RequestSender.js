import axios from "axios";


function handleResponce(res) {
    return res.data.link
}


function catchError(err) {
    console.log(err)
}


export default function sendRequest(type, name, group) {
    const client = axios.create({
      baseURL: "http://localhost:8000/api/link",
      timeout: 3000
    })
    switch(type) {
      case "Студент":
        client.get("/student", {
          params: {
            name: name,
            group: group
          }
        })
        .then(handleResponce)
        .catch(catchError)
        break;
      case "Преподаватель":
        client.get("/teacher", {
          params: {
            name: name
          }
        })
        .then(handleResponce)
        .catch(catchError)
        break;
      case "Группа":
        client.get("/group", {
          params: {
            group: group
          }
        })
        .then(handleResponce)
        .catch(catchError)
        break;
      default:
        console.log(`${name} - ${type} - ${group}`)
        break;
    }
  }
  