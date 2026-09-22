import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import About from '../src/components/About';
import Differentials from '../src/components/Differentials';
import Testimonials from '../src/components/Testimonials';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Plans from '../src/components/Plans';

import './App.css';

function App() {
   
    return (
        <div className="min-h-screen w-full bg-white text-white pt-20">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Differentials />
                <Testimonials />
                <Plans />
                <Contact />
            </main>
            <Footer/>
        </div>     
    );
}

export default App;