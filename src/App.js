import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programming from './pages/Programming'
import Running from './pages/Running'
import Other from './pages/Other'
import Gallery from './pages/Gallery'
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
                <Route path="/other" element={<Other />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
