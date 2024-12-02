import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header  from './components/Header';
import Footer  from './components/Footer';
import Home from './pages/Home';
import About  from './pages/About';
import Skills  from './pages/Skills';
import Projects from './pages/Projects';
import Contact  from './pages/Contact';
import GIthabProjects  from './pages/GIthabProjects.tsx';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1; 
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
    return (
        <Router>
            <AppContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/github-projects" element={<GIthabProjects />} />
                    </Routes>
                </MainContent>
                <Footer />
            </AppContainer>
        </Router>
    );
};

export default App;
