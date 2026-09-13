/* Job market data — Arbetsförmedlingen's Yrkesbarometer, round 2026-1,
   national level. Public domain (CC0). Source:
   https://data.arbetsformedlingen.se/data/yrkesbarometer/
   (direct file: https://data.arbetsformedlingen.se/prognoser/yrkesbarometer.json)

   Twice a year (Jun/Dec), Arbetsförmedlingen rates every occupation's
   current recruitment situation and 5-year outlook, based on SCB
   register data and their own job-ad statistics. This file is that
   data, filtered to national rows and the fields this site uses — not
   scraped or estimated.

   Fields:
   - situation: "brist" (shortage — high demand, hard to fill), "balans"
     (balanced), "överskott" (surplus — more candidates than jobs), or
     "paradox" (mixed, varies a lot by region).
   - chances: near-term job openings — "stora" (many), "medelstora"
     (some), "små" (few).
   - trend: 5-year demand forecast — "öka" (rising), "vara oförändrad"
     (flat), "minska" (falling).
   - note: Arbetsförmedlingen's own one-sentence summary, in Swedish (kept
     as-is rather than translated, since it's a direct quote).

   To refresh: re-download the source JSON above, filter to
   lan === "00" and the current omgang, keep the fields below. */

const JOBS = [
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Administrativa assistenter",
    "ssyk": "Övriga kontorsassistenter och sekreterare",
    "situation": "överskott",
    "chances": "små",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för administrativa assistenter kännetecknas av överskott. På fem års sikt förväntas efterfrågan på administrativa assistenter vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Arbetsförmedlare",
    "ssyk": "Arbetsförmedlare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för arbetsförmedlare kännetecknas av balans. På fem års sikt förväntas efterfrågan på arbetsförmedlare öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Chefssekreterare och VD-assistenter",
    "ssyk": "Chefssekreterare och VD-assistenter m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för chefssekreterare och VD-assistenter kännetecknas av balans. På fem års sikt förväntas efterfrågan på chefssekreterare och VD-assistenter öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Controllrar",
    "ssyk": "Controller",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för controllrar kännetecknas av balans. På fem års sikt förväntas efterfrågan på controllrar öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Ekonomiassistenter",
    "ssyk": "Ekonomiassistenter m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för ekonomiassistenter kännetecknas av överskott. På fem års sikt förväntas efterfrågan på ekonomiassistenter vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Finansanalytiker och finansmäklare",
    "ssyk": "Finansanalytiker och investeringsrådgivare m.fl., Traders och fondförvaltare, Mäklare inom finans",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för finansanalytiker och finansmäklare kännetecknas av balans. På fem års sikt förväntas efterfrågan på finansanalytiker och finansmäklare öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Informatörer och kommunikatörer",
    "ssyk": "Informatörer, kommunikatörer och PR-specialister",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för informatörer och kommunikatörer kännetecknas av balans. På fem års sikt förväntas efterfrågan på informatörer och kommunikatörer vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Jurister",
    "ssyk": "Advokater, Domare, Åklagare, Affärs- och företagsjurister, Förvaltnings- och organisationsjurister, Övriga jurister",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för jurister kännetecknas av balans. På fem års sikt förväntas efterfrågan på jurister öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Kontorsreceptionister",
    "ssyk": "Kontorsreceptionister",
    "situation": "överskott",
    "chances": "små",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för kontorsreceptionister kännetecknas av överskott. På fem års sikt förväntas efterfrågan på kontorsreceptionister vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Lednings- och organisationsutvecklare",
    "ssyk": "Lednings- och organisationsutvecklare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för lednings- och organisationsutvecklare kännetecknas av balans. På fem års sikt förväntas efterfrågan på lednings- och organisationsutvecklare öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Löne- och personaladministratörer",
    "ssyk": "Löne- och personaladministratörer",
    "situation": "överskott",
    "chances": "små",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för löne- och personaladministratörer kännetecknas av överskott. På fem års sikt förväntas efterfrågan på löne- och personaladministratörer vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Medicinska sekreterare/vårdadministratörer",
    "ssyk": "Medicinska sekreterare, vårdadministratörer m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för medicinska sekreterare/vårdadministratörer kännetecknas av balans. På fem års sikt förväntas efterfrågan på medicinska sekreterare/vårdadministratörer öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Personal- och HR-specialister",
    "ssyk": "Personal- och HR-specialister",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för personal- och HR-specialister kännetecknas av balans. På fem års sikt förväntas efterfrågan på personal- och HR-specialister vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Planerare och utredare",
    "ssyk": "Planerare och utredare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för planerare och utredare kännetecknas av balans. På fem års sikt förväntas efterfrågan på planerare och utredare öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Redovisningsekonomer",
    "ssyk": "Redovisningsekonomer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för redovisningsekonomer kännetecknas av balans. På fem års sikt förväntas efterfrågan på redovisningsekonomer öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Revisorer",
    "ssyk": "Revisorer m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för revisorer kännetecknas av brist. På fem års sikt förväntas efterfrågan på revisorer öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Servicehandläggare med flera",
    "ssyk": "Övriga handläggare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för servicehandläggare med flera kännetecknas av balans. På fem års sikt förväntas efterfrågan på servicehandläggare med flera öka jämfört med idag."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Skolassistenter",
    "ssyk": "Skolassistenter m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för skolassistenter kännetecknas av balans. På fem års sikt förväntas efterfrågan på skolassistenter vara oförändrad."
  },
  {
    "area": "Administration, ekonomi, juridik",
    "name": "Studieadministratörer och utbildningshandläggare",
    "ssyk": "Övriga handläggare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för studieadministratörer och utbildningshandläggare kännetecknas av balans. På fem års sikt förväntas efterfrågan på studieadministratörer och utbildningshandläggare vara oförändrad."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Anläggningsarbetare (med yrkesbevis)",
    "ssyk": "Anläggningsarbetare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för anläggningsarbetare (med yrkesbevis) kännetecknas av brist. På fem års sikt förväntas efterfrågan på anläggningsarbetare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Anläggningsmaskinförare (med yrkesbevis)",
    "ssyk": "Anläggningsmaskinförare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för anläggningsmaskinförare (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på anläggningsmaskinförare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Betongarbetare (med yrkesbevis)",
    "ssyk": "Betongarbetare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för betongarbetare (med yrkesbevis) kännetecknas av brist. På fem års sikt förväntas efterfrågan på betongarbetare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Byggnads- och ventilationsplåtslagare (med yrkesbevis)",
    "ssyk": "Byggnads- och ventilationsplåtslagare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för byggnads- och ventilationsplåtslagare (med yrkesbevis) kännetecknas av brist. På fem års sikt förväntas efterfrågan på byggnads- och ventilationsplåtslagare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Civilingenjörer inom bygg och anläggning",
    "ssyk": "Civilingenjörsyrken inom bygg och anläggning",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för civilingenjörer inom bygg och anläggning kännetecknas av brist. På fem års sikt förväntas efterfrågan på civilingenjörer inom bygg och anläggning öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Golvläggare (med yrkesbevis)",
    "ssyk": "Golvläggare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för golvläggare (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på golvläggare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Gruv- och stenbrottsarbetare (med yrkesbevis)",
    "ssyk": "Gruv- och stenbrottsarbetare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för gruv- och stenbrottsarbetare (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på gruv- och stenbrottsarbetare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Ingenjörer och tekniker inom bygg och anläggning",
    "ssyk": "Ingenjörer och tekniker inom bygg och anläggning",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ingenjörer och tekniker inom bygg och anläggning kännetecknas av balans. På fem års sikt förväntas efterfrågan på ingenjörer och tekniker inom bygg och anläggning öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Isoleringsmontörer (med yrkesbevis)",
    "ssyk": "Isoleringsmontörer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för isoleringsmontörer (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på isoleringsmontörer (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Kyl- och värmepumpstekniker",
    "ssyk": "Kyl- och värmepumpstekniker m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för kyl- och värmepumpstekniker kännetecknas av balans. På fem års sikt förväntas efterfrågan på kyl- och värmepumpstekniker öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Murare och plattsättare (med yrkesbevis)",
    "ssyk": "Murare m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för murare och plattsättare (med yrkesbevis) kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på murare och plattsättare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Målare (med yrkesbevis)",
    "ssyk": "Målare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för målare (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på målare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Ställningsbyggare (med yrkesbevis/certifikat)",
    "ssyk": "Ställningsbyggare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ställningsbyggare (med yrkesbevis/certifikat) kännetecknas av brist. På fem års sikt förväntas efterfrågan på ställningsbyggare (med yrkesbevis/certifikat) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Takmontörer (med yrkesbevis)",
    "ssyk": "Takmontörer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för takmontörer (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på takmontörer (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "Träarbetare och snickare (med yrkesbevis)",
    "ssyk": "Träarbetare, snickare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för träarbetare och snickare (med yrkesbevis) kännetecknas av balans. På fem års sikt förväntas efterfrågan på träarbetare och snickare (med yrkesbevis) öka jämfört med idag."
  },
  {
    "area": "Bygg och anläggning",
    "name": "VVS-montörer (med certifikat)",
    "ssyk": "VVS-montörer m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för VVS-montörer (med certifikat) kännetecknas av brist. På fem års sikt förväntas efterfrågan på VVS-montörer (med certifikat) öka jämfört med idag."
  },
  {
    "area": "Data/IT",
    "name": "Drifttekniker inom IT",
    "ssyk": "Drifttekniker, IT",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för drifttekniker inom IT kännetecknas av balans. På fem års sikt förväntas efterfrågan på drifttekniker inom IT öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Data/IT",
    "name": "IT-strateger",
    "ssyk": "Övriga IT-specialister",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för IT-strateger kännetecknas av brist. På fem års sikt förväntas efterfrågan på IT-strateger öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Data/IT",
    "name": "IT-säkerhetsspecialister",
    "ssyk": "IT-säkerhetsspecialister",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för IT-säkerhetsspecialister kännetecknas av brist. På fem års sikt förväntas efterfrågan på IT-säkerhetsspecialister öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Data/IT",
    "name": "Mjukvaru- och systemutvecklare",
    "ssyk": "Mjukvaru- och systemutvecklare m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för mjukvaru- och systemutvecklare kännetecknas av brist. På fem års sikt förväntas efterfrågan på mjukvaru- och systemutvecklare öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering.",
    "detailPage": "occupations/mjukvaru-och-systemutvecklare.html"
  },
  {
    "area": "Data/IT",
    "name": "Nätverks- och systemtekniker",
    "ssyk": "Nätverks- och systemtekniker m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för nätverks- och systemtekniker kännetecknas av balans. På fem års sikt förväntas efterfrågan på nätverks- och systemtekniker öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Data/IT",
    "name": "Supporttekniker inom IT",
    "ssyk": "Supporttekniker, IT",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för supporttekniker inom IT kännetecknas av balans. På fem års sikt förväntas efterfrågan på supporttekniker inom IT vara oförändrad."
  },
  {
    "area": "Data/IT",
    "name": "Systemadministratörer",
    "ssyk": "Systemadministratörer",
    "situation": "överskott",
    "chances": "små",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för systemadministratörer kännetecknas av överskott. På fem års sikt förväntas efterfrågan på systemadministratörer vara oförändrad."
  },
  {
    "area": "Data/IT",
    "name": "Systemanalytiker och IT-arkitekter",
    "ssyk": "Systemanalytiker och IT-arkitekter m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för systemanalytiker och IT-arkitekter kännetecknas av brist. På fem års sikt förväntas efterfrågan på systemanalytiker och IT-arkitekter öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Data/IT",
    "name": "Systemförvaltare",
    "ssyk": "Systemförvaltare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för systemförvaltare kännetecknas av balans. På fem års sikt förväntas efterfrågan på systemförvaltare öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Banktjänstemän",
    "ssyk": "Banktjänstemän",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för banktjänstemän kännetecknas av balans. På fem års sikt förväntas efterfrågan på banktjänstemän vara oförändrad."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Bensinstationspersonal",
    "ssyk": "Bensinstationspersonal",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bensinstationspersonal kännetecknas av balans. På fem års sikt förväntas efterfrågan på bensinstationspersonal öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Butikssäljare (båt och motorfordon)",
    "ssyk": "Butikssäljare, fackhandel",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för butikssäljare (båt och motorfordon) kännetecknas av överskott. På fem års sikt förväntas efterfrågan på butikssäljare (båt och motorfordon) öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Butikssäljare inom dagligvaruhandel",
    "ssyk": "Butikssäljare, dagligvaror",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för butikssäljare inom dagligvaruhandel kännetecknas av överskott. På fem års sikt förväntas efterfrågan på butikssäljare inom dagligvaruhandel öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Butikssäljare inom fackhandel",
    "ssyk": "Butikssäljare, fackhandel",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för butikssäljare inom fackhandel kännetecknas av överskott. På fem års sikt förväntas efterfrågan på butikssäljare inom fackhandel öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Florister",
    "ssyk": "Butikssäljare, fackhandel",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för florister kännetecknas av överskott. På fem års sikt förväntas efterfrågan på florister öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Företagssäljare",
    "ssyk": "Företagssäljare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för företagssäljare kännetecknas av brist. På fem års sikt förväntas efterfrågan på företagssäljare öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Inköpare och upphandlare",
    "ssyk": "Inköpare och upphandlare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för inköpare och upphandlare kännetecknas av brist. På fem års sikt förväntas efterfrågan på inköpare och upphandlare öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Kassapersonal",
    "ssyk": "Kassapersonal m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för kassapersonal kännetecknas av överskott. På fem års sikt förväntas efterfrågan på kassapersonal vara oförändrad."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Kundtjänstpersonal",
    "ssyk": "Kundtjänstpersonal",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för kundtjänstpersonal kännetecknas av balans. På fem års sikt förväntas efterfrågan på kundtjänstpersonal vara oförändrad."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Marknads- och försäljningsassistenter",
    "ssyk": "Marknads- och försäljningsassistenter",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för marknads- och försäljningsassistenter kännetecknas av balans. På fem års sikt förväntas efterfrågan på marknads- och försäljningsassistenter öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Marknadsanalytiker och marknadsförare",
    "ssyk": "Marknadsanalytiker och marknadsförare m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för marknadsanalytiker och marknadsförare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på marknadsanalytiker och marknadsförare öka jämfört med idag."
  },
  {
    "area": "Försäljning, inköp, marknadsföring",
    "name": "Ordersamordnare",
    "ssyk": "Ordersamordnare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ordersamordnare kännetecknas av balans. På fem års sikt förväntas efterfrågan på ordersamordnare öka jämfört med idag."
  },
  {
    "area": "Hantverksyrken",
    "name": "Bagare och konditorer",
    "ssyk": "Bagare och konditorer",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bagare och konditorer kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket, personer som är arbetslösa och söker jobb inom yrket samt personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på bagare och konditorer öka jämfört med idag."
  },
  {
    "area": "Hantverksyrken",
    "name": "Fin-, inrednings- och möbelsnickare",
    "ssyk": "Fin-, inrednings- och möbelsnickare",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fin-, inrednings- och möbelsnickare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på fin-, inrednings- och möbelsnickare öka jämfört med idag."
  },
  {
    "area": "Hantverksyrken",
    "name": "Skräddare och ateljésömmerskor",
    "ssyk": "Skräddare och ateljésömmerskor m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för skräddare och ateljésömmerskor kännetecknas av överskott. På fem års sikt förväntas efterfrågan på skräddare och ateljésömmerskor öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Bartendrar",
    "ssyk": "Bartendrar",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bartendrar kännetecknas av balans. På fem års sikt förväntas efterfrågan på bartendrar öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Hotellreceptionister",
    "ssyk": "Hotellreceptionister m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för hotellreceptionister kännetecknas av balans. På fem års sikt förväntas efterfrågan på hotellreceptionister öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Hovmästare",
    "ssyk": "Hovmästare och servitörer",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för hovmästare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket, personer som är arbetslösa och söker jobb inom yrket samt personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på hovmästare öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Kockar",
    "ssyk": "Kockar och kallskänkor",
    "situation": "brist",
    "chances": "stora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för kockar kännetecknas av brist. På fem års sikt förväntas efterfrågan på kockar vara oförändrad."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Köksmästare och souschefer",
    "ssyk": "Köksmästare och souschefer",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för köksmästare och souschefer kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på köksmästare och souschefer öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Pizzabagare",
    "ssyk": "Pizzabagare m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för pizzabagare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket samt personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på pizzabagare öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Restaurang- och köksbiträden",
    "ssyk": "Restaurang- och köksbiträden m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för restaurang- och köksbiträden kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket, personer som är arbetslösa och söker jobb inom yrket samt personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på restaurang- och köksbiträden öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Servitörer",
    "ssyk": "Hovmästare och servitörer",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för servitörer kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket, personer som är arbetslösa och söker jobb inom yrket samt personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på servitörer öka jämfört med idag."
  },
  {
    "area": "Hotell, restaurang, storhushåll",
    "name": "Snabbmatskockar och grillbiträden",
    "ssyk": "Pizzabagare m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för snabbmatskockar och grillbiträden kännetecknas av överskott. På fem års sikt förväntas efterfrågan på snabbmatskockar och grillbiträden öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Apotekare",
    "ssyk": "Apotekare",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för apotekare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på apotekare öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Arbetsterapeuter",
    "ssyk": "Arbetsterapeuter",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för arbetsterapeuter kännetecknas av brist. På fem års sikt förväntas efterfrågan på arbetsterapeuter öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Barnmorskor",
    "ssyk": "Barnmorskor",
    "situation": "paradox",
    "chances": "stora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för barnmorskor kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på barnmorskor vara oförändrad."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Biomedicinska analytiker",
    "ssyk": "Biomedicinska analytiker m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för biomedicinska analytiker kännetecknas av balans. På fem års sikt förväntas efterfrågan på biomedicinska analytiker öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Distriktssköterskor",
    "ssyk": "Distriktssköterskor",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för distriktssköterskor kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på distriktssköterskor öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Djursjukskötare",
    "ssyk": "Djursjukskötare m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för djursjukskötare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på djursjukskötare öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Fysioterapeuter och sjukgymnaster",
    "ssyk": "Fysioterapeuter och sjukgymnaster",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fysioterapeuter och sjukgymnaster kännetecknas av brist. På fem års sikt förväntas efterfrågan på fysioterapeuter och sjukgymnaster öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Grundutbildade sjuksköterskor",
    "ssyk": "Grundutbildade sjuksköterskor",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för grundutbildade sjuksköterskor kännetecknas av brist. På fem års sikt förväntas efterfrågan på grundutbildade sjuksköterskor öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Läkare (exklusive AT-, ST- och specialistläkare)",
    "ssyk": "Övriga läkare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för läkare (exklusive AT-, ST- och specialistläkare) kännetecknas av brist. På fem års sikt förväntas efterfrågan på läkare (exklusive AT-, ST- och specialistläkare) öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Operationssjuksköterskor",
    "ssyk": "Operationssjuksköterskor",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för operationssjuksköterskor kännetecknas av brist. På fem års sikt förväntas efterfrågan på operationssjuksköterskor öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Optiker",
    "ssyk": "Optiker",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för optiker kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på optiker öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Psykiatrisjuksköterskor",
    "ssyk": "Psykiatrisjuksköterskor",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för psykiatrisjuksköterskor kännetecknas av brist. På fem års sikt förväntas efterfrågan på psykiatrisjuksköterskor öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Psykologer",
    "ssyk": "Psykologer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för psykologer kännetecknas av balans. På fem års sikt förväntas efterfrågan på psykologer öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Receptarier",
    "ssyk": "Receptarier",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för receptarier kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på receptarier öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Röntgensjuksköterskor",
    "ssyk": "Röntgensjuksköterskor",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för röntgensjuksköterskor kännetecknas av brist. På fem års sikt förväntas efterfrågan på röntgensjuksköterskor öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "ST-läkare",
    "ssyk": "ST-läkare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ST-läkare kännetecknas av brist. På fem års sikt förväntas efterfrågan på ST-läkare öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Sjuksköterskor inom akutsjukvård",
    "ssyk": "Ambulanssjuksköterskor m.fl., Intensivvårdssjuksköterskor",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för sjuksköterskor inom akutsjukvård kännetecknas av brist. På fem års sikt förväntas efterfrågan på sjuksköterskor inom akutsjukvård öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Sjuksköterskor inom vård av äldre",
    "ssyk": "Geriatriksjuksköterskor",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för sjuksköterskor inom vård av äldre kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på sjuksköterskor inom vård av äldre öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Skolsköterskor",
    "ssyk": "Skolsköterskor",
    "situation": "paradox",
    "chances": "stora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för skolsköterskor kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på skolsköterskor vara oförändrad."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Skötare",
    "ssyk": "Skötare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för skötare kännetecknas av brist. På fem års sikt förväntas efterfrågan på skötare öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Specialistläkare",
    "ssyk": "Specialistläkare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för specialistläkare kännetecknas av brist. På fem års sikt förväntas efterfrågan på specialistläkare öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Tandhygienister",
    "ssyk": "Tandhygienister",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för tandhygienister kännetecknas av brist. På fem års sikt förväntas efterfrågan på tandhygienister öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Tandläkare",
    "ssyk": "Tandläkare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för tandläkare kännetecknas av brist. På fem års sikt förväntas efterfrågan på tandläkare öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Tandsköterskor",
    "ssyk": "Tandsköterskor",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för tandsköterskor kännetecknas av brist. På fem års sikt förväntas efterfrågan på tandsköterskor öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Undersköterskor inom hemtjänst, hemsjukvård, äldreboende och habilitering",
    "ssyk": "Undersköterskor, hemtjänst, hemsjukvård, äldreboende och habilitering",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för undersköterskor inom hemtjänst, hemsjukvård, äldreboende och habilitering kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på undersköterskor inom hemtjänst, hemsjukvård, äldreboende och habilitering öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Undersköterskor inom vård- och specialavdelningar och mottagningar",
    "ssyk": "Undersköterskor, vård- och specialavdelning och mottagning",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för undersköterskor inom vård- och specialavdelningar och mottagningar kännetecknas av balans. På fem års sikt förväntas efterfrågan på undersköterskor inom vård- och specialavdelningar och mottagningar öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Veterinärer",
    "ssyk": "Veterinärer",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för veterinärer kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på veterinärer öka jämfört med idag."
  },
  {
    "area": "Hälso- och sjukvård",
    "name": "Vårdbiträden",
    "ssyk": "Vårdbiträden",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för vårdbiträden kännetecknas av överskott. På fem års sikt förväntas efterfrågan på vårdbiträden öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Bil- och tunnplåtslagare",
    "ssyk": "Tunnplåtslagare",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bil- och tunnplåtslagare kännetecknas av brist. På fem års sikt förväntas efterfrågan på bil- och tunnplåtslagare öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "CNC- och maskinoperatörer inom metall",
    "ssyk": "Maskinställare och maskinoperatörer, metallarbete",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för CNC- och maskinoperatörer inom metall kännetecknas av brist. På fem års sikt förväntas efterfrågan på CNC- och maskinoperatörer inom metall öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "CNC- och maskinoperatörer inom trä",
    "ssyk": "Maskinsnickare och maskinoperatörer, träindustri",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för CNC- och maskinoperatörer inom trä kännetecknas av balans. På fem års sikt förväntas efterfrågan på CNC- och maskinoperatörer inom trä öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Fordonsmontörer",
    "ssyk": "Fordonsmontörer",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fordonsmontörer kännetecknas av överskott. På fem års sikt förväntas efterfrågan på fordonsmontörer öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Lackerare och industrimålare",
    "ssyk": "Lackerare och industrimålare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för lackerare och industrimålare kännetecknas av balans. På fem års sikt förväntas efterfrågan på lackerare och industrimålare öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Maskinoperatörer inom livsmedel",
    "ssyk": "Maskinoperatörer, kött- och fiskberedningsindustri, Maskinoperatörer, mejeri, Maskinoperatörer, kvarn-, bageri- och konfektyrindustri, Övriga maskinoperatörer, livsmedelsindustri m.m.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för maskinoperatörer inom livsmedel kännetecknas av balans. På fem års sikt förväntas efterfrågan på maskinoperatörer inom livsmedel öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Maskinoperatörer inom plast",
    "ssyk": "Maskinoperatörer, plastindustri",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för maskinoperatörer inom plast kännetecknas av balans. På fem års sikt förväntas efterfrågan på maskinoperatörer inom plast öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Montörer av elektrisk och elektronisk utrustning",
    "ssyk": "Montörer, elektrisk och elektronisk utrustning",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för montörer av elektrisk och elektronisk utrustning kännetecknas av balans. På fem års sikt förväntas efterfrågan på montörer av elektrisk och elektronisk utrustning öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Montörer av metall-, gummi- och plastprodukter",
    "ssyk": "Montörer, metall-, gummi- och plastprodukter",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för montörer av metall-, gummi- och plastprodukter kännetecknas av överskott. På fem års sikt förväntas efterfrågan på montörer av metall-, gummi- och plastprodukter öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Montörer av träprodukter",
    "ssyk": "Montörer, träprodukter",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för montörer av träprodukter kännetecknas av överskott. På fem års sikt förväntas efterfrågan på montörer av träprodukter öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Operatörer inom sågverk",
    "ssyk": "Operatörer inom sågverk, hyvleri och plywood m.m., Maskinoperatörer inom ytbehandling, trä",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för operatörer inom sågverk kännetecknas av balans. På fem års sikt förväntas efterfrågan på operatörer inom sågverk öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Processoperatörer inom metall",
    "ssyk": "Övriga maskin- och processoperatörer vid stål- och metallverk",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för processoperatörer inom metall kännetecknas av balans. På fem års sikt förväntas efterfrågan på processoperatörer inom metall öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Processoperatörer inom papper och pappersmassa",
    "ssyk": "Processoperatörer, pappersmassa, Processoperatörer, papper",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för processoperatörer inom papper och pappersmassa kännetecknas av balans. På fem års sikt förväntas efterfrågan på processoperatörer inom papper och pappersmassa öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Slaktare",
    "ssyk": "Slaktare och styckare m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för slaktare kännetecknas av brist. På fem års sikt förväntas efterfrågan på slaktare öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Svetsare och gasskärare",
    "ssyk": "Svetsare och gasskärare",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för svetsare och gasskärare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på svetsare och gasskärare öka jämfört med idag."
  },
  {
    "area": "Industriell tillverkning",
    "name": "Tvätteriarbetare",
    "ssyk": "Maskinoperatörer, blekning, färgning och tvättning",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för tvätteriarbetare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på tvätteriarbetare öka jämfört med idag."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Bilmekaniker",
    "ssyk": "Motorfordonsmekaniker och fordonsreparatörer",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bilmekaniker kännetecknas av brist. På fem års sikt förväntas efterfrågan på bilmekaniker öka jämfört med idag."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Buss- och lastbilsmekaniker",
    "ssyk": "Motorfordonsmekaniker och fordonsreparatörer",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för buss- och lastbilsmekaniker kännetecknas av brist. På fem års sikt förväntas efterfrågan på buss- och lastbilsmekaniker öka jämfört med idag."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Distributionselektriker",
    "ssyk": "Distributionselektriker",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för distributionselektriker kännetecknas av brist. På fem års sikt förväntas efterfrågan på distributionselektriker öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Drifttekniker vid värme- och vattenverk",
    "ssyk": "Drifttekniker vid värme- och vattenverk",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för drifttekniker vid värme- och vattenverk kännetecknas av brist. På fem års sikt förväntas efterfrågan på drifttekniker vid värme- och vattenverk öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Fastighetsskötare",
    "ssyk": "Fastighetsskötare",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fastighetsskötare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på fastighetsskötare öka jämfört med idag."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Fastighetstekniker",
    "ssyk": "Fastighetsskötare",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fastighetstekniker kännetecknas av överskott. På fem års sikt förväntas efterfrågan på fastighetstekniker öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Industrielektriker (med certifikat)",
    "ssyk": "Industrielektriker",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för industrielektriker (med certifikat) kännetecknas av brist. På fem års sikt förväntas efterfrågan på industrielektriker (med certifikat) öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Installations- och serviceelektriker (med certifikat)",
    "ssyk": "Installations- och serviceelektriker",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för installations- och serviceelektriker (med certifikat) kännetecknas av brist. På fem års sikt förväntas efterfrågan på installations- och serviceelektriker (med certifikat) öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Larm- och servicetekniker inom elektronik",
    "ssyk": "Elektronikreparatörer och kommunikationselektriker m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för larm- och servicetekniker inom elektronik kännetecknas av balans. På fem års sikt förväntas efterfrågan på larm- och servicetekniker inom elektronik öka jämfört med idag."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Underhållsmekaniker och maskinreparatörer",
    "ssyk": "Underhållsmekaniker och maskinreparatörer",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för underhållsmekaniker och maskinreparatörer kännetecknas av brist. På fem års sikt förväntas efterfrågan på underhållsmekaniker och maskinreparatörer öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Installation, drift, underhåll",
    "name": "Vaktmästare",
    "ssyk": "Fastighetsskötare",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för vaktmästare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på vaktmästare öka jämfört med idag."
  },
  {
    "area": "Kropps- och skönhetsvård",
    "name": "Frisörer",
    "ssyk": "Frisörer",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för frisörer kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket samt personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på frisörer öka jämfört med idag."
  },
  {
    "area": "Kropps- och skönhetsvård",
    "name": "Massörer och massageterapeuter",
    "ssyk": "Massörer och massageterapeuter",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för massörer och massageterapeuter kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket samt personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på massörer och massageterapeuter öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Arkivarier",
    "ssyk": "Bibliotekarier och arkivarier",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för arkivarier kännetecknas av balans. På fem års sikt förväntas efterfrågan på arkivarier öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Bibliotekarier",
    "ssyk": "Bibliotekarier och arkivarier",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bibliotekarier kännetecknas av balans. På fem års sikt förväntas efterfrågan på bibliotekarier öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Kultur, media, design",
    "name": "Designers inom spel och digitala medier",
    "ssyk": "Designer inom spel och digitala medier",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för designers inom spel och digitala medier kännetecknas av överskott. På fem års sikt förväntas efterfrågan på designers inom spel och digitala medier öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Grafiska formgivare",
    "ssyk": "Grafiska formgivare m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för grafiska formgivare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på grafiska formgivare öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Journalister",
    "ssyk": "Journalister m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för journalister kännetecknas av överskott. På fem års sikt förväntas efterfrågan på journalister öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Kantorer och organister",
    "ssyk": "Musiker, sångare och kompositörer",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för kantorer och organister kännetecknas av brist. På fem års sikt förväntas efterfrågan på kantorer och organister öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Ljus-, ljud- och bildtekniker",
    "ssyk": "Bild- och sändningstekniker, Ljus-, ljud- och scentekniker",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ljus-, ljud- och bildtekniker kännetecknas av överskott. På fem års sikt förväntas efterfrågan på ljus-, ljud- och bildtekniker öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Musei- och konstintendenter",
    "ssyk": "Museiintendenter m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för musei- och konstintendenter kännetecknas av överskott. På fem års sikt förväntas efterfrågan på musei- och konstintendenter öka jämfört med idag."
  },
  {
    "area": "Kultur, media, design",
    "name": "Producenter och projektledare inom film och teater",
    "ssyk": "Regissörer och producenter av film, teater m.m.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för producenter och projektledare inom film och teater kännetecknas av överskott. På fem års sikt förväntas efterfrågan på producenter och projektledare inom film och teater öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Förare av jordbruks- och skogsmaskiner",
    "ssyk": "Förare av jordbruks- och skogsmaskiner",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för förare av jordbruks- och skogsmaskiner kännetecknas av brist. På fem års sikt förväntas efterfrågan på förare av jordbruks- och skogsmaskiner öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Odlare av jordbruksväxter, frukt och bär",
    "ssyk": "Odlare av jordbruksväxter, frukt och bär",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för odlare av jordbruksväxter, frukt och bär kännetecknas av balans. På fem års sikt förväntas efterfrågan på odlare av jordbruksväxter, frukt och bär öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Skogsarbetare",
    "ssyk": "Skogsarbetare",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för skogsarbetare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på skogsarbetare öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Specialister och rådgivare inom skogsbruk",
    "ssyk": "Specialister och rådgivare inom skogsbruk",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för specialister och rådgivare inom skogsbruk kännetecknas av balans. På fem års sikt förväntas efterfrågan på specialister och rådgivare inom skogsbruk öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Naturbruk",
    "name": "Trädgårdsanläggare",
    "ssyk": "Trädgårdsanläggare m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för trädgårdsanläggare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på trädgårdsanläggare öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Trädgårdsarbetare, skötsel utemiljö",
    "ssyk": "Trädgårdsanläggare m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för trädgårdsarbetare, skötsel utemiljö kännetecknas av överskott. På fem års sikt förväntas efterfrågan på trädgårdsarbetare, skötsel utemiljö öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Trädgårdsodlare",
    "ssyk": "Trädgårdsodlare",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för trädgårdsodlare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på trädgårdsodlare öka jämfört med idag."
  },
  {
    "area": "Naturbruk",
    "name": "Uppfödare och skötare av lantbruksdjur",
    "ssyk": "Uppfödare och skötare av lantbrukets husdjur",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för uppfödare och skötare av lantbruksdjur kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på uppfödare och skötare av lantbruksdjur öka jämfört med idag."
  },
  {
    "area": "Naturvetenskapligt arbete",
    "name": "Cell- och molekylärbiologer",
    "ssyk": "Cell- och molekylärbiologer m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för cell- och molekylärbiologer kännetecknas av överskott. På fem års sikt förväntas efterfrågan på cell- och molekylärbiologer öka jämfört med idag."
  },
  {
    "area": "Naturvetenskapligt arbete",
    "name": "Kemister",
    "ssyk": "Kemister",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för kemister kännetecknas av överskott. På fem års sikt förväntas efterfrågan på kemister öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Naturvetenskapligt arbete",
    "name": "Miljö- och hälsoskyddsinspektörer",
    "ssyk": "Miljö- och hälsoskyddsinspektörer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för miljö- och hälsoskyddsinspektörer kännetecknas av balans. På fem års sikt förväntas efterfrågan på miljö- och hälsoskyddsinspektörer öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Naturvetenskapligt arbete",
    "name": "Specialister inom miljöskydd och miljöteknik",
    "ssyk": "Specialister inom miljöskydd och miljöteknik",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för specialister inom miljöskydd och miljöteknik kännetecknas av överskott. På fem års sikt förväntas efterfrågan på specialister inom miljöskydd och miljöteknik öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Elevassistenter",
    "ssyk": "Elevassistenter m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "minska",
    "note": "Nationellt bedöms rekryteringssituationen för elevassistenter kännetecknas av överskott. På fem års sikt förväntas efterfrågan på elevassistenter minska jämfört med idag, delvis till följd av minskande barnkullar."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Fritidspedagoger",
    "ssyk": "Fritidspedagoger",
    "situation": "brist",
    "chances": "stora",
    "trend": "minska",
    "note": "Nationellt bedöms rekryteringssituationen för fritidspedagoger kännetecknas av brist. På fem års sikt förväntas efterfrågan på fritidspedagoger minska jämfört med idag, delvis till följd av minskande barnkullar."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Förskollärare",
    "ssyk": "Förskollärare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "minska",
    "note": "Nationellt bedöms rekryteringssituationen för förskollärare kännetecknas av balans. På fem års sikt förväntas efterfrågan på förskollärare minska jämfört med idag, delvis till följd av minskande barnkullar."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Grundskollärare",
    "ssyk": "Grundskollärare",
    "situation": "brist",
    "chances": "stora",
    "trend": "minska",
    "note": "Nationellt bedöms rekryteringssituationen för grundskollärare kännetecknas av brist. På fem års sikt förväntas efterfrågan på grundskollärare minska jämfört med idag, delvis till följd av minskande barnkullar."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Gymnasielärare",
    "ssyk": "Gymnasielärare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för gymnasielärare kännetecknas av balans. På fem års sikt förväntas efterfrågan på gymnasielärare vara oförändrad."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Lärare i yrkesämnen",
    "ssyk": "Lärare i yrkesämnen",
    "situation": "paradox",
    "chances": "stora",
    "trend": "minska",
    "note": "Nationellt bedöms rekryteringssituationen för lärare i yrkesämnen kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på lärare i yrkesämnen minska jämfört med idag."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Pedagoger inom kultur",
    "ssyk": "Övriga pedagoger med teoretisk specialistkompetens",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för pedagoger inom kultur kännetecknas av balans. På fem års sikt förväntas efterfrågan på pedagoger inom kultur vara oförändrad."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "SFI-lärare",
    "ssyk": "Övriga pedagoger med teoretisk specialistkompetens",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för SFI-lärare kännetecknas av balans. På fem års sikt förväntas efterfrågan på SFI-lärare vara oförändrad."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Speciallärare och specialpedagoger",
    "ssyk": "Speciallärare och specialpedagoger m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för speciallärare och specialpedagoger kännetecknas av brist. På fem års sikt förväntas efterfrågan på speciallärare och specialpedagoger vara oförändrad."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Studie- och yrkesvägledare",
    "ssyk": "Studie- och yrkesvägledare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för studie- och yrkesvägledare kännetecknas av balans. På fem års sikt förväntas efterfrågan på studie- och yrkesvägledare vara oförändrad."
  },
  {
    "area": "Pedagogiskt arbete",
    "name": "Trafiklärare",
    "ssyk": "Trafiklärare",
    "situation": "brist",
    "chances": "stora",
    "trend": "vara oförändrad",
    "note": "Nationellt bedöms rekryteringssituationen för trafiklärare kännetecknas av brist. På fem års sikt förväntas efterfrågan på trafiklärare vara oförändrad."
  },
  {
    "area": "Sanering och renhållning",
    "name": "Bilrekonditionerare",
    "ssyk": "Bilrekonditionerare, fönsterputsare m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bilrekonditionerare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på bilrekonditionerare öka jämfört med idag."
  },
  {
    "area": "Sanering och renhållning",
    "name": "Renhållnings- och återvinningsarbetare",
    "ssyk": "Renhållnings- och återvinningsarbetare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för renhållnings- och återvinningsarbetare kännetecknas av balans. På fem års sikt förväntas efterfrågan på renhållnings- och återvinningsarbetare öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Sanering och renhållning",
    "name": "Saneringsarbetare",
    "ssyk": "Saneringsarbetare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för saneringsarbetare kännetecknas av balans. På fem års sikt förväntas efterfrågan på saneringsarbetare öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Sanering och renhållning",
    "name": "Städare",
    "ssyk": "Städare",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för städare kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket samt personer som är arbetslösa och söker jobb inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på städare öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Barnskötare",
    "ssyk": "Barnskötare",
    "situation": "överskott",
    "chances": "små",
    "trend": "minska",
    "note": "Nationellt bedöms rekryteringssituationen för barnskötare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på barnskötare minska jämfört med idag, delvis till följd av minskande barnkullar."
  },
  {
    "area": "Socialt arbete",
    "name": "Behandlingsassistenter och socialpedagoger",
    "ssyk": "Behandlingsassistenter och socialpedagoger m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för behandlingsassistenter och socialpedagoger kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på behandlingsassistenter och socialpedagoger öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Biståndsbedömare",
    "ssyk": "Biståndsbedömare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för biståndsbedömare kännetecknas av balans. På fem års sikt förväntas efterfrågan på biståndsbedömare öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Socialt arbete",
    "name": "Diakoner",
    "ssyk": "Diakoner",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för diakoner kännetecknas av brist. På fem års sikt förväntas efterfrågan på diakoner öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Socialt arbete",
    "name": "Friskvårdskonsulter och hälsopedagoger",
    "ssyk": "Friskvårdskonsulenter och hälsopedagoger m.fl.",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för friskvårdskonsulter och hälsopedagoger kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som är arbetslösa och söker jobb inom yrket samt personer som nyligen har arbetat inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på friskvårdskonsulter och hälsopedagoger öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Fritidsledare",
    "ssyk": "Fritidsledare m.fl.",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fritidsledare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på fritidsledare öka jämfört med idag, delvis till följd av ökande barnkullar."
  },
  {
    "area": "Socialt arbete",
    "name": "Frivårds- och integrationshandläggare",
    "ssyk": "Övriga yrken inom socialt arbete",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för frivårds- och integrationshandläggare kännetecknas av balans. På fem års sikt förväntas efterfrågan på frivårds- och integrationshandläggare öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Kuratorer",
    "ssyk": "Kuratorer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för kuratorer kännetecknas av balans. På fem års sikt förväntas efterfrågan på kuratorer öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Personliga assistenter",
    "ssyk": "Personliga assistenter",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för personliga assistenter kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på personliga assistenter öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Socialsekreterare",
    "ssyk": "Socialsekreterare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för socialsekreterare kännetecknas av balans. På fem års sikt förväntas efterfrågan på socialsekreterare öka jämfört med idag."
  },
  {
    "area": "Socialt arbete",
    "name": "Vårdare och stödassistenter",
    "ssyk": "Vårdare, boendestödjare",
    "situation": "paradox",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för vårdare och stödassistenter kännetecknas av rekryteringssvårigheter. Det finns samtidigt ett potentiellt utbud av personer som arbetar deltid inom yrket. Brist på arbetskraft kan förekomma. På fem års sikt förväntas efterfrågan på vårdare och stödassistenter öka jämfört med idag, delvis till följd av en åldrande befolkning."
  },
  {
    "area": "Säkerhetsarbete",
    "name": "Brandmän",
    "ssyk": "Brandmän",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för brandmän kännetecknas av balans. På fem års sikt förväntas efterfrågan på brandmän öka jämfört med idag."
  },
  {
    "area": "Säkerhetsarbete",
    "name": "Kriminalvårdare",
    "ssyk": "Kriminalvårdare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för kriminalvårdare kännetecknas av balans. På fem års sikt förväntas efterfrågan på kriminalvårdare öka jämfört med idag."
  },
  {
    "area": "Säkerhetsarbete",
    "name": "Larmoperatörer",
    "ssyk": "SOS-operatörer m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för larmoperatörer kännetecknas av balans. På fem års sikt förväntas efterfrågan på larmoperatörer öka jämfört med idag."
  },
  {
    "area": "Säkerhetsarbete",
    "name": "Säkerhetsrådgivare och inspektörer",
    "ssyk": "Säkerhetsinspektörer m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för säkerhetsrådgivare och inspektörer kännetecknas av brist. På fem års sikt förväntas efterfrågan på säkerhetsrådgivare och inspektörer öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Säkerhetsarbete",
    "name": "Väktare och ordningsvakter",
    "ssyk": "Väktare och ordningsvakter",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för väktare och ordningsvakter kännetecknas av balans. På fem års sikt förväntas efterfrågan på väktare och ordningsvakter öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Civilingenjörer inom elektroteknik",
    "ssyk": "Civilingenjörsyrken inom elektroteknik",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för civilingenjörer inom elektroteknik kännetecknas av brist. På fem års sikt förväntas efterfrågan på civilingenjörer inom elektroteknik öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Civilingenjörer inom elkraft",
    "ssyk": "Civilingenjörsyrken inom elektroteknik",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för civilingenjörer inom elkraft kännetecknas av brist. På fem års sikt förväntas efterfrågan på civilingenjörer inom elkraft öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Civilingenjörer inom gruvteknik och metallurgi",
    "ssyk": "Civilingenjörsyrken inom gruvteknik och metallurgi",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för civilingenjörer inom gruvteknik och metallurgi kännetecknas av brist. På fem års sikt förväntas efterfrågan på civilingenjörer inom gruvteknik och metallurgi öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Civilingenjörer inom logistik och produktionsplanering",
    "ssyk": "Civilingenjörsyrken inom logistik och produktionsplanering",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för civilingenjörer inom logistik och produktionsplanering kännetecknas av balans. På fem års sikt förväntas efterfrågan på civilingenjörer inom logistik och produktionsplanering öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Civilingenjörer inom maskinteknik",
    "ssyk": "Civilingenjörsyrken inom maskinteknik",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för civilingenjörer inom maskinteknik kännetecknas av brist. På fem års sikt förväntas efterfrågan på civilingenjörer inom maskinteknik öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Fastighetsförvaltare",
    "ssyk": "Fastighetsförvaltare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fastighetsförvaltare kännetecknas av balans. På fem års sikt förväntas efterfrågan på fastighetsförvaltare öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "GIS- och kartingenjörer",
    "ssyk": "GIS- och kartingenjörer",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för GIS- och kartingenjörer kännetecknas av överskott. På fem års sikt förväntas efterfrågan på GIS- och kartingenjörer öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Ingenjörer och tekniker inom elektroteknik",
    "ssyk": "Ingenjörer och tekniker inom elektroteknik",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ingenjörer och tekniker inom elektroteknik kännetecknas av brist. På fem års sikt förväntas efterfrågan på ingenjörer och tekniker inom elektroteknik öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Ingenjörer och tekniker inom elkraft",
    "ssyk": "Ingenjörer och tekniker inom elektroteknik",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ingenjörer och tekniker inom elkraft kännetecknas av brist. På fem års sikt förväntas efterfrågan på ingenjörer och tekniker inom elkraft öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Ingenjörer och tekniker inom kemi och kemiteknik",
    "ssyk": "Ingenjörer och tekniker inom kemi och kemiteknik",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ingenjörer och tekniker inom kemi och kemiteknik kännetecknas av överskott. På fem års sikt förväntas efterfrågan på ingenjörer och tekniker inom kemi och kemiteknik öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Ingenjörer och tekniker inom maskinteknik",
    "ssyk": "Ingenjörer och tekniker inom maskinteknik",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för ingenjörer och tekniker inom maskinteknik kännetecknas av balans. På fem års sikt förväntas efterfrågan på ingenjörer och tekniker inom maskinteknik öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för grön omställning."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Laboratorieingenjörer",
    "ssyk": "Laboratorieingenjörer",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för laboratorieingenjörer kännetecknas av balans. På fem års sikt förväntas efterfrågan på laboratorieingenjörer öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Lantmätare",
    "ssyk": "Lantmätare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för lantmätare kännetecknas av balans. På fem års sikt förväntas efterfrågan på lantmätare öka jämfört med idag."
  },
  {
    "area": "Tekniskt arbete",
    "name": "Planeringsarkitekter",
    "ssyk": "Planeringsarkitekter m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för planeringsarkitekter kännetecknas av balans. På fem års sikt förväntas efterfrågan på planeringsarkitekter öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Budförare",
    "ssyk": "Övriga bil-, motorcykel- och cykelförare",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för budförare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på budförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Buss- och spårvagnsförare",
    "ssyk": "Buss- och spårvagnsförare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för buss- och spårvagnsförare kännetecknas av balans. På fem års sikt förväntas efterfrågan på buss- och spårvagnsförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Bygg- och anläggningsförare",
    "ssyk": "Lastbilsförare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för bygg- och anläggningsförare kännetecknas av balans. På fem års sikt förväntas efterfrågan på bygg- och anläggningsförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Fartygsbefäl",
    "ssyk": "Fartygsbefäl m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fartygsbefäl kännetecknas av brist. På fem års sikt förväntas efterfrågan på fartygsbefäl öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Fjärrbilsförare",
    "ssyk": "Lastbilsförare m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för fjärrbilsförare kännetecknas av brist. På fem års sikt förväntas efterfrågan på fjärrbilsförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Kranbilsförare",
    "ssyk": "Lastbilsförare m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för kranbilsförare kännetecknas av brist. På fem års sikt förväntas efterfrågan på kranbilsförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Lager- och terminalpersonal",
    "ssyk": "Lager- och terminalpersonal",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för lager- och terminalpersonal kännetecknas av överskott. På fem års sikt förväntas efterfrågan på lager- och terminalpersonal öka jämfört med idag, delvis till följd av ökat behov av kompetenser som krävs för teknisk utveckling och automatisering."
  },
  {
    "area": "Transport",
    "name": "Lastbilsförare",
    "ssyk": "Lastbilsförare m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för lastbilsförare kännetecknas av brist. På fem års sikt förväntas efterfrågan på lastbilsförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Lokförare",
    "ssyk": "Lokförare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för lokförare kännetecknas av balans. På fem års sikt förväntas efterfrågan på lokförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Matroser och jungmän",
    "ssyk": "Matroser och jungmän m.fl.",
    "situation": "brist",
    "chances": "stora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för matroser och jungmän kännetecknas av brist. På fem års sikt förväntas efterfrågan på matroser och jungmän öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Taxiförare",
    "ssyk": "Taxiförare m.fl.",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för taxiförare kännetecknas av balans. På fem års sikt förväntas efterfrågan på taxiförare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Transportledare och transportsamordnare",
    "ssyk": "Transportledare och transportsamordnare",
    "situation": "balans",
    "chances": "medelstora",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för transportledare och transportsamordnare kännetecknas av balans. På fem års sikt förväntas efterfrågan på transportledare och transportsamordnare öka jämfört med idag."
  },
  {
    "area": "Transport",
    "name": "Truckförare",
    "ssyk": "Truckförare",
    "situation": "överskott",
    "chances": "små",
    "trend": "öka",
    "note": "Nationellt bedöms rekryteringssituationen för truckförare kännetecknas av överskott. På fem års sikt förväntas efterfrågan på truckförare öka jämfört med idag."
  }
];

/* Arbetsförmedlingen's own 19 "yrkesomrade" categories are too many to
   pick from as a first step (that's exactly what was too big before) —
   these merge the smallest, closely-related ones down to 14. This is a
   display grouping only: every JOBS row keeps its real, original `area`
   untouched, and the full table/advanced filters still use that original
   value. Merges, and why:
   - Tekniskt arbete + Naturvetenskapligt arbete → engineering and
     science occupations overlap heavily in practice.
   - Industriell tillverkning + Hantverksyrken → factory and craft-trade
     production work.
   - Hotell, restaurang, storhushåll + Kropps- och skönhetsvård →
     in-person service occupations.
   - Installation, drift, underhåll + Sanering och renhållning +
     Säkerhetsarbete → keeping a building/site running and safe. */
const AREA_GROUPS = {
  "Hälso- och sjukvård": "Health & medical care",
  "Administration, ekonomi, juridik": "Admin, finance & law",
  "Bygg och anläggning": "Construction",
  "Industriell tillverkning": "Manufacturing & crafts",
  "Hantverksyrken": "Manufacturing & crafts",
  "Transport": "Transport",
  "Försäljning, inköp, marknadsföring": "Sales & marketing",
  "Tekniskt arbete": "Engineering & science",
  "Naturvetenskapligt arbete": "Engineering & science",
  "Hotell, restaurang, storhushåll": "Hospitality & personal care",
  "Kropps- och skönhetsvård": "Hospitality & personal care",
  "Installation, drift, underhåll": "Installation, maintenance & safety",
  "Sanering och renhållning": "Installation, maintenance & safety",
  "Säkerhetsarbete": "Installation, maintenance & safety",
  "Pedagogiskt arbete": "Education",
  "Socialt arbete": "Social work",
  "Data/IT": "IT",
  "Naturbruk": "Agriculture, forestry & fishing",
  "Kultur, media, design": "Arts, media & design"
};

/* English hover-translations for the Swedish occupation/area names above —
   plain word-for-word English, not the AREA_GROUPS category labels (those
   are a coarser grouping, these are literal translations). Done by hand,
   not machine-translated; occupation titles are fairly standard Swedish
   labor-market vocabulary, not idiomatic, so this should be reliable, but
   flag any that read wrong. */
const NAME_EN = {
  "Administrativa assistenter": "Administrative assistants",
  "Anläggningsarbetare (med yrkesbevis)": "Civil construction workers (certified)",
  "Anläggningsmaskinförare (med yrkesbevis)": "Heavy equipment operators (certified)",
  "Apotekare": "Pharmacists",
  "Arbetsförmedlare": "Employment service officers",
  "Arbetsterapeuter": "Occupational therapists",
  "Arkivarier": "Archivists",
  "Bagare och konditorer": "Bakers and pastry chefs",
  "Banktjänstemän": "Bank officers",
  "Barnmorskor": "Midwives",
  "Barnskötare": "Childcare workers",
  "Bartendrar": "Bartenders",
  "Behandlingsassistenter och socialpedagoger": "Treatment assistants and social pedagogues",
  "Bensinstationspersonal": "Gas station staff",
  "Betongarbetare (med yrkesbevis)": "Concrete workers (certified)",
  "Bibliotekarier": "Librarians",
  "Bil- och tunnplåtslagare": "Car and sheet metal workers",
  "Bilmekaniker": "Car mechanics",
  "Bilrekonditionerare": "Car detailers",
  "Biomedicinska analytiker": "Biomedical scientists",
  "Biståndsbedömare": "Care needs assessors",
  "Brandmän": "Firefighters",
  "Budförare": "Couriers",
  "Buss- och lastbilsmekaniker": "Bus and truck mechanics",
  "Buss- och spårvagnsförare": "Bus and tram drivers",
  "Butikssäljare (båt och motorfordon)": "Retail salespeople (boats and vehicles)",
  "Butikssäljare inom dagligvaruhandel": "Retail salespeople, groceries",
  "Butikssäljare inom fackhandel": "Retail salespeople, specialty stores",
  "Bygg- och anläggningsförare": "Construction vehicle operators",
  "Byggnads- och ventilationsplåtslagare (med yrkesbevis)": "Building and ventilation sheet metal workers (certified)",
  "CNC- och maskinoperatörer inom metall": "CNC and machine operators, metal",
  "CNC- och maskinoperatörer inom trä": "CNC and machine operators, wood",
  "Cell- och molekylärbiologer": "Cell and molecular biologists",
  "Chefssekreterare och VD-assistenter": "Executive secretaries and CEO assistants",
  "Civilingenjörer inom bygg och anläggning": "Civil engineers, construction",
  "Civilingenjörer inom elektroteknik": "Civil engineers, electrical engineering",
  "Civilingenjörer inom elkraft": "Civil engineers, electric power",
  "Civilingenjörer inom gruvteknik och metallurgi": "Civil engineers, mining and metallurgy",
  "Civilingenjörer inom logistik och produktionsplanering": "Civil engineers, logistics and production planning",
  "Civilingenjörer inom maskinteknik": "Civil engineers, mechanical engineering",
  "Controllrar": "Financial controllers",
  "Designers inom spel och digitala medier": "Game and digital media designers",
  "Diakoner": "Deacons",
  "Distributionselektriker": "Distribution electricians",
  "Distriktssköterskor": "District nurses",
  "Djursjukskötare": "Veterinary nurses",
  "Drifttekniker inom IT": "IT operations technicians",
  "Drifttekniker vid värme- och vattenverk": "Operations technicians, heating and water plants",
  "Ekonomiassistenter": "Accounting assistants",
  "Elevassistenter": "Teaching assistants",
  "Fartygsbefäl": "Ship's officers",
  "Fastighetsförvaltare": "Property managers",
  "Fastighetsskötare": "Property caretakers",
  "Fastighetstekniker": "Property technicians",
  "Fin-, inrednings- och möbelsnickare": "Fine, interior and furniture carpenters",
  "Finansanalytiker och finansmäklare": "Financial analysts and brokers",
  "Fjärrbilsförare": "Long-haul truck drivers",
  "Florister": "Florists",
  "Fordonsmontörer": "Vehicle assemblers",
  "Friskvårdskonsulter och hälsopedagoger": "Wellness consultants and health educators",
  "Frisörer": "Hairdressers",
  "Fritidsledare": "Recreation leaders",
  "Fritidspedagoger": "After-school educators",
  "Frivårds- och integrationshandläggare": "Probation and integration officers",
  "Fysioterapeuter och sjukgymnaster": "Physiotherapists",
  "Förare av jordbruks- och skogsmaskiner": "Agricultural and forestry machine operators",
  "Företagssäljare": "B2B sales representatives",
  "Förskollärare": "Preschool teachers",
  "GIS- och kartingenjörer": "GIS and mapping engineers",
  "Golvläggare (med yrkesbevis)": "Floor layers (certified)",
  "Grafiska formgivare": "Graphic designers",
  "Grundskollärare": "Primary/secondary school teachers",
  "Grundutbildade sjuksköterskor": "Registered nurses (general)",
  "Gruv- och stenbrottsarbetare (med yrkesbevis)": "Mine and quarry workers (certified)",
  "Gymnasielärare": "Upper-secondary school teachers",
  "Hotellreceptionister": "Hotel receptionists",
  "Hovmästare": "Head waiters",
  "IT-strateger": "IT strategists",
  "IT-säkerhetsspecialister": "IT security specialists",
  "Industrielektriker (med certifikat)": "Industrial electricians (certified)",
  "Informatörer och kommunikatörer": "Information officers and communicators",
  "Ingenjörer och tekniker inom bygg och anläggning": "Engineers and technicians, construction",
  "Ingenjörer och tekniker inom elektroteknik": "Engineers and technicians, electrical engineering",
  "Ingenjörer och tekniker inom elkraft": "Engineers and technicians, electric power",
  "Ingenjörer och tekniker inom kemi och kemiteknik": "Engineers and technicians, chemistry/chemical engineering",
  "Ingenjörer och tekniker inom maskinteknik": "Engineers and technicians, mechanical engineering",
  "Inköpare och upphandlare": "Buyers and procurement officers",
  "Installations- och serviceelektriker (med certifikat)": "Installation and service electricians (certified)",
  "Isoleringsmontörer (med yrkesbevis)": "Insulation installers (certified)",
  "Journalister": "Journalists",
  "Jurister": "Lawyers",
  "Kantorer och organister": "Cantors and organists",
  "Kassapersonal": "Cashiers",
  "Kemister": "Chemists",
  "Kockar": "Chefs",
  "Kontorsreceptionister": "Office receptionists",
  "Kranbilsförare": "Crane truck drivers",
  "Kriminalvårdare": "Correctional officers",
  "Kundtjänstpersonal": "Customer service staff",
  "Kuratorer": "Counselors",
  "Kyl- och värmepumpstekniker": "Refrigeration and heat pump technicians",
  "Köksmästare och souschefer": "Head chefs and sous chefs",
  "Laboratorieingenjörer": "Laboratory engineers",
  "Lackerare och industrimålare": "Painters (vehicle/industrial)",
  "Lager- och terminalpersonal": "Warehouse and terminal staff",
  "Lantmätare": "Surveyors",
  "Larm- och servicetekniker inom elektronik": "Alarm and service technicians, electronics",
  "Larmoperatörer": "Alarm/dispatch operators",
  "Lastbilsförare": "Truck drivers",
  "Lednings- och organisationsutvecklare": "Management and organizational development consultants",
  "Ljus-, ljud- och bildtekniker": "Lighting, sound and video technicians",
  "Lokförare": "Train drivers",
  "Läkare (exklusive AT-, ST- och specialistläkare)": "Doctors (excluding interns/residents/specialists)",
  "Lärare i yrkesämnen": "Vocational subject teachers",
  "Löne- och personaladministratörer": "Payroll and HR administrators",
  "Marknads- och försäljningsassistenter": "Marketing and sales assistants",
  "Marknadsanalytiker och marknadsförare": "Market analysts and marketers",
  "Maskinoperatörer inom livsmedel": "Machine operators, food industry",
  "Maskinoperatörer inom plast": "Machine operators, plastics",
  "Massörer och massageterapeuter": "Massage therapists",
  "Matroser och jungmän": "Deckhands and ship's ratings",
  "Medicinska sekreterare/vårdadministratörer": "Medical secretaries/healthcare administrators",
  "Miljö- och hälsoskyddsinspektörer": "Environmental and health protection inspectors",
  "Mjukvaru- och systemutvecklare": "Software and systems developers",
  "Montörer av elektrisk och elektronisk utrustning": "Assemblers, electrical/electronic equipment",
  "Montörer av metall-, gummi- och plastprodukter": "Assemblers, metal/rubber/plastic products",
  "Montörer av träprodukter": "Assemblers, wood products",
  "Murare och plattsättare (med yrkesbevis)": "Bricklayers and tilers (certified)",
  "Musei- och konstintendenter": "Museum and art curators",
  "Målare (med yrkesbevis)": "Painters (certified)",
  "Nätverks- och systemtekniker": "Network and systems technicians",
  "Odlare av jordbruksväxter, frukt och bär": "Crop, fruit and berry growers",
  "Operationssjuksköterskor": "Operating room nurses",
  "Operatörer inom sågverk": "Sawmill operators",
  "Optiker": "Opticians",
  "Ordersamordnare": "Order coordinators",
  "Pedagoger inom kultur": "Cultural/arts educators",
  "Personal- och HR-specialister": "HR specialists",
  "Personliga assistenter": "Personal assistants (disability care)",
  "Pizzabagare": "Pizza bakers",
  "Planerare och utredare": "Planners and investigators (public sector)",
  "Planeringsarkitekter": "Urban planning architects",
  "Processoperatörer inom metall": "Process operators, metal industry",
  "Processoperatörer inom papper och pappersmassa": "Process operators, pulp and paper",
  "Producenter och projektledare inom film och teater": "Producers and project managers, film and theater",
  "Psykiatrisjuksköterskor": "Psychiatric nurses",
  "Psykologer": "Psychologists",
  "Receptarier": "Pharmacy technicians",
  "Redovisningsekonomer": "Accountants",
  "Renhållnings- och återvinningsarbetare": "Sanitation and recycling workers",
  "Restaurang- och köksbiträden": "Restaurant and kitchen assistants",
  "Revisorer": "Auditors",
  "Röntgensjuksköterskor": "Radiology nurses",
  "SFI-lärare": "Swedish-for-immigrants teachers",
  "ST-läkare": "Resident physicians",
  "Saneringsarbetare": "Decontamination/cleanup workers",
  "Servicehandläggare med flera": "Service caseworkers and similar",
  "Servitörer": "Waiters/waitresses",
  "Sjuksköterskor inom akutsjukvård": "Emergency care nurses",
  "Sjuksköterskor inom vård av äldre": "Elderly-care nurses",
  "Skogsarbetare": "Forestry workers",
  "Skolassistenter": "School assistants",
  "Skolsköterskor": "School nurses",
  "Skräddare och ateljésömmerskor": "Tailors and dressmakers",
  "Skötare": "Psychiatric/mental health care workers",
  "Slaktare": "Butchers",
  "Snabbmatskockar och grillbiträden": "Fast-food cooks and grill assistants",
  "Socialsekreterare": "Social workers",
  "Specialister inom miljöskydd och miljöteknik": "Environmental protection and technology specialists",
  "Specialister och rådgivare inom skogsbruk": "Forestry specialists and advisors",
  "Specialistläkare": "Specialist physicians",
  "Speciallärare och specialpedagoger": "Special education teachers",
  "Studie- och yrkesvägledare": "Study and career counselors",
  "Studieadministratörer och utbildningshandläggare": "Education administrators",
  "Städare": "Cleaners",
  "Ställningsbyggare (med yrkesbevis/certifikat)": "Scaffolders (certified)",
  "Supporttekniker inom IT": "IT support technicians",
  "Svetsare och gasskärare": "Welders and gas cutters",
  "Systemadministratörer": "System administrators",
  "Systemanalytiker och IT-arkitekter": "Systems analysts and IT architects",
  "Systemförvaltare": "System managers",
  "Säkerhetsrådgivare och inspektörer": "Security advisors and inspectors",
  "Takmontörer (med yrkesbevis)": "Roofers (certified)",
  "Tandhygienister": "Dental hygienists",
  "Tandläkare": "Dentists",
  "Tandsköterskor": "Dental nurses",
  "Taxiförare": "Taxi drivers",
  "Trafiklärare": "Driving instructors",
  "Transportledare och transportsamordnare": "Transport managers and coordinators",
  "Truckförare": "Forklift drivers",
  "Träarbetare och snickare (med yrkesbevis)": "Carpenters (certified)",
  "Trädgårdsanläggare": "Landscapers",
  "Trädgårdsarbetare, skötsel utemiljö": "Gardeners, outdoor maintenance",
  "Trädgårdsodlare": "Horticultural growers",
  "Tvätteriarbetare": "Laundry workers",
  "Underhållsmekaniker och maskinreparatörer": "Maintenance mechanics and machine repairers",
  "Undersköterskor inom hemtjänst, hemsjukvård, äldreboende och habilitering": "Nursing assistants, home and elderly care",
  "Undersköterskor inom vård- och specialavdelningar och mottagningar": "Nursing assistants, hospital wards and clinics",
  "Uppfödare och skötare av lantbruksdjur": "Livestock breeders and keepers",
  "VVS-montörer (med certifikat)": "Plumbing/HVAC installers (certified)",
  "Vaktmästare": "Caretakers/janitors",
  "Veterinärer": "Veterinarians",
  "Väktare och ordningsvakter": "Security guards",
  "Vårdare och stödassistenter": "Care workers and support assistants",
  "Vårdbiträden": "Care assistants"
};

const AREA_EN = {
  "Administration, ekonomi, juridik": "Administration, economics, law",
  "Bygg och anläggning": "Construction and civil engineering",
  "Data/IT": "Data/IT",
  "Försäljning, inköp, marknadsföring": "Sales, purchasing, marketing",
  "Hantverksyrken": "Craft trades",
  "Hotell, restaurang, storhushåll": "Hotel, restaurant, catering",
  "Hälso- och sjukvård": "Health and medical care",
  "Industriell tillverkning": "Industrial manufacturing",
  "Installation, drift, underhåll": "Installation, operations, maintenance",
  "Kropps- och skönhetsvård": "Body and beauty care",
  "Kultur, media, design": "Culture, media, design",
  "Naturbruk": "Agriculture, forestry and fishing",
  "Naturvetenskapligt arbete": "Natural science work",
  "Pedagogiskt arbete": "Educational work",
  "Sanering och renhållning": "Decontamination and sanitation",
  "Socialt arbete": "Social work",
  "Säkerhetsarbete": "Security work",
  "Tekniskt arbete": "Technical work",
  "Transport": "Transport"
};
