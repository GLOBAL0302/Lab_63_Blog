import './App.css'
import NavBar from './components/NavBar/NavBar.tsx';
import HomePage from "./Pages/HomePage/HomePage.tsx"
import PostFormPage from './Pages/PostFormPage/PostFormPage.tsx';

const App = () => {

  return (
    <>
      <NavBar/>
      <HomePage/>
      <PostFormPage/>
    </>
  )
};

export default App
