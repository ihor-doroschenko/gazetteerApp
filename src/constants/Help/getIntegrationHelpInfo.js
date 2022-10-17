export const getIntegrationHelpInfo = () => {
  return [
    {
      title: 'Integration',
      description: `The "same as" system is prioritized in the aforementioned order. I.e. if the live data of a gazetteer A entity contains a "same as" reference to another entity in another gazetteer B in for a given entity, this information is considered most valid and possible"same as"-statements for that entity to gazetteer B in 2), 3) and 4) are ignored. Accordingly, "same as" references in 2) are preferred to those in 3) and 4) and so on.`,
      example: `The example illustrates how the "same as" information for the "GOV" Łubowice (Silesian) is put together.
  The entity data delivered by the GOV web service already contains a "same as" reference to an entity in the TERYT/SIMC database. This "live" reference is added to the "same as" property of the GOV Łubowice entity:
<br /><pre><code>db	"teryt_simc"
id	"0220871"
type	"ref (from live data)"</code></pre>
The system looks for other "same as" references in the reference table. As the live data already contained a reference to a TERYT/SIMC entity, the system does not look for one to that database. But the table contains indirect references to entities in GND, PRNG, and Wikidata, so the following is added:
<br /><pre><code>db	"gnd"
id	"10132266-5"
type	"ref"
description	"ref dbpath: gov > teryt_simc < wikidata > gnd"
link	https://d-nb.info/gnd/10132266-5
db	"prng"
id	"73702"
type	"ref"
description	'ref dbpath: gov > teryt_simc < prng'

db	"wikidata"
id	"1397867"
type	"ref"
description	'ref dbpath: gov > teryt_simc < wikidata'
link	https://www.wikidata.org/wiki/Q1397867</code></pre>
  As neither the live data nor the reference table contain a reference from the GOV Łubowice entity to a GeoNames entity, the app checks the matchings for that and adds:
<br /><pre><code>db	"geonames"
id	"11497515"
type	"match"
description	"lev dist: 0, geo dist: 282 m, type: both_settlements, assignment: 1:1"
link	"https://www.geonames.org/11497515"</code></pre>
  `,
    },
  ];
};
