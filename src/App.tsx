import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';
import HomePage from './containers/HomePage/HomePage.tsx';
import PostFormPage from './containers/PostFormPage/PostFormPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Contacts from './containers/Contacts/Contacts.tsx';
import About from './containers/About/About.tsx';
import OnePost from './components/Posts/onePost/OnePost.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddPost" element={<PostFormPage />} />
        <Route path={'/About'} element={<About />} />
        <Route path={'/Contacts'} element={<Contacts />} />
        <Route path="/posts/:id" element={<OnePost />} />
        <Route path="/posts/:id/edit" element={<PostFormPage />} />
        <Route path="*" element={<h2>Sorry current page does not exist</h2>} />
      </Routes>
    </>
  );
};

export default App;
