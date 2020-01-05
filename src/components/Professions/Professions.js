import React from 'react';
import logo from '../../components/pictures/logoSV.png';

const Professions = () =>{
     return(
          <div class="flex-container">
               <li class="flex-item">
                    <div class="img-container">
                         <img src={logo}></img>
                    </div>
               </li>
               <li class="flex-item">Customer Service Rep</li>
               <li class="flex-item">Accountant</li>
               <li class="flex-item">Developer</li>
          </div>
     
     )
}
export default Professions;