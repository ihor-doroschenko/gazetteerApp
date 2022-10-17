export const TooltipTextes = {
  //// Allgemein

  // InfoHelp
  tt_go_to_InfoHelp: { en: 'Click to go to the info/text area', de: '' },

  // FAQ
  tt_go_to_faq: { en: 'Click to go to FAQ', de: '' },

  // App
  tt_go_to_app: { en: 'Click to go to App', de: '' },

  //// Search

  // Go to the search help section
  tt_go_to_the_help_section_for_search: {
    en: 'Click to go to the search help section ',
    de: '',
  },

  // Search switcher
  tt_search_switcher_off: { en: 'Click to show search parameters' },
  tt_search_switcher_on: { en: 'Click to hide search parameters' },

  // Search parameters
  tt_search_place_name: {
    en: 'Search for a place name',
    de: '',
  },

  tt_search_bounding_box: {
    en: 'Search for a place name in a specific geographic area (via a boundingbox)',
    de: '',
  },

  tt_search_filter_type: {
    en: 'Select an optional filter type for search',
    de: '',
  },

  tt_search: {
    en: 'Click to start the search',
    de: '',
  },

  // Databases
  tt_gazetteers: {
    en: "Select the gazetteers to be queried.<br><br>If possible, live querying of a gazetteer is used (via API calls), possible for Geonames, GOV, GND.<br><br>The other gazetteers' data is queried via downloaded database dumps.",
    de: '',
  },

  // Options
  tt_options: { en: 'Select search options: Search type (required) and other (optional)', de: '' },

  // Name search type
  tt_options_search_type: {
    en: `<div class='optionTooltips'>
<div><b>Select search type (required):</b></div>
<div><b>Original search:</b> Use the specific default name search behavior of each gazetteer</div>
<div><b>Match whole name:</b> Search string must match an entity's name (e.g.: search for 'Wrocław' does not match 'Wrocław-Bartoszewice')</div>
<div><b>Match word in name:</b> Search string must match a word in an entity's name (e.g.: search for 'Wrocław' does also match 'Wrocław-Bartoszewice')</div>
</div>`,
    de: '',
  },

  // Select all gazetteers
  tt_select_all_gazetteers: { en: 'Click to select all gazetteers', de: '' },

  // Deselect all gazetteers
  tt_deselect_all_gazetteers: { en: 'Click to deselect all gazetteers', de: '' },

  // Matching
  tt_match: {
    en: 'Search also for additional static mapping and matching results',
    de: '',
  },

  // Settlements
  tt_settlements: {
    en: 'Search only for populated places',
    de: '',
  },

  // Draw Bounding Box
  tt_bounding_box_open: { en: 'Click to start drawing', de: '' },

  // Remove Bounding Box
  tt_bounding_box_remove: { en: 'Click to remove drawn polygon', de: '' },

  // Go to web-site of gazetteer
  tt_go_to_web_site: { en: 'Click to go to the web-site of the gazetteer', de: '' },

  //Show database error
  tt_database_error: { en: 'database error', de: '' },

  // Gazetteers
  tt_geonames: {
    en: `<div class='gazTooltips'><div><b>GeoNames</b></div>
<div>Widely used user editable geographical database</div>
<div>Coverage: global</div>
<div>Entity amount: > 9 million</div>
<div>App data access: via Geonames Web Service</div></div>`,
    de: '',
  },

  tt_gov: {
    en: `<div class='gazTooltips'><div><b>Geschichtliches Ortsverzeichnis (GOV)</b></div>
<div>Historical Gazetteer</div>
<div>Coverage: Europe, the U.S. and Australia; with historical names</div>
<div>Gazapp data access: via GOV Web Service</div></div>`,
    de: '',
  },
  tt_poland16thc: {
    en: `<div class='gazTooltips'><div><b>Historical Atlas of Poland 16th century</b></div>
<div>Gazetteer covering Polish settlements from the 16th century</div>
<div>Coverage: Poland, 16th century; with historical names</div>
<div>Entity amount: > 20.000</div>
<div>Data creation: Historical Atlas and Ontohgis project teams</div>
<div>Gazapp data access: Gazapp database (dump)</div></div>`,
    de: '',
  },

  tt_gnd: {
    en: `<div class='gazTooltips'><div><b>GND Geografika</b></div>
<div>German Authority File</div>
<div>Coverage: basically global, currently sparse, growing</div>
<div>Gazapp data access: via GND Web Service</div></div>`,
    de: '',
  },

  tt_prng: {
    en: `<div class='gazTooltips'><div><b>Państwowy Rejestr Nazw Geograficznych (PRNG)</b></div>
<div>Polish Authority File</div>
<div>Coverage: Poland</div>
<div>Gazapp data access: Gazapp database (dump)</div></div>`,
    de: '',
  },

  tt_naszekaszuby: {
    en: `<div class='gazTooltips'><div><b>Kaszëbsczé miestné muiona (Naszekaszuby)</b></div>
<div>Dataset containing places with Kashubian names</div>
<div>Coverage: Kashubia</div>
<div>Gazapp data access: Gazapp database (web scraping)</div></div>`,
    de: '',
  },

  tt_carpathorusyn: {
    en: `<div class='gazTooltips'><div><b>Lemko Village Resource Guide (Carpathorusyn)</b></div>
<div>Dataset containing places with Rusyn names</div>
<div>Coverage: mainly southeastern Poland</div>
<div>Gazapp data access: Gazapp database (web scraping)</div></div>`,
    de: '',
  },

  tt_prusijalit: {
    en: `<div class='gazTooltips'><div><b>Interaktyvus Rytų Prūsijos žemėlapis IV (Prusijalit)</b></div>
<div>Dataset containing places with Lithuanian names</div>
<div>Coverage: northeastern Poland, Russian oblast Kaliningrad (former East Prussia)</div>
<div>Gazapp data access: Gazapp database (web scraping)</div></div>`,
    de: '',
  },

  tt_histonamen: {
    en: `<div class='gazTooltips'><div><b>BKG Historische Ortsnamen</b></div>
<div>Gazetteer by the Bundesamt für Kartographie und Geodäsie</div>
<div>Coverage: mainly East-Central Europe; with historical names</div>
<div>Data creation: Bundesamt für Kartographie und Geodäsie (BKG)</div>
<div>Gazapp data access: Gazapp database (dump)</div></div>`,
    de: '',
  },

  tt_wikidata: {
    en: `<div class='gazTooltips'><div><b>Wikidata (part)</b></div>
<div>Coverage: East-Central European "items" with coordinates (stubs)</div>
<div>Gazapp data access: Gazapp database (filled via the SPARQL endpoint)</div></div>`,
    de: '',
  },

  //// Details-Anischt
  // GOV part of image (kein Tooltip! Sondern Credentials Unter dem Bild)
  gov_partofgraph: { en: 'Created by gov.genealogy.net', de: 'Erzeugt von gov.genealogy.net' },

  // Close detail
  tt_close_detail: { en: 'Click to close detail for this entity', de: '' },

  // Close part-of image
  tt_go_back_part_of_image: { en: 'Click to go back to the details', de: '' },

  // Toogle on part of
  tt_go_to_image: { en: 'Click to go to image view', de: '' },

  // Toogle off part of
  tt_go_to_text: { en: 'Click to go to textual view', de: '' },

  // Collapse details attribute
  tt_collapse_details_attribute: { en: 'Click to collapse this attribute', de: '' },

  // Expand details attribute
  tt_expand_details_attribute: { en: 'Click to expand this attribute', de: '' },

  // Toogle on skip empty
  tt_toogle_skip_on: { en: 'Click to skip empty fields', de: '' },

  // Toogle off skip empty
  tt_toogle_skip_off: { en: 'Click to show all fields', de: '' },

  // Toogle on essential attributes
  tt_toogle_essential_on: { en: 'Click to show only essential attributes', de: '' },

  // Toogle off essential attributes
  tt_toogle_essential_off: { en: 'Click to show all attributes', de: '' },

  // Go to compare tool
  tt_compare: { en: 'Click to compare entities', de: '' },

  // Zoomto entity
  tt_zoom_to: { en: 'Click to zoom to the entity on the map', de: '' },

  // Go to details of this element
  tt_go_to_details: { en: 'Click to go to details of this element', de: '' },

  //// Tabellen (beide Ansichten)

  // Go to the results help section
  tt_go_to_the_help_section_for_results: {
    en: 'Click to go to the results help section ',
    de: '',
  },

  // Export CSV
  tt_export_csv: { en: 'Click to export as csv', de: '' },

  // Clear filter
  tt_clear_filter: { en: 'Click to clear the filter', de: '' },

  // Clear all filters
  tt_clear_all_filters: { en: 'Click to clear all filters', de: '' },

  // Start filter
  tt_start_filter: { en: 'Filter entities by record name', de: '' },

  // Change the view
  tt_change_view: { en: 'Click to change the view', de: '' },

  // Close all results
  tt_close_all_results: { en: 'Click to close all results', de: '' },

  // Go to next set of tabs
  tt_go_to_next_set_of_tabs: { en: 'Click to go to next tabs', de: '' },

  // Go to back set of tabs
  tt_go_to_previous_set_of_tabs: { en: 'Click to go back to previous tabs', de: '' },

  // Go to next in carousel bottom view
  tt_carousel_next: { en: 'Click to go forward', de: '' },

  // Go to next in carousel bottom view
  tt_carousel_back: { en: 'Click to go back', de: '' },

  // Filter Matchings on
  tt_filter_off: { en: 'Click to show all results', de: '' },

  // Filter Matchings off
  tt_filter_on: { en: 'Click to show only results with matchings', de: '' },

  // Results switcher on
  tt_results_switcher_on: { en: 'Click to show results table', de: '' },

  // Results switcher off
  tt_results_switcher_off: { en: 'Click to hide results table', de: '' },

  // Compare switcher on
  tt_compare_switcher_on: { en: 'Click to show compare table', de: '' },

  // Compare switcher off
  tt_compare_switcher_off: { en: 'Click to hide compare table', de: '' },

  // Matchings switcher on
  tt_matchings_switcher_on: { en: 'Click to show matchings table', de: '' },

  // Matchings switcher off
  tt_matchings_switcher_off: { en: 'Click to hide matchings table', de: '' },

  //// Tabellen (vertikale Ansicht)

  // Collapse results
  tt_collapse_results: { en: 'Click to collapse results from this gazetteer', de: '' },

  // Expand results
  tt_expand_results: { en: 'Click to expand results from this gazetteer', de: '' },

  //// Compare Ansicht

  // Go to the compare help section
  tt_go_to_the_help_section_for_compare: { en: 'Click to go to the compare help section ', de: '' },

  //// Matchings Ansicht

  // Expand matchings
  tt_expand_matching_results: { en: 'Click to expand matching results of this entity', de: '' },

  // Collapse matchings
  tt_collapse_matching_results: { en: 'Click to collapse matching results of this entity', de: '' },

  // Remove entity from compare table
  tt_remove_entity_from_compare: { en: 'Click to remove entity', de: '' },

  // Go to the matching help section
  tt_go_to_the_help_section_for_matchings: {
    en: 'Click to go to the matching help section ',
    de: '',
  },

  //// Map

  // Go to initial map zoom level
  tt_export_initial_zoom: { en: 'Click to go to initial map zoom level', de: '' },
};
