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
import CalendarScreen from "./screens/CalenderScreen";
// import CurriculamScreen from "./screens/CurriculamScreen";
import MissionScreen from "./screens/MissionScreen";
import VisionScreen from "./screens/VisionScreen"; 
import ObjectivesScreen from "./screens/ObjectivesScreen";


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
              <Route path="/calender/" element={<CalendarScreen />} />
              <Route path="/mission/" element={<MissionScreen />} />
              <Route path="/vision/" element={<VisionScreen />} />
              <Route path="/objectives/" element={<ObjectivesScreen />} />
            </Routes>
          </Container>
        </main>
        <FindUs/>
      </Router>
    </div>
  );
}

export default App;
