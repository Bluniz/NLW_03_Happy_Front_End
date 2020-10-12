import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet';


import 'leaflet/dist/leaflet.css';

import {PageMapContainer, Aside, Footer, CreateOrphanage} from './styles'
import mapMarkerImg from '../../assets/images/map-marker.svg';


function OrphanagesMap(){

  return(
    <PageMapContainer>
      <Aside>
        <header>
          <img src={mapMarkerImg} alt="logo"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
          
        <Footer>
          <strong>Santo Amaro</strong>
          <span>Bahia</span>
        </Footer>
      </Aside>

      <Map
       center={[-12.5461067,-38.7106865]}
       zoom={15}
       style={{width: '100%', height: '100%'}}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        </Map>
      
      <CreateOrphanage>
      <Link to="" >
        <FiPlus size={32} color="fff" />
        </Link>
        </CreateOrphanage>
    </PageMapContainer>
  )

}


export default OrphanagesMap;