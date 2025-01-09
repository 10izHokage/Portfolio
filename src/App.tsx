import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Header} from '@ components/Header';
import {Footer} from '@ components/Footer';
import {Home} from '@ pages/Home';
import {About} from '@ pages/About';
import {Skills} from '@ pages/Skills';
import {ProjectsPage} from '@ pages/Projects';
import {Contact} from '@ pages/Contact';
import {GitHubProjects} from '@ pages/GithabProjects.tsx';
import {AppContainer} from "@ styles/AppStyle/AppContainer.tsx";
import {MainContent} from "@ styles/AppStyle/MainContent.tsx";

export const App: React.FC = () => {
    const username = '10izHokage';
    return (
        <Router>
            <AppContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/github-projects" element={<GitHubProjects username={username} />} />
                    </Routes>
                </MainContent>
                <Footer />
            </AppContainer>
        </Router>
    );
};
