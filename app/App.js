import React, { Component } from 'react'
import {render} from 'react-dom'

import Keys from './Keys'
import CancelButton from './Components/Search/CancelButton'

import SearchBox from './Components/Search/SearchBox'
import LonLatInput from './Components/LonLatInput/LonLatInput'

import TileExporter from './Components/TileExporter/Exporter'

require('./scss/main.scss')

TileExporter.initScene();
TileExporter.attachEvents();

class SearchBoxWrapper extends Component {
  render () {

     const searchConfig = {
             placeholder: 'Search address or or place',
             childClass: 'searchBox',
             key: Keys.search
           };
    return (
      <div className = 'row'>
        <div className = 'col-md-12'>
            <SearchBox
              config = {searchConfig} />
        </div>
      </div>
    )
  }
}


render(<SearchBoxWrapper />,
        document.getElementById('search-bar')
);