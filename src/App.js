import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programming from './pages/Programming'
import Running from './pages/Running'
import Outdoors from './pages/Outdoors'
import Photography from './pages/Photography'
import Blog from './pages/Blog'
import './static/css/main.css'
import Navigation from './components/Template/Navigation'

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/running" element={<Running />} />
                <Route path="/other" element={<Outdoors />} />
                <Route path="/gallery" element={<Photography />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
