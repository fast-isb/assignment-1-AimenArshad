import './App.css';
import NavBar from './components/navbar';
 import Profile from './components/profileDisplay';
 import UpdateProfile from './components/updateProfile';
 import Announcements from './components/announcements';

 import {  BrowserRouter, Routes, Route} from 'react-router-dom'

 function App() {
   return (
     <div >
       <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path='/announcements' element ={<Announcements/>} />
         <Route path='/profile' element ={<Profile/>} />
         <Route path='/updateProfile' element ={<UpdateProfile/>} />
         <Route path='*' element={<h1>Welcome to HMS</h1>} />
       </Routes >
      </BrowserRouter>
     </div>
   );
 }
export default App;

//import './App.css';
// import NavBar from './components/NavBar.js'
// import Announcements  from './components/Announcements';
// import ManageProperty from './components/ManageProperty';
// import Complaints from './components/Complaints';
// import CustomerService from './components/CustomerService';
// import Profile from './components/profile';
// import Complaintstatus from './components/ComplaintStatus'


// import {  BrowserRouter, Routes, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div >
//       <BrowserRouter>
//       <NavBar/>
//       <Routes>
//         <Route path='/announcements' element ={<Announcements/>} />
//         <Route path='/ManageProperty' element ={<ManageProperty/>} />
//         <Route path='/complaints' element ={<Complaints/>} />
//         <Route path='/CustomerService' element ={<CustomerService/>} />
//         <Route path='/profile' element ={<Profile/>} />
//         <Route path='/ComplaintStatus' element ={<Complaintstatus/>} />
//         <Route path='*' element={<h1>Muqadissa ka dimagh ni hai</h1>} />
//       </Routes >
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;
