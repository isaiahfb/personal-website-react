import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programming from './pages/Programming'
import Running from './pages/Running'
import Outdoors from './pages/Outdoors'
import Photography from './pages/Photography'
import Blog from './pages/Blog'
import './static/css/main.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/running" element={<Running />} />
                <Route path="/outdoors" element={<Outdoors />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
