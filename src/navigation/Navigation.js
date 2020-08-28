import React from 'react';
import'../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo/logo (1).png'
const img= logo
const Navigation = () => {
    return (
      // this navbar use from bootstrap 
        <div>
           <nav class="navbar navbar-dark bg-primary">
               <img src={img} alt=""/>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
           </nav>
        </div>
    );
};

export default Navigation;