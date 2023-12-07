import { Container } from 'react-bootstrap'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import NewsHomeScreen from './screens/NewsHomeScreen'
import NewsScreen from './screens/NewsScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
        <Header />
        <main className='py-3'>
          <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path='/notice/' element={<NewsHomeScreen />} />
            <Route path='/notice/:_id' element={<NewsScreen />} />
          </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
