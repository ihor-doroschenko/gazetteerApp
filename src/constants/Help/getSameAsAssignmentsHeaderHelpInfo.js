export const getSameAsAssignmentsHeaderHelpInfo = () => {
  return [
    {
      title: '',
      description: `The application supports the identification of corresponding entities in different databases. Therefore, for each entity in the search result set the web app looks for entities in other gazetteers which likely refer to the same toponym and adds this additional information to the entity.`,
      example: `The user searches for "Wrocław" in the GOV gazetteer with "same as" functionality enabled. The GazApp server queries the GOV web service accordingly and processes the results. Before sending the result set to the web browser, the GazApp server tries to find possible "same as" relations for each entity in the result set. For the GOV entity resembling the city of Wrocław it finds a corresponding entity in GeoNames and adds this information to the GOV
      entity in the result set before sending it to the browser:
      `,
      code: `
<br /><pre><code>GOV result set: [ 
... 
  Wrocław (id: BREADTJO81MC) {
    names: [ 
      Wrocław
      Breslau
      ... 
    ] 
    ...
<b>
  /* additional information added by the GazApp server */ 
  matchings: [
    {
      gazetteer: geonames
      id: 3081368
      link:https://www.geonames.org/3081368,
      description: lev dist: 0, geo dist: 2237 m, type: both_settlements, assignment: 1:1
    }
    ... 
  ]
</b>
}
]</code></pre>`,
      additional: `Currently "same as" assignments are only applied to entities in Poland.
  <br />
  As the "same as" lookup requires additional search operations for each entity in each result
  set and in sum this can be time-consuming, this feature can be turned on and off
  <i>[VERLINKUNG AUF HOW-TO-USE-DOK]</i>`,
    },
  ];
};
