import './App.css';
// import PageNotFound from './components/errorPage/PageNotFound';
import PageNotFound from './components/errorpage2/PageNotFound';

function App() {
  return (
    <>
      <PageNotFound 
      type="Page Not Found Error!"
      msg="Sorry, The page you were looking for could not be found."
      />
    </>
  );
}

export default App;
