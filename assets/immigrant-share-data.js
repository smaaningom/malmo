/* Foreign-born employee share, by occupation — Sveriges Kommuner och
   Regioner (SKR, the employers' organization for Sweden's municipalities
   and regions), "Personalen i välfärden 2024" and their foreign-born-
   staff breakdown, both published 2024/2025. Source:
   https://skr.se/personalochkompetensforsorjning/utrikesfoddaanstalldaikommunerochregioner.9468.html

   Scope, honestly: this is PUBLIC SECTOR only — municipal and regional
   employees (healthcare, elderly care, schools) — not the whole Swedish
   economy. It's real, sourced, and covers exactly the occupations where
   the "does Sweden actually need immigrant workers" question is loudest,
   but don't read `share` as a private-sector or economy-wide number.

   `name` matches a JOBS entry in jobs-data.js by exact string, so this
   page can look up each occupation's current shortage/surplus status
   live rather than duplicating it. `scope` is "municipalities" or
   "regions" — SKR reports these separately, not combined, and only 2024
   figures exist here (no time series yet). */

const IMMIGRANT_SHARE = [
  { name: "Vårdbiträden", share: 53, scope: "municipalities" },
  { name: "Tandläkare", share: 46, scope: "regions" },
  { name: "Barnskötare", share: 34, scope: "municipalities" },
  { name: "Tandhygienister", share: 33, scope: "regions" },
  { name: "Personliga assistenter", share: 30, scope: "municipalities" },
  { name: "Läkare (exklusive AT-, ST- och specialistläkare)", share: 27, scope: "regions" },
  { name: "Tandsköterskor", share: 26, scope: "regions" },
  { name: "Behandlingsassistenter och socialpedagoger", share: 19, scope: "municipalities" },
  { name: "Grundskollärare", share: 13, scope: "municipalities" },
  { name: "Socialsekreterare", share: 14, scope: "municipalities" },
  { name: "Grundutbildade sjuksköterskor", share: 14, scope: "regions" },
  { name: "Gymnasielärare", share: 12, scope: "municipalities" },
  { name: "Förskollärare", share: 11, scope: "municipalities" },
  { name: "Specialistläkare", share: 37, scope: "regions" },
  { name: "Städare", share: 50, scope: "municipalities" }
];
