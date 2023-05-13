import axios from "axios";


export default function sendRequest(type, name, group, putLink) {
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
        .then(putLink)
        break;
      case "Преподаватель":
        client.get("/teacher", {
          params: {
            name: name
          }
        })
        .then(putLink)
        break;
      case "Группа":
        client.get("/group", {
          params: {
            group: group
          }
        })
        .then(putLink)
        break;
      default:
        console.log(`${name} - ${type} - ${group}`)
        break;
    }
  }
  