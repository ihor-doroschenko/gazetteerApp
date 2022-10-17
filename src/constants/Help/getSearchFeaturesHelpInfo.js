export const getSearchFeaturesHelpInfo = () => {
  return [
    {
      title: 'Name search scope',
      description:
        'The user can choose if a name search is applied to every word in a name or only to the whole name. The search can either be permissive or restrictive in that respect. In case of the permissive "match word in name" (which is the the default setting) the search phrase is applied to every single word of a name, i.e. it only needs to match a word contained in a name to include the entity in the result set. In case of "match whole name" the search phrase must match the entire name. ',
      example: `GOV contains an entity named "Wrocław", one named "Wrocław Gądów", and a third with the named "Bielany Wrocławskie".

    The user searches for "Wrocław" and the name search scope is left unchanged, i.e. it is set to "match word in name".
    
    > The result set contains the entity named "Wrocław" as well as the one named "Wrocław Gądów", because in both names there is a matching word; however it does not return "Bielany Wrocławskie" (this would require a wildcard search).
    
    The user searches for "Wrocław" and the name search scope is set to "match whole name".
    
    > The result set contains the entity "Wrocław", but neither the "Wrocław Gądów" nor the "Bielany Wrocławskie" entity. `,
      additional:
        'The third option is to set the name search scope to "original search". In that case every search behavior of a live request (i.e. a request against GeoNames, GOV, or GND) is left as-is. ',
    },
    {
      title: 'Wildcards',
      description:
        'In case of a unified search, i.e. the name search scope is set to "match word in name" or "match whole name", the user can use wildcards (by using the Asterisk symbol *). Note that a wildcard cannot not be used as the leading character. ',
      example: `As mentioned in the above example, GOV contains three entities, "Wrocław", "Wrocław Gądów", and "Bielany Wrocławskie".

The user searches for "Wrocław*" and the name search scope is the default setting, i.e. "match word in name".

> The result set contains all three entities, because all of them bear a name containing a word which begins with "Wrocław".

The user searches for "Wrocław*" and the name search scope is set to "match whole name".

> The result does not contain the entity named "Bielany Wrocławskie", because the name does not begin with "Wrocław". `,
      additional: '',
    },
    {
      title: 'Permissive search',
      description:
        'The search is case- and diacritic-insensitive in unified search (i.e. if the name search scope is set to "match word in name" or "match whole name").',
      example: `Let's assume two gazetteers contain entities referring to the city of Wrocław. In gazetteer A the entity bears the correct name "Wrocław", in the second one it is called "Wroclaw" (containing a plain l without the slash diacritic instead of ł).

The user searches for "Wrocław" (with the diacritic).

> The result sets contain both entities, "Wrocław" and "Wroclaw", because ł is also mapped to l.

The user searches for "Wroclaw" (without the diacritic).

> The result sets contain both entities, "Wroclaw" and "Wrocław", because l is also mapped to the corresponding character containing the diacritic. `,
      additional: '',
    },
  ];
};
