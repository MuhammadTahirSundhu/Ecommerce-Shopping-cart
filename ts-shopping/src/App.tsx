import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AllItems from './components/AllItems';
import Navbar from './components/Navbar';
import AdminDashBoard from './pages/AdminDashBoard';
import { RootState } from './store/store';
import SwipeSlide from './components/SwipeSlideItems';
import AddItemToCollection from './components/AdminDashboardComponents/AddItemToCollection';
import AdSlide from './components/AdSlide';
import AdCube from './components/AdCube';

const App: React.FC = () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  const items = useSelector((state: RootState) => state.items.items);

  return (
    <>
      {/* <AdminDashBoard /> */}
      {/* <AllItems items={items}/> */}
      {/* <AddItemToCollection open={true} /> */}
      {/* {<SwipeSlide items= {items} />} */}
      <Navbar />
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="LeftUp">
            <h1 className='level1Heading'>Left Header</h1>
            <p>Content for the left side.</p>
          </div>
          <div className="LeftDown">
            <p>Content for the left side.</p>
          </div>
        </div>
        <div className="headerRight">
          <h1 className='level1Heading'>Right Header</h1>
          <p>Content for the right side.</p>
        </div>
      </div>
      {/* {<AdSlide/>}
      {<AdCube/>} */}
    </>
  );
}

export default App;
