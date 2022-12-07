import About from './components/About/About';
import Container from './components/Container/Container';
import Favorite from './components/Favorite/Favorite';
import NavBar from './components/NavBar/NavBar';
import Home from './Home/Home';
import ErrorPage from './components/FailUrl/FailUrl';
import { Routes, Route } from 'react-router-dom';
import List from './components/List/List'

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path='*' element={<ErrorPage />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;