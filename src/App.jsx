import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import LinkGetter from './LinkGetter';
import sendRequest from './RequestSender';
import DisplayLink from './DisplayLink';


function App() {
  const [link, setLink] = useState("")
  
  function setLinkFromRequest(type, name, group) {
    setLink(sendRequest(type, name, group))
  }
  
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>RUZ Importer</h1>
        <p>Импортируйте расписание из РУЗ в удобный для Вас календарь!</p>
      </div>
      <div className="container p-5 my-5 border">
        {link !== "" ?
          <DisplayLink link={link}/>
        :
          <LinkGetter callback={setLinkFromRequest}/>
        }
      </div>
    </>
  );
}

export default App;
