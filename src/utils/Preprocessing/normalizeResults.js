import { normalizeCarpathorusyn } from './normalizeCarpathorusyn/normalizeCarpathorusyn';
import { normalizeGeonames } from './normalizeGeonames/normalizeGeonames';
import { normalizeGND } from './normalizeGND/normalizeGND';
import { normalizeGOV } from './normalizeGOV/normalizeGOV';
import { normalizeHistonamen } from './normalizeHistonamen/normalizeHistonamen';
import { normalizeNaszekaszuby } from './normalizeNaszekaszuby/normalizeNaszekaszuby';
import { normalizePoland16thc } from './normalizePoland16thc/normalizePoland16thc';
import { normalizePRNG } from './normalizePRNG/normalizePRNG';
import { normalizePrusijalit } from './normalizePrusijalit/normalizePrusijalit';
import { normalizeWikidata } from './normalizeWikidata/normalizeWikidata';

const normalizeGazetteers = {
  geonames: normalizeGeonames,
  gov: normalizeGOV,
  gnd: normalizeGND,
  wikidata: normalizeWikidata,
  prng: normalizePRNG,
  prusijalit: normalizePrusijalit,
  naszekaszuby: normalizeNaszekaszuby,
  carpathorusyn: normalizeCarpathorusyn,
  poland16thc: normalizePoland16thc,
  histonamen: normalizeHistonamen,
};

export const normalize = (database, gazName) => {
  return normalizeGazetteers[gazName](database);
};
