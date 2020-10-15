import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap/index';
import CreateOrphanage from './pages/CreateOrphanage/CreateOrphanage';
import Orphanage from './pages/Orphanage/Orphanage';


function Routes(){
  return(
     <BrowserRouter>
       <Switch>
         <Route component={Landing} path="/" exact/>
         <Route component={OrphanagesMap} path="/app"/>

         <Route component={CreateOrphanage} path="/orphanages/create"/>
         <Route component={Orphanage} path="/orphanages/:id"/>
       </Switch>
     </BrowserRouter>
  )
}



export default Routes;