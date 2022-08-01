import React  from 'react'
import { Link } from 'react-router-dom'
import Green from './green.webp';
import Py from './pyt.webp';
import Hobi from './hobi.webp';
import Er from './eric.jpg'
import Tikka from './0n7il1h8_chicken-tikka-masala_625x300_21_January_20.webp';
import Sal from './Salmon-meal-prep-18001200-min.jpg';
export const Home = () => 
{
  return (
    <div>
        <div id="frame1">
          <Link to='/tourism'><img src='https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='Tourism' id='img1'/></Link>
          <h1 id='img-alt'>Greece Balos Beach</h1>
          <h3 id='img-subtag'>Tourism May 10 2023</h3>
        </div>
        <div id="frame2">
         <Link to='/fitness'> <img src='https://images.herzindagi.info/image/2019/Jan/home-remedies-for-high-blood-pressure-3.jpg' alt='Fitness' id='img2'/></Link>
        </div>
        <div id="frame3">
          <Link to='/technology'><img src='https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045-1038x720.jpg' alt='technology' id='img3'/></Link>
        </div>
        <h1 id='htech'>Latest Technology News</h1><br/>
        <hr id='hline1'/>
        <div id="latest">
        <div id="hblock1">
        <Link to='/technology/reliance'><img src={Green} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}} id='thead'> Reliance seeks new technologies </h1>
        <h3 id='subR'>As part of the push, Reliance Industries also plans to bid <Link to='/technology/reliance'>read more</Link></h3>        
        </div>
        <div id="hblock2">
        <Link to='/technology/python'><img src={Py} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}} id='thead'> PYTHON IS NO MORE OVERRATED</h1>
        <h3 id='subR'>As a form of low-impact exercise, yoga has been shown <Link to='/technology/python'>read more</Link></h3>    
        </div>
       </div><br/>
       <h1 id='htech'>Latest K-pop News</h1><br/>
       <hr id='hline1'/>
       <div id="latest">
        <div id="hblock1">
        <Link to='/kpop/jhope'><img src={Hobi} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> BTS member J-Hope to release </h1>
        <h3 id='subR'>J-Hope, a member of the South Korean music sensation BTS <Link to='/kpop/jhope'>read more</Link></h3>        
        </div>
        <div id="hblock2">
        <Link to='/kpop/ericnam'><img src={Er} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Eric Nam cancels Czech  </h1>
        <h3 id='subR'>Korean-American singer and entrepreneur Eric Nam had to cancel his latest<Link to='/kpop/ericnam'>read more</Link></h3> 
        </div>
       </div>
       <br/>
       <h1 id='htech'>Latest Recipies for Fitness</h1><br/>
       <hr id='hline1'/>
       <div id="latest">
        <div id="hblock1">
        <Link to='/food/tikka'><img src={Tikka} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>30-Minute Chicken Tikka Masala</h1>
        <h3 id='subR'>Sometimes you just need something quick and easy to rely on, right? <Link to='/food/tikka'>read more</Link></h3>        
        </div>
        <div id="hblock2">
        <Link to='/food/salmon'><img src={Sal} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Quick Spicy Cajun Salmon & Garlicky Veg  </h1>
        <h3 id='subR'><br/>This spicy salmon meal prep recipe makes<Link to='/food/salmon'>read more</Link></h3> 
        </div>
       </div><br/>
    </div>
  )
}
