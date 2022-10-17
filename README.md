<img width="959" alt="Gazetteer" src="https://user-images.githubusercontent.com/56873797/184392847-00dfcd90-eee6-47ca-b095-1367733fdcc8.png">


<h1 align="center">Gazetteer</h1>


Gazetteer App to combine various gazetteers in one graphic user interface

![GitHub contributors](https://img.shields.io/badge/react-16.13-blue) ![GitHub contributors](https://img.shields.io/badge/leaflet-1.6-blue) ![GitHub contributors](https://img.shields.io/badge/antdesign-4.16.7-blue) ![GitHub contributors](https://img.shields.io/badge/redux-4.0.5-blue) ![GitHub contributors](https://img.shields.io/badge/contributions-welcome-green) ![GitHub contributors](https://img.shields.io/github/contributors/ihor-doroschenko/gazetteer)

<h2>Table of contents</h2>

[1. Introduction](#introduction) <br /> 
&nbsp;&nbsp;&nbsp;[1.1. Data access level](#dataAccessLevel) <br />
&nbsp;&nbsp;&nbsp;[1.2. State management](#stateManagement) <br />
&nbsp;&nbsp;&nbsp;[1.3. User interface components](#userInterfaceComponents) <br />
[2. Installation/Download](#installationDownload)  
[3. Settings](#settings)  
&nbsp;&nbsp;&nbsp;[3.1. Configuration for development](#configurationForDevelopment) <br />
&nbsp;&nbsp;&nbsp;[3.2. Configuration for production](#configurationForProduction) <br />
&nbsp;&nbsp;&nbsp;[3.2. Dependencies](#dependencies) <br />
[4. Data processing (Front End)](#dataProcessing)  
&nbsp;&nbsp;&nbsp;[4.1. Data documentation](#dataDocumentation) <br />
&nbsp;&nbsp;&nbsp;[4.2. Normalization](#normalization) <br />
[5. License](#license)  
[6. Acknowledgements](#acknowledgements)

<a name="introduction"><h2>1. Introduction</h2></a>
The GazApp web application is developed as part of the Gazetteer research project by the Herder Institute (HI), the Institute for Regional Geography (IfL) and the Justus Liebig University Giessen (JLU). The application is intended to support users in working with different digital gazetteers, and to help them explore their content and metadata structure.

It enables users to search several place name related databases simultaneously in a unified manner and to view and compare data from different gazetteers. In addition, the application supports the identification of items in different databases which refer to the same geographical entity. By linking corresponding items across gazetteers it facilitates data aggregation and comparison.

Basically, the search works on a global level. However, as the the current regional focus of the project is Poland, additional specific gazetteers were integrated for this region. 

Please note that this documentation focuses more on technical side of the app. For more conceptual question please visit the section `Info/Help` in the <a href="https://vhrz1355.hrz.uni-marburg.de/meta.html">app</a>.

The documentation describes the front end part of the app (graphic user interface). To have a look on the back end documentation, please click <a href="www.google.com">here</a>. To overview the entire app architecture, please have a look at the figure below.

<p align="center"><img width="508" alt="AppSchema" src="https://user-images.githubusercontent.com/56873797/191030252-9bbf0ea6-de0d-409c-9e0e-c6a4cab69776.png"></p>

The most important components of front end part of the app include data access level, state management, and actual user interface components.

<p align="center"><img width="508" alt="190189574-fabcd433-3cd9-4933-9c46-b08ef165288c" src="https://user-images.githubusercontent.com/56873797/191030290-8d823854-ffd1-4e84-84b8-5770cb6b0ff5.png"></p>

<a name="dataAccessLevel"><h3>1.1. Data access level</h3></a>
Data access level (DAL) is implemented with the help of `axios` library using REST API. The entire DAL logic is saved in file `API.js`. Following DAL API objects are exported from the file:

 * `resultsAPI` with method `getMainResults` of get-type with 4 required parameters (`gaz`, `name`, `resultschema`, `namesearchmode`) and 6 optional parameters (`north`, `south`, `west`, `east`, `settlement`, `matchings`).
 * `entityAPI` with method `getEntityById` of get-type with 3 required parameters (`gaz`, `id`, `resultschema`).
 * `partOfAPI` with method `getPartOf` of get-type with 3 required parameters (`gaz`, `id`, `resultschema`) and with method `getPartOfPicture` of get-type with 3 required parameters (`gaz`, `id`, `partofimg`).


<a name="stateManagement"><h3>1.2. State management</h3></a>
For state management Redux with React wrapper above it is used. To split state into different areas and to support <a href="https://en.wikipedia.org/wiki/Single-responsibility_principle">SRP</a> principle, 9 reducers are created:


 * `compare-reducer.js` - compare tool state, where entities can be compared with each other.
 * `details-reducer.js` - details view state, where an entity with all its attributes and values.
 * `filter-reducer.js` - state for filters in results table.
 * `map-interaction-reducer.js` - state for map interaction effects.
 * `matching-reducer.js` - state for matchings view.
 * `nav-reducer.js` - state for boolean flags to control such operations as show/hide, filter/unfilter, etc.
 * `results-store.js` - state to store main results, pre-processed already.
 * `search-reducer.js` - state to store search parameters sent to the server.
 * `table-state-reducer.js` - state to keep actual table dimensions and parameters.

All the reducers are combined in `redux-store.js`. To extract data from Redux state, select and reselect libraries are used.

<a name="userInterfaceComponents"><h3>1.3. User Interface Components</h3></a>

For visualization ant design components are used. For specific needs like tables or tabs separate libraries like `react-table` and `react-tabs` are used. For custom styling CSS modules are implemented. In `App.css` classes are listed that are applied globally. In `index.css` classes are listed that rewrite standard classes. 

Main map is rendered by `leaflet` library with React wrapper above it. To visualize clusters, `react-markercluster` library is used. To provide draw tools for bounding box, `react-leaflet-draw` library is applied. To provide a possibility for more cutomization for leaflet controls on the map, `react-leaflet-control` library is used.

<a name="installationDownload"><h2>2. Installation/Download</h2></a>
Clone or download the repository and open folder with an IDE (for example, <a href="https://code.visualstudio.com/">Miscrosoft Visual Studio Code</a>). 
<a name="settings"><h2>3. Settings</h2></a>
<a name="configurationForDevelopment"><h3>3.1. Configuration for development</h3></a>
Steps to start the development process:
<br />
<br />
1\. Download the code or clone the directory.
<br />
2\. Download and install Node.js and npm <a href="https://nodejs.org/en/download/">here</a> or <a href="https://phoenixnap.com/kb/install-node-js-npm-on-windows">here</a>.
<br />
3\. Open folder in an IDE (for example, MS Visual Studio Code).
<br />
4\. Open new terminal in your IDE and install dependencies using following command:<br /><br />

```
npm install
```
<br />
5. Create full fake REST API with dummy data (data.json located in the root directory) using following command in the terminal:<br /><br />

```
npx json-server --watch data.json --port 8000
```
<br />
6. Open new terminal in your IDE and run local server using following command:<br /><br />

```
npm start
```
<br />
7. Enjoy the development process :wink: .
<a name="configurationForProduction"><h3>3.2. Configuration for production</h3></a>
Steps to create production build:
<br />
<br />
1. Download the code or clone the directory.
<br />
2. Download and install Node.js and npm <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">here</a> or <a href="https://phoenixnap.com/kb/install-node-js-npm-on-windows">here</a>.
<br />
3. Open folder in an IDE (for example, MS Visual Studio Code).
<br />
4. Open new terminal in your IDE and install dependencies using following command:<br /><br />

```
npm install
```
<br />
5. Make changes in code (optional).
<br />
6. Create an optimized updated build using following command:<br /><br />

```
npm run build
```
<br />
7. Push your build to the server (you can find the build forder in root directory).
<br />
8. Reload your page and enjoy new version of the app :sunglasses: .
<br />
<a name="dependencies"><h3>3.3. Dependencies</h3></a>
List of the dependencies:


| name  | version |  description  |
| ------------- | ------------- | ------------- |
| <a href="https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core" >@fortawesome/fontawesome-svg-core</a>  | ^1.2.30  | FontAwesome SVG icons core component  |
| <a href="https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons" >@fortawesome/free-solid-svg-icons</a>  | ^5.14.0  | FontAwesome SVG solid icons component  |
| <a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome" >@fortawesome/react-fontawesome</a>  | ^0.1.11  | Font Awesome 5 React component  |
| <a href="https://www.npmjs.com/package/@material-ui/core" >@material-ui/core</a>  | ^4.11.3  | Material UI core component  |
| <a href="https://www.npmjs.com/package/@testing-library/jest-dom" >@testing-library/jest-dom</a>  | ^5.11.10  | Custom jest matchers to test the state of the DOM  |
| <a href="https://www.npmjs.com/package/antd" >antd</a>  | ^4.16.7  | An enterprise-class UI design language and React UI library  |
| <a href="https://www.npmjs.com/package/axios" >axios</a>  | ^0.19.2  | Promise based HTTP client for the browser and node.js  |
| <a href="https://www.npmjs.com/package/classnames" >classnames</a>  | ^2.2.6  | A simple JavaScript utility for conditionally joining classNames together  |
| <a href="https://www.npmjs.com/package/export-from-json" >export-from-json</a>  | ^1.6.0  | Export to plain text, css, html, json, csv, xls, xml files from JSON  |
| <a href="https://www.npmjs.com/package/html-react-parser" >html-react-parser</a>  | ^0.14.0  | HTML to React parser  |
| <a href="https://www.npmjs.com/package/leaflet" >leaflet</a>  | ^1.6.0  | JavaScript library for interactive maps  |
| <a href="https://www.npmjs.com/package/leaflet-draw" >leaflet-draw</a>  | ^1.0.4  | Vector drawing plugin for Leaflet  |
| <a href="https://www.npmjs.com/package/npm-watch" >npm-watch</a>  | ^0.6.0  | Run scripts from package.json when files change  |
| <a href="https://www.npmjs.com/package/react" >react</a>  | ^16.13.1  | JavaScript library for building user interfaces  |
| <a href="https://www.npmjs.com/package/react-csv" >react-csv</a>  | ^2.0.3  | Build CSV files on the fly basing on Array/literal object of data  |
| <a href="https://www.npmjs.com/package/react-dom" >react-dom</a>  | ^16.13.1  | React package for working with the DOM  |
| <a href="https://www.npmjs.com/package/react-fast-compare" >react-fast-compare</a>  | ^3.2.0  | Fastest deep equal comparison for React |
| <a href="https://www.npmjs.com/package/react-img-zoom" >react-img-zoom</a>  | ^0.1.0  | A React component to zoom images on hover |
| <a href="https://www.npmjs.com/package/react-leaflet" >react-leaflet</a>  | ^2.7.0  | React components for Leaflet maps |
| <a href="https://www.npmjs.com/package/react-leaflet-control" >react-leaflet-control</a>  | ^2.1.2  | Dumb Empty Component for control with react leaflet |
| <a href="https://www.npmjs.com/package/react-leaflet-draw" >react-leaflet-draw</a>  | ^0.19.0  | React component for leaflet-draw |
| <a href="https://www.npmjs.com/package/dudesuh-react-leaflet-markercluster" >react-leaflet-markercluster</a>  | ^2.0.0  | React wrapper of Leaflet.markercluster for react-leaflet |
| <a href="https://www.npmjs.com/package/react-measure" >react-leaflet-measure</a>  | ^2.5.2  | Compute measurements of React components |
| <a href="https://www.npmjs.com/package/react-redux" >react-redux</a>  | ^7.2.0  | React bindings for Redux |
| <a href="https://www.npmjs.com/package/react-resizable" >react-resizable</a>  | ^1.11.0  | A component that is resizable with handles |
| <a href="https://www.npmjs.com/package/react-router-dom" >react-router-dom</a>  | ^5.2.0  | Declarative routing for React web applications |
| <a href="https://www.npmjs.com/package/react-scripts" >react-scripts</a>  | 3.2.0  | Configuration and scripts for Create React App |
| <a href="https://www.npmjs.com/package/react-slick" >react-slick</a>  | ^0.28.0  | React port of slick carousel |
| <a href="https://www.npmjs.com/package/react-table-6" >react-table-6</a>  | ^6.11.0  | A fast, lightweight, opinionated table and datagrid built on React |
| <a href="https://www.npmjs.com/package/react-tabs" >react-tabs</a>  | ^3.2.0  | An accessible and easy tab component for ReactJS |
| <a href="https://www.npmjs.com/package/redux" >redux</a>  | ^4.0.5  | Predictable state container for JavaScript apps |
| <a href="https://www.npmjs.com/package/redux-thunk" >redux-thunk</a>  | ^2.3.0  | Thunk middleware for Redux |
| <a href="https://www.npmjs.com/package/remove-accents" >remove-accents</a>  | ^0.4.2  | Converting the accented characters to their corresponding non-accented ASCII characters |
| <a href="https://www.npmjs.com/package/reselect" >reselect</a>  | ^4.0.0  | Selectors for Redux |
| <a href="https://www.npmjs.com/package/scroll-into-view-if-needed" >scroll-into-view-if-needed</a>  | ^2.2.26  | Ponyfill for upcoming Element.scrollIntoView() APIs |
| <a href="https://www.npmjs.com/package/slick-carousel" >slick-carousel</a>  | ^1.8.1  | Slick carousel original package |

List of the development dependencies:
| name  | version |  description  |
| ------------- | ------------- | ------------- |
| <a href="https://www.npmjs.com/package/@testing-library/react" >@testing-library/react</a>  | ^11.2.6  | React DOM testing library  |
| <a href="https://www.npmjs.com/package/json-server" >json-server</a>  | ^0.16.3  | Full fake REST API  |

<a name="dataProcessing"><h2>4. Data processing (Front End)</h2></a>
<a name="dataDocumentation"><h3>4.1. Data documentation</h3></a>
Gazetteer data are sent from the server to the client in JavaScript syntax as array with objects inside it. Each of objects represents one entity.<br /><br />
Here are basics about the gazetteer data being retrieved from the server (gazetteer specific).
<br /><br />
<details>
  <summary>Geonames</summary>
  
  ```
[
  {
    "timezone": {
        "gmtOffset": 1,
        "timeZoneId": "Europe\/Warsaw",
        "dstOffset": 2
    },
    "bbox": {
        "east": 20.585284545557002,
        "south": 53.726174801599285,
        "north": 53.83372319840072,
        "west": 20.403039454442997,
        "accuracyLevel": 2
    },
    "asciiName": "Olsztyn",
    "astergdem": 145,
    "countryId": "798544",
    "fcl": "P",
    "srtm3": 139,
    "score": 94.48225402832031,
    "adminId2": "7530990",
    "adminId3": "7532914",
    "countryCode": "PL",
    "adminCodes1": {
        "ISO3166_2": "28"
    },
    "adminId1": "858791",
    "lat": "53.77995",
    "fcode": "PPLA",
    "continentCode": "EU",
    "adminCode2": "2862",
    "adminCode3": "286201",
    "adminCode1": "85",
    "lng": "20.49416",
    "geonameId": 763166,
    "toponymName": "Olsztyn",
    "population": 171803,
    "adminName5": "",
    "adminName4": "",
    "adminName3": "Olsztyn",
    "alternateNames": [{
        "isPreferredName": true,
        "name": "Olsztyn",
        "lang": "de"
    }, {
        "name": "Olsztyn",
        "lang": "en"
    }, {
        "name": "QYO",
        "lang": "iata"
    }, {
        "name": "https:\/\/en.wikipedia.org\/wiki\/Olsztyn",
        "lang": "link"
    }, {
        "name": "Olsztyn",
        "lang": "pl"
    }, {
        "name": "Ольштын",
        "lang": "ru"
    }, {
        "name": "PLOLS",
        "lang": "unlc"
    }, {
        "name": "Q82765",
        "lang": "wkdt"
    }],
    "adminName2": "Olsztyn",
    "name": "Olsztyn",
    "fclName": "city, village,...",
    "countryName": "Poland",
    "fcodeName": "seat of a first-order administrative division",
    "adminName1": "Warmia-Masuria",
    "link": "https:\/\/www.geonames.org\/763166"
}
  ]
```

</details>

<details>
  <summary>GOV</summary>
  
  ```
[
  {
    "id": "ALLER2KO03GS",
    "last-modification": "2006-12-16T13:57:43.000+01:00",
    "position": {
        "lon": 20.5167,
        "lat": 53.7833,
        "type": "p"
    },
    "name": [{
        "source": {
            "note": "Wohnplatz 1.1",
            "ref": "source_190237"
        },
        "lang": "deu",
        "value": "Grünberg"
    }, {
        "lang": "pol",
        "value": "Olsztyn\/Osiedle Grunwaldzkie"
    }],
    "type": {
        "value": "129"
    },
    "postal-code": {
        "value": "PL-10-062",
        "year": 2004
    },
    "w-number": {
        "value": "50311"
    },
    "part-of": {
        "source": {
            "ref": "source_190237"
        },
        "ref": "ALLEINKO03FS"
    },
    "link": "http:\/\/gov.genealogy.net\/item\/show\/ALLER2KO03GS"
}
  ]
```

</details>

<details>
  <summary>GND</summary>
  
  ```
[
  {
    "precedingPlaceOrGeographicName": [
      {
        "id": "https://d-nb.info/gnd/4001252-9",
        "label": "Allenstein"
      }
    ],
    "type": [
      "PlaceOrGeographicName",
      "TerritorialCorporateBodyOrAdministrativeUnit",
      "AuthorityResource"
    ],
    "@context": "http://lobid.org/gnd/context.jsonld",
    "oldAuthorityNumber": [
      "(DE-588b)1008435-6"
    ],
    "geographicAreaCode": [
      {
        "id": "https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-PL",
        "label": "Polen"
      }
    ],
    "hasGeometry": [
      {
        "asWKT": [
          "Point ( +020.493888 +053.779722 )"
        ],
        "type": "Point"
      }
    ],
    "describedBy": {
      "license": {
        "id": "http://creativecommons.org/publicdomain/zero/1.0/",
        "label": "http://creativecommons.org/publicdomain/zero/1.0/"
      },
      "dateModified": "2021-08-10T19:38:25.000",
      "id": "https://d-nb.info/gnd/1008435-6/about"
    },
    "gndIdentifier": "1008435-6",
    "id": "https://d-nb.info/gnd/1008435-6",
    "preferredName": "Olsztyn",
    "variantName": [
      "Ol'štyn",
      "Allenstein (Olsztyn)",
      "Allenstein"
    ],
    "sameAs": [
      {
        "id": "http://id.loc.gov/rwo/agents/n79005067",
        "collection": {
          "icon": "http://www.loc.gov/favicon.ico",
          "name": "NACO Authority File",
          "publisher": "Library of Congress",
          "id": "http://www.wikidata.org/entity/Q13219454",
          "abbr": "LC"
        }
      },
      {
        "id": "http://isni.org/isni/0000000123015027",
        "collection": {
          "id": "http://isni.org"
        }
      },
      {
        "id": "http://viaf.org/viaf/168103683",
        "collection": {
          "icon": "http://viaf.org/viaf/images/viaf.ico",
          "name": "Virtual International Authority File (VIAF)",
          "publisher": "OCLC",
          "id": "http://www.wikidata.org/entity/Q54919",
          "abbr": "VIAF"
        }
      },
      {
        "id": "http://www.wikidata.org/entity/Q82765",
        "collection": {
          "icon": "https://www.wikidata.org/static/favicon/wikidata.ico",
          "name": "Wikidata",
          "publisher": "Wikimedia Foundation Inc.",
          "id": "http://www.wikidata.org/entity/Q2013",
          "abbr": "WIKIDATA"
        }
      },
      {
        "collection": {
          "name": "Gemeinsame Normdatei (GND) im Katalog der Deutschen Nationalbibliothek",
          "icon": "https://www.dnb.de/SiteGlobals/Frontend/DNBWeb/Images/favicon.png?__blob=normal&v=4",
          "publisher": "Deutsche Nationalbibliothek",
          "id": "http://www.wikidata.org/entity/Q36578",
          "abbr": "DNB"
        },
        "id": "https://d-nb.info/gnd/1008435-6/about"
      },
      {
        "id": "https://sws.geonames.org/763166",
        "collection": {
          "id": "https://sws.geonames.org"
        }
      }
    ],
    "depiction": [
      {
        "thumbnail": "https://commons.wikimedia.org/wiki/Special:FilePath/Olsztyn%2C%20stary%20ratusz..jpg?width=270",
        "id": "https://commons.wikimedia.org/wiki/Special:FilePath/Olsztyn%2C%20stary%20ratusz..jpg",
        "url": "https://commons.wikimedia.org/wiki/File:Olsztyn%2C%20stary%20ratusz..jpg?uselang=de"
      }
    ],
    "link": "https://d-nb.info/gnd/1008435-6"
  }
]
```

</details>

<details>
  <summary>Wikidata</summary>
  
  ```
[
  {
    "id": "Q11684947",
    "names": [
      {
        "name": "Aleja Marszałka Józefa Piłsudskiego w Olsztynie",
        "lang": "pl"
      },
      {
        "name": "Piłsudskiego Avenue, Olsztyn",
        "lang": "en"
      }
    ],
    "coordinates": [
      {
        "lat": "53.771722222",
        "lon": "20.505027777"
      }
    ],
    "types": [
      {
        "name": "street"
      }
    ],
    "link": "https://www.wikidata.org/wiki/Q11684947"
  }
]
```

</details>

<details>
  <summary>PRNG</summary>
  
  ```
[
  {
    "id_prng": "129982",
    "hauptname": "Stary Olsztyn",
    "objekttyp": "osada",
    "objektklasse": "miejscowość",
    "superobjekt": "Linowo",
    "verwaltungsfunktion": null,
    "genitiv": "-rego -na",
    "adjektiv": null,
    "kommentar": null,
    "quelle": "Nazwy geograficzne Rzeczypospolitej Polskiej (gazeter)  PPWK - Warszawa 1991./Wykaz urzędowych nazw miejscowości w Polsce, t. I - III  GUS (1980 - 1982)./Mapa topograficzna w skali 1:10 000/Rozporządzenie Ministra Administracji i Cyfryzacji z dnia 13 grudnia 2012 r., Dz. U. z 2013 r., poz. 200",
    "unterscheidungselement": "Stary Olsztyn",
    "allg_element": null,
    "ipa_aussprache": null,
    "pol_aussprache": null,
    "lat": "53°43'37''",
    "lon": "20°31'44''",
    "kart_koord_y": "652450,15",
    "kart_koord_x": "600843,31",
    "aenderungsdatum": "23.06.2016",
    "darstellungsart": "Punkt centralny",
    "externes_system": "TERYT",
    "id_externes_system": "0486824",
    "id_iip": "00000000-0000-0000-0000-000000129982",
    "kartenmassstab": null,
    "namensstatus": "urzędowa",
    "weitere_namen": null,
    "sprachcode_weitere_namen": null,
    "sprache_weitere_namen": null,
    "romaniserte_form_weitere_namen": null,
    "historischer_name": null,
    "sicherer_name": null,
    "kommentar_weiterer_name": null,
    "kommentar_historischer_name": null,
    "kommentar_sicherer_name": null,
    "exonym_fremd": null,
    "exonym_geschrieben": null,
    "exonym_sprache": null,
    "exonym_romanisiert": null,
    "endonym_fremd": null,
    "endonym_geschrieben": null,
    "endonym_sprache": null,
    "endonym_romanisiert": null,
    "staat": "Polska",
    "wojewodschaft": "warmińsko-mazurskie",
    "powiat": "olsztyński",
    "gmina": "Purda-gmina wiejska",
    "id_territ_gliederung": "2814102",
    "erfassungsdatum": "07.04.2004",
    "loeschdatum": null,
    "namespace": "PL.PZGiK.204.PRNG",
    "lat_normalisiert": "53.726944444444",
    "lon_normalisiert": "20.528888888889"
  }
]
```

</details>

<details>
  <summary>BKG</summary>
  
  ```
[
  {
    "id": 4015,
    "name": "Allenstein",
    "blatt": "11.0",
    "netz": "03M",
    "chron": [
      {
        "name": "Allenstein",
        "zeit": "1939",
        "staat": "Deutsches Reich",
        "admin": "Allenstein (St.Kr.)"
      },
      {
        "name": "Olsztyn",
        "zeit": "1945",
        "staat": "unter poln. Verwaltung",
        "admin": "Mrągowo"
      },
      {
        "name": "Olsztyn",
        "zeit": "1992",
        "staat": "Polen",
        "admin": "Olsztyn"
      }
    ]
  }
]
```

</details>

<details>
  <summary>Historical Atlas of Poland</summary>
  
  ```
[
  {
    "objectid": 16896,
    "nazwa_wspolczesna": null,
    "nazwa_16w": "Olsztyn",
    "charakter_osady": "miasto",
    "rodzaj_wlasnosci": "k",
    "parafia": "Olsztyn",
    "powiat": "llw",
    "wojewodztwo": "krk",
    "funkcje_centralne_panstwowe": null,
    "funkcje_centralne_koscielne": "parafia",
    "prng": 92778,
    "lat": "50.752179621",
    "lon": "19.2691655730001"
  }
]
```

</details>

<details>
  <summary>Naszekaszuby</summary>
  
  ```
[
  {
    "name_polnisch": "Kartuzy",
    "name_kaschubisch": "Kartuze, Kartuzë, Kartëzë",
    "powiat": "KA",
    "idx": 495
  }
]
```

</details>

<details>
  <summary>Carpatorusyn</summary>
  
  ```
[
  {
    "refnum": " ",
    "name_ukrainisch": " ",
    "name_russinisch": "Sjanok (3% Rusyn)",
    "name_polnisch": "Sanok"
  }
]
```

</details>

<details>
  <summary>Prusijalit</summary>
  
  ```
[
  {
    "name_litauisch": "Alenšteinas",
    "name_deutsch": "Allenstein",
    "name_russisch_polnisch": "lenk. Olsztyn",
    "verwaltungseinheit1": "Alenšteino",
    "verwaltungseinheit2": "Alenšteino miestas",
    "koordinaten": "53.77606, 20.47766",
    "idx": 4,
    "lat": "53.77606",
    "lon": "20.47766",
    "name_russisch": null,
    "name_polnisch": "Olsztyn"
  }
]
```

</details>

<a name="normalization"><h3>4.2. Normalization</h3></a>
After the client retrieved the data, they are normalized. In this case, it means minimal processing for modular representation as well as client-side tools.<br /><br />
Usually means renaming of the attributes (for example, attribute containing spatial information - it can be named as `position` or as `coordinates`, but the component expects to get uniform name). However, in some cases it can mean processing of the values of the attributes (spatial information can be stored as strings, but the component expects it to be numbers).<br /><br />
Below the normalization operations for each gazetteer specificly are listed.<br /><br />
1. Geonames.<br />

 * Coercing of the value of the `geonameId` attribute to string data type.
 * Renaming `geonameId` attribute to `id` attribute.
 * Renaming `fclName` attribute to `type` attribute,
 * Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.
<br />
2. GOV.<br />

 * Renaming `lon` attribute in `position` to `lng`. Coercing the coordinates to float number data type.
 * Reference `type` attribute from number code to unit (e.g. from `2` to ['Amtsbezirk', '(politische) Verwaltung']). Entire list is <a href="http://gov.genealogy.net/type/list">here</a>.
 * Re-creating `name` attribute. Already existing `name` attribute contains multiple names and is to understand more as "all appliable names". As the component expects each entity to have one name to show it both in table and on the map and because this attribute does not exist in GOV gazetteer, it is created on the fly. The first name in `name` attribute is taken, all other ones are considered as "all other appliable names" and are saved in separate attribute `names`.
 * Coercing value of `id` attribute to string data type.
<br />
3. GND.<br />

 * Extracting coordinates from `hasGeometry` attribute, coercing it to float number data type, and save it under new created `position` attribute.
 * Coercing value of `id` attribute to string data type.
 * Renaming `preferredName` attribute to `name` attribute.
 * Renaming `id` attribute to `link` attribute.
 * Renaming `gndIdentifier` attribute to `id` attribute.
<br />
4. Wikidata.<br />

 * Re-creating `name` attribute. Already existing `name` attribute contains multiple names and is to understand more as "all appliable names". As the component expects each entity to have one name to show it both in table and on the map and because this attribute does not exist in GOV gazetteer, it is created on the fly. The first name in `name` attribute is taken, all other ones are considered as "all other appliable names" and are saved in separate attribute `names`.
 * Transformation of `type` attribute (basically, an object with single string value is coerced into a string).
 * Extraction of the latitude and longitude from the `coordinates` attribute, coercing it to float number data type, and save it under new created `position` attribute
 * Coercing value of `id` attribute to string data type.
<br />
5. PRNG.<br />

 * Renaming `id_prng` attribute to `id` attribute.
 * Renaming `hauptname` attribute to `name` attribute.
 * Renaming `objekttyp` attribute to `type` attribute.
 * Renaming `lat_normalisiert` attribute to `lat` attribute.
 * Renaming `lon_normalisiert` attribute to `lng` attribute.
 * Renaming `lat` attribute to `geograph_lat` attribute.
 * Renaming `lon` attribute to `geograph_lng` attribute.
 * Coercing value of `id` attribute to string data type.
 * Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.
<br />
6. BKG Historische Ortsnamen.<br />

 * Coercing value of `id` attribute to string data type.
 * Renaming of `chron` attribute to `names` attribute.
<br />
7. Historical Atlas of Poland.<br />

 * Renaming `objectid` attribute to `id` attribute.
 * Renaming `nazwa_wspolczesna` attribute to `name` attribute.
 * Renaming `charakter_osady` attribute to `type` attribute.
 * Renaming `lon` attribute to `lng` attribute.
 * Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.
 * Coercing value of `id` attribute to string data type.
 * Transformation of all attribute values having `null` to empty string `''`.
<br />
8. Naszekaszuby.<br />

 * Renaming `idx` attribute to `id` attribute.
 * Renaming `name_polnisch` attribute to `name` attribute.
 * Coercing value of `id` attribute to string data type.
<br />
9. Carpathorusyn.<br />

 * Renaming `name_russinisch` attribute to `name` attribute.
 * Renaming `refnum` attribute to `id` attribute.
<br />
10. Prusijalit.<br />

 * Renaming `idx` attribute to `id` attribute.
 * Renaming `name_litauisch` attribute to `name` attribute.
 * Renaming `lon` attribute to `lng` attribute.
 * Coercing value of `id` attribute to string data type.
 * Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.
<br />

<a name="license"><h2>5. License</h2></a>
...
<a name="acknowledgements"><h2>6. Acknowledgements</h2></a>
...
