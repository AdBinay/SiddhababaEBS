import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsHomeScreen from "./screens/NewsHomeScreen";
import NewsScreen from "./screens/NewsScreen";
import HomeScreen from "./screens/HomeScreen";
import FacultyScreen from "./screens/FacultyScreen";
import GalleryScreen from "./screens/GalleryScreen";
import FindUs from "./components/ContactUs";
import OverHead from "./components/OverHead";
import TestHead from "./components/TestHead";
import DownloadsScreen from "./screens/DownloadsScreen";
// import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div>
      <Router>
        <TestHead/>
        <OverHead/>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/notices/" element={<NewsHomeScreen />} />
              <Route path="/notices/:_id" element={<NewsScreen />} />
              <Route path="/faculty/" element={<FacultyScreen />} />
              <Route path="/gallery/" element={<GalleryScreen />} />
              <Route path="/downloads/" element={<DownloadsScreen />} />
            </Routes>
          </Container>
        </main>
        <FindUs/>
      </Router>
    </div>
  );
}

export default App;
