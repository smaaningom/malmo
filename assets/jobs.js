/* Renders assets/jobs-data.js in two layers:
   - Pick fields (group-picker) + insights: the default view. Pick which
     of the 14 consolidated fields (see AREA_GROUPS) you care about, see
     a plain summary and the biggest shortages within just those fields.
   - Full table: everything, unfiltered by field selection, with its own
     area/situation/search controls — the advanced/power-user view,
     behind a <details> disclosure so it's not the first thing you see. */

const SITUATION_LABEL = {
  brist: "Shortage",
  balans: "Balanced",
  "överskott": "Surplus",
  paradox: "Mixed (regional)"
};

const SITUATION_ORDER = { brist: 0, paradox: 1, balans: 2, "överskott": 3 };
const CHANCES_ORDER = { stora: 0, medelstora: 1, "små": 2 };
const CHANCES_LABEL = { stora: "Many", medelstora: "Some", "små": "Few" };
const TREND_LABEL = { "öka": "Rising", "vara oförändrad": "Flat", minska: "Falling" };

function el(tag, props = {}, text) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => node.setAttribute(key, value));
  if (text != null) node.textContent = text;
  return node;
}

// A handful of occupations (right now: one, as a prototype — see
// occupations/mjukvaru-och-systemutvecklare.html) have a real detail page
// with education/language/requirement info. Everyone else just gets the
// plain name — no dead links.
function nameNode(job, className) {
  if (job.detailPage) {
    return el("a", { class: className, href: job.detailPage, title: NAME_EN[job.name] || "" }, job.name);
  }
  return el("span", { class: className, title: NAME_EN[job.name] || "" }, job.name);
}

function sortJobs(jobs) {
  return [...jobs].sort((a, b) => {
    const bySituation = SITUATION_ORDER[a.situation] - SITUATION_ORDER[b.situation];
    if (bySituation !== 0) return bySituation;
    const byChances = CHANCES_ORDER[a.chances] - CHANCES_ORDER[b.chances];
    if (byChances !== 0) return byChances;
    return a.name.localeCompare(b.name, "sv");
  });
}

const selectedGroups = new Set();

function scopedJobs() {
  if (selectedGroups.size === 0) return JOBS;
  return JOBS.filter((job) => selectedGroups.has(AREA_GROUPS[job.area]));
}

// --- group picker + insights -----------------------------------------

function renderGroupPicker() {
  const picker = document.getElementById("group-picker");
  picker.replaceChildren();
  const groups = [...new Set(Object.values(AREA_GROUPS))].sort((a, b) => a.localeCompare(b));
  groups.forEach((group) => {
    const btn = el("button", { type: "button", class: "group-btn" }, group);
    btn.addEventListener("click", () => {
      if (selectedGroups.has(group)) selectedGroups.delete(group);
      else selectedGroups.add(group);
      btn.classList.toggle("is-selected", selectedGroups.has(group));
      renderInsights();
      populateAreaFilter();
      applyFilters();
    });
    picker.appendChild(btn);
  });
}

function renderInsights() {
  const jobs = scopedJobs();
  const counts = { brist: 0, balans: 0, "överskott": 0, paradox: 0 };
  jobs.forEach((job) => { counts[job.situation] = (counts[job.situation] || 0) + 1; });

  document.getElementById("insights-summary").textContent =
    `${counts.brist} shortage, ${counts.balans} balanced, ${counts["överskott"]} surplus, ` +
    `${counts.paradox} mixed — out of ${jobs.length} occupations in this selection.`;

  const top = sortJobs(jobs).slice(0, 10);
  const list = document.getElementById("top-list");
  list.replaceChildren();
  top.forEach((job) => {
    const li = el("li");
    li.appendChild(nameNode(job, "top-name"));
    li.appendChild(el("span", { class: "top-area", title: AREA_EN[job.area] || "" }, job.area));
    li.appendChild(el("span", { class: `badge badge-${job.situation}` }, SITUATION_LABEL[job.situation] || job.situation));
    list.appendChild(li);
  });
}

// --- full table ---------------------------------------------------

function renderRows(jobs) {
  const body = document.getElementById("jobs-body");
  body.replaceChildren();
  jobs.forEach((job) => {
    const tr = el("tr");
    tr.title = job.note;

    const nameTd = el("td", { class: "col-name" });
    nameTd.appendChild(nameNode(job, "col-name-link"));
    tr.appendChild(nameTd);
    tr.appendChild(el("td", { class: "col-area", title: AREA_EN[job.area] || "" }, job.area));

    const situationTd = el("td");
    situationTd.appendChild(el("span", { class: `badge badge-${job.situation}` }, SITUATION_LABEL[job.situation] || job.situation));
    tr.appendChild(situationTd);

    tr.appendChild(el("td", {}, CHANCES_LABEL[job.chances] || job.chances));
    tr.appendChild(el("td", {}, TREND_LABEL[job.trend] || job.trend));

    body.appendChild(tr);
  });
}

function populateAreaFilter() {
  const areaSelect = document.getElementById("filter-area");
  const current = areaSelect.value;
  const areas = [...new Set(scopedJobs().map((job) => job.area))].sort((a, b) => a.localeCompare(b, "sv"));

  areaSelect.replaceChildren(el("option", { value: "" }, "All areas"));
  areas.forEach((area) => areaSelect.appendChild(el("option", { value: area }, area)));
  areaSelect.value = areas.includes(current) ? current : "";
}

function applyFilters() {
  const area = document.getElementById("filter-area").value;
  const situation = document.getElementById("filter-situation").value;
  const query = document.getElementById("search").value.trim().toLowerCase();

  const filtered = scopedJobs().filter((job) => {
    if (area && job.area !== area) return false;
    if (situation && job.situation !== situation) return false;
    if (query && !job.name.toLowerCase().includes(query) && !job.ssyk.toLowerCase().includes(query)) return false;
    return true;
  });

  renderRows(sortJobs(filtered));
  document.getElementById("count").textContent = `${filtered.length} of ${scopedJobs().length} occupations shown here`;
}

function init() {
  renderGroupPicker();
  renderInsights();
  populateAreaFilter();

  document.getElementById("filter-area").addEventListener("change", applyFilters);
  document.getElementById("filter-situation").addEventListener("change", applyFilters);
  document.getElementById("search").addEventListener("input", applyFilters);

  applyFilters();
}

document.addEventListener("DOMContentLoaded", init);
