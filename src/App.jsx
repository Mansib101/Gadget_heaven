import {Routes, Route, Link, Outlet} from 'react-router-dom'
import Home from './components/Navbar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='flex flex-col bg-gray-100'>
      <Navbar></Navbar>
      <main className='grow w-5/6 mx-auto'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;