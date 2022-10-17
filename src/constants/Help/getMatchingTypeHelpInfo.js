export const getMatchingTypeHelpInfo = () => {
  return [
    {
      title: '2) "reference table"',
      description:
        'Some gazetteers contain "same as" references to other gazetteers. In order to build a comprehensive reference table that contains the given references in a unified form, they are also combined to infer indirect references. Additionally, to have a fast-responding service the respective database dumps were downloaded and parsed offline, i.e. beforehand. The resulting reference table is used in the gazetteer app. ',
      example: `As mentioned, the reference table was constructed offline and is stored the GazApp database. This example illustrates the process.

      In many gazetteers, there are entities representing a Silesian village named Łubowice:
      
      E.g. in GOV (gov::object_189067), in a Polish database called TERYT/SIMC (teryt_simc::0220871), in Wikidata (wikidata::1397867), and in GND (gnd::10132266-5).
      
      gov::object_189067 contains a reference to teryt_simc::0220871
      
      wikidata::1397867 contains two references, one to teryt_simc::0220871, one to gnd::10132266-5
      
      From these three reference statements it can be concluded that all four entities represent the same toponym, because if
<br /><pre><code>gov::object_189067  =   teryt_simc::0220871    and
wikidata::1397867   =   teryt_simc::0220871    and
wikidata::139786    =   gnd::10132266-5</pre></code>
      then
<br /><pre><code>gov::object_189067  =  teryt_simc::0220871  =  wikidata::1397867  =  gnd::10132266-5</pre></code>
      So six "same as" references can be explicitly formulated between two entities at a time
      (gov:... = teryt_simc:... , gov:... = wikidata:... , ... , wikidata::... = gnd::...)
      (or actually twelve, if a distinction is made between a statement gazA::ent1 = gazB::ent2 and its inverse gazB::ent2 = gazA::ent1)
      and these references are stored in the reference table.  `,
    },
    {
      title: '3) "matchings"',
      description: `Corresponding entities can also be determined by comparing their attribute values. Especially the entities' names and the coordinates are well suited for that, because combined they make a rather good identifier, and because similarity measures can be easily computed for two names (using the "Levenshtein distance") or two coordinates (calculating the geographic distance) , provided that suitable data sets are available.
    Real data often do not allow a clear assignment based on this strategy. The reasons for that include name related challenges like name variations, e.g. possible name affixes, missing coordinates, ambiguities (e.g. because an entity in one gazetteer is split up into many in another gazetteer), and the absence of a record in a database.
    In order to reduce ambiguous matchings the entities are compared based on normalised data (e.g. optionally removing diacritics and name affixes) and additional information like the entity type may be used.
    Like the "reference table", the "matchings" component was built offline and is stored the GazApp database.`,
      example: `The matching algorithm also searches for corresponding GeoNames-GOV entity pairs.

    The Łubowice entity in GOV contains two names ("Łubowice (województwo śląskie)", "Lubowitz"), coordinates (50.16012, 18.23241) and a type ("Dorf" (village)).
    
    When using the normalized name ("Łubowice") and the coordinate and type information, the algorithm identifies a matching GeoNames entity:
    
    <br /><pre><code>{id: 11497515, name: "Łubowice", coordinates: (50.16139, 18.23583), type: "PPLH - historical populated place"}</pre></code>
    
    The match was by determined by
    
    comparing the names with the "Levenshtein distance" name distance measurement:
    
    <br /><pre><code>lev("Łubowice", "Łubowice") = 0</pre></code>
    
    and calculating the geographical distance of the two point coordinates:
    
    <br /><pre><code>geodist((50.16012, 18.23241), (50.16139, 18.23583))) = 0.282 km</pre></code>
    
    and taking into account that both entities are settlements ("village" and "historical populated place")
    
    By using these three criteria the algorithm unambiguously matches the two entities, i.e. for the GOV entity there is only one matching GeoNames entity and for the GeoNames entity there is only one matching GOV entity as well. `,
    },
    {
      title: '4) "matchings linked with references"',
      description:
        'The reference table and the matchings can be combined to infer possible "same as" relationships.',
      example: `After combining the reference table with the matchings there is a link between entities from the Naszekaszuby gazetteer and Wikidata, both resembling a Pomeranian village named Skórowo. The Wikidata entity contains a reference to a GeoNames entity, and this GeoNames entity is matched to the Naszekaszuby entity based on name similarity and region:

  reference table entry:
  wikidata::Q431650 = geonames::3085756
  
  matching entry:
  geonames::3085756 = naszekaszuby::1192
  
  resulting match linked with reference entry:
  wikidata::Q431650 = naszekaszuby::1192
  `,
    },
  ];
};
