import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import { Link, useLocation } from "react-router-dom";
import './app.css';

function App() {
  return (
    <>
      <div className='background'>
        <Header />
        <div className="mt-5"></div>
          <Outlet />
        <Footer className="footer mt-5" />
      </div>
    </>
  )
}

export default App
