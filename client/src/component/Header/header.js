import React from 'react';
import './header.css';
import Main from '../Main/main';
import Home from '../Home/home';
import About from '../About/about';
import Contact from '../Contact/contact';
import Skills from '../Skills/skills';
import Projects from '../Projects/projects';
import Github from '../Github/github';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Header(){

    return(
        <Router>
        <div className='container'>

            <div className='section1'>
                <div className='wrapper'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(106, 115, 125)" className="h-12 w-12 py-[.65rem] block mx-auto"><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(106, 115, 125)" className="h-12 w-12 py-[.65rem] block mx-auto"><path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="rgb(106, 115, 125)"><path d="M85.97376,2.6875c-0.52672,0.00698 -1.02978,0.21989 -1.40149,0.59314l-9.69626,9.72906c-0.77789,0.78985 -0.77195,2.05961 0.01329,2.84215c0.78524,0.78253 2.05502,0.78409 2.84217,0.00348l6.2529,-6.27455v17.78041c0,1.1132 0.90243,2.01563 2.01563,2.01563c1.1132,0 2.01563,-0.90243 2.01563,-2.01562v-17.78041l6.2529,6.27521c0.78716,0.78059 2.05693,0.77903 2.84216,-0.0035c0.78524,-0.78253 0.79118,-2.05228 0.01331,-2.84213l-9.69626,-9.72972c-0.38455,-0.38614 -0.90906,-0.60011 -1.45398,-0.59314zM28.51466,26.53906c-0.53274,-0.00903 -1.04668,0.1968 -1.4259,0.57108c-0.37922,0.37428 -0.59177,0.88548 -0.58972,1.4183l0.02296,13.7695c-0.00064,1.1184 0.89734,2.02982 2.01563,2.04581h0.00328c1.1206,-0.02016 2.01712,-0.93684 2.01234,-2.05762l-0.0164,-8.87807l12.57272,12.56419c0.78942,0.78707 2.06742,0.78516 2.85449,-0.00426c0.78707,-0.78942 0.78516,-2.06742 -0.00426,-2.85449l-12.57076,-12.56616l8.85838,0.02296h0.00328c1.11348,-0.00425 2.01427,-0.90739 2.01563,-2.02087c0.00027,-0.53295 -0.21196,-1.04401 -0.58967,-1.41999c-0.37771,-0.37599 -0.88974,-0.58587 -1.42267,-0.58317l-13.73604,-0.00722zM143.48337,26.53906l-13.73604,0.00328c-0.73893,-0.02947 -1.43466,0.34808 -1.81269,0.98368c-0.37803,0.63559 -0.37764,1.42717 0.00101,2.06239c0.37865,0.63523 1.07475,1.01209 1.81365,0.9819h0.00328l8.85839,-0.02362l-12.57207,12.56879c-0.57616,0.57582 -0.74841,1.44215 -0.43635,2.19457c0.31206,0.75242 1.04689,1.24255 1.86146,1.24158c0.5347,0.0007 1.04761,-0.21184 1.42511,-0.59052l12.57404,-12.57272l-0.01509,8.89775c-0.00477,1.12077 0.89174,2.03746 2.01234,2.05762h0.00328c1.11933,-0.01835 2.01678,-0.93158 2.01563,-2.05106l0.02296,-13.75572c-0.00005,-0.53294 -0.21299,-1.04378 -0.5915,-1.41896c-0.37851,-0.37518 -0.89121,-0.58361 -1.42413,-0.57895zM86,35.42107c-27.8892,0 -50.57893,22.68974 -50.57893,50.57893c0,27.8892 22.68974,50.57893 50.57893,50.57893c27.8892,0 50.57893,-22.68974 50.57893,-50.57893c0,-27.8892 -22.68974,-50.57893 -50.57893,-50.57893zM86,39.45232c25.66562,0 46.54768,20.88139 46.54768,46.54768c0,25.6663 -20.88206,46.54768 -46.54768,46.54768c-25.66562,0 -46.54768,-20.88206 -46.54768,-46.54768c0,-25.66562 20.88206,-46.54768 46.54768,-46.54768zM79.07654,54.75781c-4.07089,0 -7.52185,3.2892 -7.52185,7.3611v1.03734h-9.90753c-4.25364,0 -7.56122,3.48014 -7.56122,7.73378v14.71433c0,2.13757 1.00781,4.03079 3.02344,4.97411v20.39771c-0.02848,1.65052 0.60672,3.24341 1.76314,4.42142c1.15642,1.17801 2.73729,1.84256 4.38806,1.8446h45.47819c1.65082,-0.00205 3.23175,-0.66658 4.38828,-1.84457c1.15653,-1.17799 1.79188,-2.77087 1.76358,-4.42145v-20.34784c2.01563,-0.73671 3.02344,-2.52461 3.02344,-4.50563v-15.23267c0,-4.25364 -3.30758,-7.73378 -7.56122,-7.73378h-9.90753v-1.03734c0,-4.0719 -3.45189,-7.3611 -7.52513,-7.3611zM79.07785,58.78906h13.84233c1.84766,0 3.49388,1.48085 3.49388,3.32985v1.03734h-20.82812v-1.03734c0,-1.84766 1.64291,-3.32985 3.49191,-3.32985zM61.64715,67.1875h48.70569c2.03074,0 3.52997,1.67179 3.52997,3.70253v15.23267c0.01003,0.36427 -0.22308,0.69089 -0.57083,0.79982l-19.24948,5.67747v-1.57208c0.02211,-0.52295 -0.16988,-1.03233 -0.53167,-1.41058c-0.36179,-0.37826 -0.86212,-0.59271 -1.38553,-0.59389h-12.29124c-0.5231,0.00127 -1.0231,0.2156 -1.38472,0.59357c-0.36163,0.37797 -0.55366,0.88695 -0.53183,1.40959v1.7827l-18.73967,-5.71094c-0.65401,-0.20119 -1.09515,-0.81187 -1.08064,-1.49597v-14.71236c0,-2.03074 1.49923,-3.70253 3.52997,-3.70253zM157.5291,74.29993c-0.80388,0.0195 -1.51927,0.51493 -1.82024,1.2606c-0.30098,0.74567 -0.12995,1.59889 0.43515,2.17095l6.27455,6.2529h-17.77976c-1.1132,0 -2.01562,0.90243 -2.01562,2.01563c0,1.1132 0.90243,2.01563 2.01563,2.01563h17.77976l-6.27455,6.2529c-0.52246,0.50565 -0.73209,1.25349 -0.5486,1.95704c0.18349,0.70354 0.73166,1.25374 1.43453,1.43982c0.70286,0.18608 1.45147,-0.0208 1.95904,-0.54139l9.72972,-9.69626c0.37952,-0.3782 0.59284,-0.89194 0.59284,-1.42773c0,-0.53579 -0.21332,-1.04953 -0.59284,-1.42773l-9.72972,-9.69626c-0.38881,-0.38137 -0.91541,-0.58917 -1.45988,-0.57608zM14.3213,74.30189c-0.49227,0.02473 -0.95841,0.22897 -1.31029,0.57411l-9.73038,9.69626c-0.37952,0.3782 -0.59284,0.89194 -0.59284,1.42773c0,0.53579 0.21332,1.04953 0.59284,1.42773l9.72906,9.69626c0.78852,0.7858 2.06475,0.7836 2.85055,-0.00492c0.7858,-0.78852 0.7836,-2.06475 -0.00492,-2.85055l-6.2739,-6.2529h17.77975c1.1132,0 2.01563,-0.90243 2.01563,-2.01562c0,-1.1132 -0.90243,-2.01562 -2.01562,-2.01562h-17.77975l6.27455,-6.2529c0.58423,-0.59146 0.74539,-1.48093 0.40582,-2.23976c-0.33957,-0.75884 -1.1102,-1.23135 -1.94051,-1.18982zM110.85938,91.84544v19.13203c0.02908,0.5812 -0.18122,1.14895 -0.5819,1.57096c-0.40069,0.42201 -0.95677,0.66144 -1.5387,0.6625h-45.47819c-0.58209,-0.00113 -1.13827,-0.24079 -1.53888,-0.66309c-0.40061,-0.4223 -0.61062,-0.99035 -0.58107,-1.57168v-19.07626l16.79688,5.1237v0.74602c0,4.4528 3.6097,8.0625 8.0625,8.0625c4.4528,0 8.0625,-3.6097 8.0625,-8.0625v-0.96845zM81.96875,93.05469h8.0625v4.71494c0,2.2264 -1.80485,4.03125 -4.03125,4.03125c-2.2264,0 -4.03125,-1.80485 -4.03125,-4.03125zM127.43185,125.43919c-0.81075,0.01292 -1.53504,0.50984 -1.83887,1.26162c-0.30383,0.75178 -0.1282,1.61241 0.44591,2.18502l12.57207,12.56419l-8.85839,-0.02034h-0.00328c-1.11348,0.00425 -2.01427,0.90738 -2.01562,2.02087c-0.00027,0.53295 0.21196,1.04401 0.58967,1.41999c0.37771,0.37599 0.88974,0.58587 1.42268,0.58317l13.73604,0.00722h0.00328c0.53274,0.00903 1.04668,-0.1968 1.4259,-0.57109c0.37922,-0.37428 0.59177,-0.88548 0.58972,-1.4183l-0.02296,-13.7695c0.00064,-1.1184 -0.89734,-2.02982 -2.01562,-2.04581h-0.00328c-1.1206,0.02016 -2.01712,0.93684 -2.01235,2.05762l0.01509,8.87807l-12.57272,-12.56419c-0.38627,-0.38504 -0.91193,-0.59734 -1.45726,-0.58855zM44.50647,125.44904c-0.5242,0.00764 -1.0248,0.21923 -1.39559,0.58986l-12.57404,12.57272l0.01509,-8.89775c0.00479,-1.12027 -0.89094,-2.03675 -2.01103,-2.05762h-0.00328c-1.11933,0.01835 -2.01678,0.93158 -2.01562,2.05106l-0.02296,13.75572c0.00005,0.53294 0.21299,1.04378 0.5915,1.41896c0.37851,0.37518 0.89121,0.58361 1.42413,0.57895h0.00328l13.73604,-0.00328c0.73894,0.02923 1.43455,-0.34855 1.81237,-0.98426c0.37782,-0.63572 0.37718,-1.42729 -0.00168,-2.06239c-0.37886,-0.6351 -1.07508,-1.01174 -1.81397,-0.98131h-0.00328l-8.85838,0.02362l12.57207,-12.56879c0.37799,-0.37702 0.59042,-0.88894 0.59042,-1.42281c0,-0.53387 -0.21243,-1.0458 -0.59042,-1.42281c-0.38525,-0.3851 -0.90997,-0.59787 -1.45463,-0.58986zM86,142.62318c-1.1132,0 -2.01562,0.90243 -2.01562,2.01563v17.78041l-6.2529,-6.27521c-0.78716,-0.78055 -2.0569,-0.77897 -2.84212,0.00354c-0.78522,0.78251 -0.79118,2.05223 -0.01335,2.84209l9.69626,9.72907c0.3782,0.37952 0.89194,0.59284 1.42773,0.59284c0.53579,0 1.04953,-0.21332 1.42773,-0.59284l9.69626,-9.72907c0.77783,-0.78985 0.77187,-2.05958 -0.01335,-2.84209c-0.78522,-0.78251 -2.05495,-0.78409 -2.84212,-0.00354l-6.2529,6.27521v-17.78041c0,-1.1132 -0.90243,-2.01562 -2.01562,-2.01562z"></path></g></g></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(106, 115, 125)" className="h-12 w-12 py-[.65rem] block mx-auto"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(106, 115, 125)" className="h-12 w-12 py-[.65rem] block mx-auto"><path fillRule="evenodd" clipRule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(225, 228, 232)" className="h-12 w-12 py-[.65rem] block mx-auto"><path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z"></path></svg>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(106, 115, 125)" className="h-12 w-12 py-[.65rem] block mx-auto"><path fillRule="evenodd" clipRule="evenodd" d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"></path></svg>
                    </div>
                </div>
            </div>

            <div className='section2'>

                <div className='top'>
                    <div>
                        <p>Explorer</p>
                    </div>
                    <div className='dotContainer'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div>
                </div>

                <div className='fileSection'>
                    <div className='fileWrapper'>
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transition transform duration-200 mr-1.5"><path fillRule="evenodd" clipRule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"></path></svg>
                        </div>
                        <div>
                            <h4>PORTFOLIO</h4>
                        </div>
                    </div>
                </div>

            </div>

            <div className='section3'>
                <div className='tabs'>
                    <ul>
                        <li><Link to="/Portfolio">Home</Link></li>
                        <li><Link to='/Portfolio/about'>About</Link></li>
                        <li><Link to='/Portfolio/contact'>Contact</Link></li>
                        <li><Link to='/Portfolio/skills'>Skills</Link></li>
                        <li><Link to='/Portfolio/projects'>Projects</Link></li>
                        <li><Link to='/Portfolio/github'>Github</Link></li>
                    </ul>
                </div>
                <Main>
                    <Switch>
                        <Route exact path='/Portfolio'>
                            <Home/>
                        </Route>
                        <Route exact path='/Portfolio/about'>
                            <About/>
                        </Route>
                        <Route exact path='/Portfolio/contact'>
                            <Contact/>
                        </Route>
                        <Route exact path='/Portfolio/skills'>
                            <Skills/>
                        </Route>
                        <Route exact path='/Portfolio/projects'>
                            <Projects/>
                        </Route>
                        <Route exact path='/Portfolio/github'>
                            <Github/>
                        </Route>
                    </Switch>
                </Main>
            </div>

        </div>
        </Router>
    )
};

export default Header;