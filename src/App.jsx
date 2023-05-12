import 'bootstrap/dist/css/bootstrap.min.css';
import LinkGetter from './LinkGetter';


function App() {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>RUZ Importer</h1>
        <p>Импортируйте расписание из РУЗ в удобный для Вас календарь!</p>
      </div>
      <div className="container p-5 my-5 border">
        <LinkGetter/>
      </div>
    </>
  );
}

export default App;
