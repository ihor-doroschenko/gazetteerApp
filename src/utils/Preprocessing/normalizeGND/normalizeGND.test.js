import { normalizeGND } from './normalizeGND';

it('the entries of GND were correctly pre-processed', () => {
  const inputValue = [
    {
      geographicAreaCode: [
        {
          id: 'https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-PL',
          label: 'Polen',
        },
      ],
      describedBy: {
        license: {
          id: 'http://creativecommons.org/publicdomain/zero/1.0/',
          label: 'http://creativecommons.org/publicdomain/zero/1.0/',
        },
        dateModified: '2018-10-16T09:05:41.000',
        id: 'https://d-nb.info/gnd/1169144675/about',
      },
      gndIdentifier: '1169144675',
      id: 'https://d-nb.info/gnd/1169144675',
      preferredName: 'Gdańsk- Stare Szkoty',
      type: [
        'PlaceOrGeographicName',
        'AdministrativeUnit',
        'TerritorialCorporateBodyOrAdministrativeUnit',
        'AuthorityResource',
      ],
      variantName: [
        'Danzig- Alt Schottland',
        'Stare Szkoty (Gdańsk)',
        'Danzig-Altschottland',
        'Szotland Stary (Gdańsk)',
        'Alt Schottland (Danzig)',
        'Altschottland (Danzig)',
        'Stôri Szotland (Gduńsk)',
      ],
      '@context': 'http://lobid.org/gnd/context.jsonld',
      hierarchicalSuperiorOfPlaceOrGeographicName: [
        { id: 'https://d-nb.info/gnd/4596759-3', label: 'Woiwodschaft Pommern' },
        { id: 'https://d-nb.info/gnd/4011039-4', label: 'Danzig' },
      ],
      sameAs: [
        {
          id: 'http://viaf.org/viaf/1179154015341909310006',
          collection: {
            icon: 'http://viaf.org/viaf/images/viaf.ico',
            name: 'Virtual International Authority File (VIAF)',
            publisher: 'OCLC',
            id: 'http://www.wikidata.org/entity/Q54919',
            abbr: 'VIAF',
          },
        },
        {
          collection: {
            name: 'Gemeinsame Normdatei (GND) im Katalog der Deutschen Nationalbibliothek',
            icon: 'https://www.dnb.de/SiteGlobals/Frontend/DNBWeb/Images/favicon.png?__blob=normal&v=4',
            publisher: 'Deutsche Nationalbibliothek',
            id: 'http://www.wikidata.org/entity/Q36578',
            abbr: 'DNB',
          },
          id: 'https://d-nb.info/gnd/1169144675/about',
        },
      ],
      link: 'https://d-nb.info/gnd/1169144675',
      matchings: [],
    },
    {
      type: ['WayBorderOrLine', 'PlaceOrGeographicName', 'AuthorityResource'],
      '@context': 'http://lobid.org/gnd/context.jsonld',
      geographicAreaCode: [
        {
          id: 'https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-PL',
          label: 'Polen',
        },
      ],
      hasGeometry: [{ asWKT: ['Point ( +018.655277 +054.349722 )'], type: 'Point' }],
      describedBy: {
        license: {
          id: 'http://creativecommons.org/publicdomain/zero/1.0/',
          label: 'http://creativecommons.org/publicdomain/zero/1.0/',
        },
        dateModified: '2019-02-26T08:31:55.000',
        id: 'https://d-nb.info/gnd/1179194535/about',
      },
      broaderTermInstantial: [{ id: 'https://d-nb.info/gnd/4057883-5', label: 'Straße' }],
      definition: [
        'Straße im Stadtteil Rechtstadt in Danzig, beginnt an der Marienkirche und führt ostwärts zur Mottlau und zum Frauentor. - 1945 komplett zerstört, in den 1950er und 1960er Jahren wieder aufgebaut',
      ],
      gndIdentifier: '1179194535',
      id: 'https://d-nb.info/gnd/1179194535',
      place: [{ id: 'https://d-nb.info/gnd/4011039-4', label: 'Danzig' }],
      preferredName: 'Frauengasse (Danzig)',
      variantName: ['ul. Mariacka (Gdańsk)'],
      sameAs: [
        {
          id: 'http://viaf.org/viaf/3824155191933382440005',
          collection: {
            icon: 'http://viaf.org/viaf/images/viaf.ico',
            name: 'Virtual International Authority File (VIAF)',
            publisher: 'OCLC',
            id: 'http://www.wikidata.org/entity/Q54919',
            abbr: 'VIAF',
          },
        },
      ],
      link: 'https://d-nb.info/gnd/1179194535',
      matchings: [],
    },
  ];
  const expectedValue = normalizeGND(inputValue);
  expect(expectedValue).toEqual([
    {
      geographicAreaCode: [
        {
          id: 'https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-PL',
          label: 'Polen',
        },
      ],
      describedBy: {
        license: {
          id: 'http://creativecommons.org/publicdomain/zero/1.0/',
          label: 'http://creativecommons.org/publicdomain/zero/1.0/',
        },
        dateModified: '2018-10-16T09:05:41.000',
        id: 'https://d-nb.info/gnd/1169144675/about',
      },
      id: '1169144675',
      link: 'https://d-nb.info/gnd/1169144675',
      name: 'Gdańsk- Stare Szkoty',
      type: [
        'PlaceOrGeographicName',
        'AdministrativeUnit',
        'TerritorialCorporateBodyOrAdministrativeUnit',
        'AuthorityResource',
      ],
      variantName: [
        'Danzig- Alt Schottland',
        'Stare Szkoty (Gdańsk)',
        'Danzig-Altschottland',
        'Szotland Stary (Gdańsk)',
        'Alt Schottland (Danzig)',
        'Altschottland (Danzig)',
        'Stôri Szotland (Gduńsk)',
      ],
      '@context': 'http://lobid.org/gnd/context.jsonld',
      hierarchicalSuperiorOfPlaceOrGeographicName: [
        { id: 'https://d-nb.info/gnd/4596759-3', label: 'Woiwodschaft Pommern' },
        { id: 'https://d-nb.info/gnd/4011039-4', label: 'Danzig' },
      ],
      sameAs: [
        {
          id: 'http://viaf.org/viaf/1179154015341909310006',
          collection: {
            icon: 'http://viaf.org/viaf/images/viaf.ico',
            name: 'Virtual International Authority File (VIAF)',
            publisher: 'OCLC',
            id: 'http://www.wikidata.org/entity/Q54919',
            abbr: 'VIAF',
          },
        },
        {
          collection: {
            name: 'Gemeinsame Normdatei (GND) im Katalog der Deutschen Nationalbibliothek',
            icon: 'https://www.dnb.de/SiteGlobals/Frontend/DNBWeb/Images/favicon.png?__blob=normal&v=4',
            publisher: 'Deutsche Nationalbibliothek',
            id: 'http://www.wikidata.org/entity/Q36578',
            abbr: 'DNB',
          },
          id: 'https://d-nb.info/gnd/1169144675/about',
        },
      ],
      link: 'https://d-nb.info/gnd/1169144675',
      matchings: [],
    },
    {
      type: ['WayBorderOrLine', 'PlaceOrGeographicName', 'AuthorityResource'],
      '@context': 'http://lobid.org/gnd/context.jsonld',
      geographicAreaCode: [
        {
          id: 'https://d-nb.info/standards/vocab/gnd/geographic-area-code#XA-PL',
          label: 'Polen',
        },
      ],
      lat: '+054.349722',
      lng: '+018.655277',
      describedBy: {
        license: {
          id: 'http://creativecommons.org/publicdomain/zero/1.0/',
          label: 'http://creativecommons.org/publicdomain/zero/1.0/',
        },
        dateModified: '2019-02-26T08:31:55.000',
        id: 'https://d-nb.info/gnd/1179194535/about',
      },
      broaderTermInstantial: [{ id: 'https://d-nb.info/gnd/4057883-5', label: 'Straße' }],
      definition: [
        'Straße im Stadtteil Rechtstadt in Danzig, beginnt an der Marienkirche und führt ostwärts zur Mottlau und zum Frauentor. - 1945 komplett zerstört, in den 1950er und 1960er Jahren wieder aufgebaut',
      ],
      id: '1179194535',
      link: 'https://d-nb.info/gnd/1179194535',
      place: [{ id: 'https://d-nb.info/gnd/4011039-4', label: 'Danzig' }],
      name: 'Frauengasse (Danzig)',
      variantName: ['ul. Mariacka (Gdańsk)'],
      sameAs: [
        {
          id: 'http://viaf.org/viaf/3824155191933382440005',
          collection: {
            icon: 'http://viaf.org/viaf/images/viaf.ico',
            name: 'Virtual International Authority File (VIAF)',
            publisher: 'OCLC',
            id: 'http://www.wikidata.org/entity/Q54919',
            abbr: 'VIAF',
          },
        },
      ],
      link: 'https://d-nb.info/gnd/1179194535',
      matchings: [],
    },
  ]);
});
