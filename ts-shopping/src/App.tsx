import { useSelector } from 'react-redux'
import './App.css'
import AllItems from './components/AllItems'
import Navbar from './components/Navbar'
import AdminDashBoard from './pages/AdminDashBoard'
import { RootState } from './store/store'
function App() {
  const items = useSelector((state: RootState) => state.items.items);
  //const someItems = items.filter(item=> item.company !== "Addidas");
 // console.log(someItems);
  
  return (
    <>
    {/* <Navbar /> */}
    <AdminDashBoard />
    {/* <AllItems items={items}/> */}
    </>
  )
}

export default App
