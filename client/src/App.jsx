import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './app.css';

function App() {
  return (
    <>
      <div className='background'>
        <Header />
          <Outlet />
      </div>
    </>
  )
}

export default App
