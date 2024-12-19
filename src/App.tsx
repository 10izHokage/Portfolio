import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Header} from '@ components/Header';
import {Footer} from '@ components/Footer';
import {Home} from '@ pages/Home';
import {About} from '@ pages/About';
import {Skills} from '@ pages/Skills';
import {ProjectsComponent} from '@ pages/Projects';
import {Contact} from '@ pages/Contact';
import {GithabProjects} from '@ pages/GithabProjects.tsx';
import {AppContainer} from "@ styles/AppStyle/AppContainer.tsx";
import {MainContent} from "@ styles/AppStyle/MainContent.tsx";

export const App: React.FC = () => {
    return (
        <Router>
            <AppContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<ProjectsComponent />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/github-projects" element={<GithabProjects />} />
                    </Routes>
                </MainContent>
                <Footer />
            </AppContainer>
        </Router>
    );
};
