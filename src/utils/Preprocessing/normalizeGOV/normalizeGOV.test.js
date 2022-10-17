import { normalizeGOV } from './normalizeGOV';

it('the entries of GOV were correctly pre-processed', () => {
  const inputValue = [
    {
      id: 'object_276839',
      'last-modification': '2011-11-20T00:00:00.000Z',
      position: { lon: 18.881500000000003, lat: 54.335, type: 'e' },
      'external-reference': { value: 'westpreussen.de:1099' },
      url: { value: 'http://www.westpreussen.de/cms/ct/ortsverzeichnis/details.php?ID=1099' },
      name: [
        { lang: 'deu', value: 'Dammschleuse' },
        { lang: 'pol', value: 'Gdańsk' },
      ],
      type: { value: '39' },
      'w-number': { value: '67111' },
      'part-of': { ref: 'object_218108' },
      note: [
        { text: ' 1908 nicht genannt ', lang: 'deu' },
        { text: ' Status - zur Stadtgemeinde Danzig gehörend ', lang: 'deu' },
      ],
      link: 'https://gov.genealogy.net/item/show/object_276839',
    },
    {
      id: 'object_263301',
      'last-modification': '2016-01-02T00:00:00.000Z',
      position: { lon: 18.772855936357445, lat: 54.237909937711514, type: 'c' },
      name: [
        {
          source: { page: '119', ref: 'source_149276' },
          lang: 'deu',
          value: 'Freie Stadt Danzig',
          'begin-year': 1920,
          'end-year': 1939,
        },
        {
          source: { note: 'S. 119 - Stichwort Danzig', ref: 'source_149276' },
          lang: 'deu',
          value: 'Freie Stadt Danzig',
          'begin-year': 1807,
          'end-year': 1814,
        },
        {
          source: { ref: 'source_190314' },
          lang: 'pol',
          value: 'Wolne Miasto Gdansk',
          'begin-year': 1807,
          'end-year': 1814,
        },
        {
          source: { ref: 'source_190314' },
          lang: 'pol',
          value: 'Wolne Miasto Gdansk',
          'begin-year': 1920,
          'end-year': 1939,
        },
        { lang: 'deu', value: 'Danzig, Freie Stadt' },
      ],
      type: [
        { value: '16', 'begin-year': 1920, 'end-year': 1939 },
        { value: '16', 'begin-year': 1807, 'end-year': 1814 },
      ],
      note: {
        text: ' 28.6.1919 Gründung der Freien Stadt Danzig lt. Versailler Vertrag Art. 100-108. ',
      },
      link: 'https://gov.genealogy.net/item/show/object_263301',
    },
    {
      id: 'object_157824',
      'last-modification': '2018-01-23T00:00:00.000Z',
      position: { lon: 18.65042, lat: 54.34516, type: 'c' },
      name: [
        {
          source: { note: 'S. 37 Nr. 9', ref: 'source_394367' },
          lang: 'deu',
          value: 'Danzig (St. Petri-Pauli)',
          year: 1937,
        },
        {
          source: { note: 'deu.', ref: 'source_1164057' },
          lang: 'deu',
          value: 'Danzig (St. Peter u. Paul)',
        },
        {
          source: { note: 'pol.', ref: 'source_1164057' },
          lang: 'pol',
          value: 'Gdansk (świętych Apostołów Piotra i Pawła)',
          'begin-year': 1945,
        },
        {
          source: { note: 'S. 471 Nr. 9', ref: 'source_394367' },
          lang: 'deu',
          value: 'Danzig (St. Petri u. Pauli)',
          year: 1937,
        },
      ],
      type: { value: '29' },
      denomination: { value: 'rf' },
      'part-of': {
        source: { note: 'S. 37 Nr. 9', ref: 'source_394367' },
        ref: 'object_163631',
        year: 1937,
      },
      link: 'https://gov.genealogy.net/item/show/object_157824',
    },
  ];
  const expectedValue = normalizeGOV(inputValue);
  expect(expectedValue).toEqual([
    {
      id: 'object_276839',
      'last-modification': '2011-11-20T00:00:00.000Z',
      lat: 54.335,
      lng: 18.881500000000003,
      'external-reference': { value: 'westpreussen.de:1099' },
      url: { value: 'http://www.westpreussen.de/cms/ct/ortsverzeichnis/details.php?ID=1099' },
      name: 'Dammschleuse',
      names: [
        { lang: 'deu', value: 'Dammschleuse' },
        { lang: 'pol', value: 'Gdańsk' },
      ],
      type: { type: 'Ort', typeGroup: 'Wohnplatz' },
      'w-number': { value: '67111' },
      'part-of': { ref: 'object_218108' },
      note: [
        { text: ' 1908 nicht genannt ', lang: 'deu' },
        { text: ' Status - zur Stadtgemeinde Danzig gehörend ', lang: 'deu' },
      ],
      link: 'https://gov.genealogy.net/item/show/object_276839',
    },
    {
      id: 'object_263301',
      'last-modification': '2016-01-02T00:00:00.000Z',
      lat: 54.237909937711514,
      lng: 18.772855936357445,
      name: 'Freie Stadt Danzig',
      names: [
        {
          source: { page: '119', ref: 'source_149276' },
          lang: 'deu',
          value: 'Freie Stadt Danzig',
          'begin-year': 1920,
          'end-year': 1939,
        },
        {
          source: { note: 'S. 119 - Stichwort Danzig', ref: 'source_149276' },
          lang: 'deu',
          value: 'Freie Stadt Danzig',
          'begin-year': 1807,
          'end-year': 1814,
        },
        {
          source: { ref: 'source_190314' },
          lang: 'pol',
          value: 'Wolne Miasto Gdansk',
          'begin-year': 1807,
          'end-year': 1814,
        },
        {
          source: { ref: 'source_190314' },
          lang: 'pol',
          value: 'Wolne Miasto Gdansk',
          'begin-year': 1920,
          'end-year': 1939,
        },
        { lang: 'deu', value: 'Danzig, Freie Stadt' },
      ],
      type: [
        {
          type: 'Freistaat',
          typeGroup: '(politische) Verwaltung',
          'begin-year': 1920,
          'end-year': 1939,
        },
        {
          type: 'Freistaat',
          typeGroup: '(politische) Verwaltung',
          'begin-year': 1807,
          'end-year': 1814,
        },
      ],
      note: {
        text: ' 28.6.1919 Gründung der Freien Stadt Danzig lt. Versailler Vertrag Art. 100-108. ',
      },
      link: 'https://gov.genealogy.net/item/show/object_263301',
    },
    {
      id: 'object_157824',
      'last-modification': '2018-01-23T00:00:00.000Z',
      lat: 54.34516,
      lng: 18.65042,
      name: 'Danzig (St. Petri-Pauli)',
      names: [
        {
          source: { note: 'S. 37 Nr. 9', ref: 'source_394367' },
          lang: 'deu',
          value: 'Danzig (St. Petri-Pauli)',
          year: 1937,
        },
        {
          source: { note: 'deu.', ref: 'source_1164057' },
          lang: 'deu',
          value: 'Danzig (St. Peter u. Paul)',
        },
        {
          source: { note: 'pol.', ref: 'source_1164057' },
          lang: 'pol',
          value: 'Gdansk (świętych Apostołów Piotra i Pawła)',
          'begin-year': 1945,
        },
        {
          source: { note: 'S. 471 Nr. 9', ref: 'source_394367' },
          lang: 'deu',
          value: 'Danzig (St. Petri u. Pauli)',
          year: 1937,
        },
      ],
      type: { type: 'Kirchspiel', typeGroup: 'Kirche' },
      denomination: { value: 'rf' },
      'part-of': {
        source: { note: 'S. 37 Nr. 9', ref: 'source_394367' },
        ref: 'object_163631',
        year: 1937,
      },
      link: 'https://gov.genealogy.net/item/show/object_157824',
    },
  ]);
});
