import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './Default.jpg';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

var elments = <div className='flexbox' style={{width:"100%", height:"auto",display:"flex" }}>
  <div className='flex-menu'  style={{width:"25%",backgroundColor:"#ace1e6"}}>
    <div className='flex-memu-m' style={{margin:"10px" ,height:"100%",overflowY:"scroll", overflowX:"hidden",bottom:"0px",position:"absolute", top:"0",left:"100px"}}>
      { <input type={"search"} placeholder="Search here..." /> }
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
 

    </div>
  </div>
  <div className='flex-content' style={{width:"50%"}}>
  <div className='flex-content-m' style={{margin:"10px",height:"100%",overflowY:"scroll", overflowX:"hidden",bottom:"0px",position:"absolute",right:"300px",left:"300px",marginTop:"250px"}}>  

  <h4>img</h4>
  <img src={logo} width="100%" height="400px" />
  <img src={logo} width="100%" height="400px" />
  <img src={logo} width="100%" height="400px" />
  <img src={logo} width="100%" height="400px" />
  <img src={logo} width="100%" height="400px" />
  <img src={logo} width="100%" height="400px" />
  
      
  </div>
  </div>
  <div className='flex-feed' style={{width:"25%",backgroundColor:"#ace1e6"}}>
  <div className='flex-feed-m' style={{margin:"10px",height:"100%",position:"absolute",right:"100px"}}>
  {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
    {  <h4> <a href=''>home</a></h4>}
  
      
  </div>
  </div>
</div> 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elments);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
