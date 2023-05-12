import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import sendRequest from "./RequestSender";


export default function LinkGetter() {
    const [value, setValue] = useState({
      name: "",
      userType: "Студент",
      group: ""
    });
  
    function handleChange(e) {
      setValue({
        ...value,
        [e.target.name] : e.target.value
      })
    }
  
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            Тип:
          </label>
          <select
            className="form-select"
            id="userType"
            name="userType"
            value={value.userType}
            onChange={handleChange}
          >
            <option>Студент</option>
            <option>Преподаватель</option>
            <option>Группа</option>
          </select>
        </div>
        {value.userType !== "Группа"?
            <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">
                Имя:
            </label>
            <input
                className="form-control"
                id="name"
                placeholder="Введите имя"
                name="name"
                value={value.name}
                onChange={handleChange}
            />
            </div>
            :
            <></>
        }
        {value.userType !== "Преподаватель"?
            <div className="mb-3">
            <label htmlFor="group" className="form-label">
                Группа:
            </label>
            <input
                className="form-control"
                id="group"
                placeholder="Введите группу"
                name="group"
                value={value.group}
                onChange={handleChange}
            />
            </div>
            :
            <></>
        }
        <button type="button" className="btn btn-primary" onClick={sendRequest}>
          Отправить
        </button>
      </form>
    );
  }
