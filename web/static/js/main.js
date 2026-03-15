import { TableauViz } from "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";

let viz;
let viz2;
let viz3;
let viz4;
let vizDashboard;

function getDatasetUrl() {
	const path = window.location.pathname;
	const repoMatch = path.match(/\/([^/]+)\/web\/templates\//);
	const repoBase = repoMatch ? `/${repoMatch[1]}` : "";
	return `${repoBase}/data/Transformed_Housing_Data2.csv`;
}

function getVizHeight() {
	const viewportWidth = window.innerWidth;

	if (viewportWidth >= 1400) {
		return "62vh";
	}

	if (viewportWidth >= 1024) {
		return "58vh";
	}

	if (viewportWidth >= 768) {
		return "52vh";
	}

	return "48vh";
}

function getSummaryVizHeight() {
	const viewportWidth = window.innerWidth;

	if (viewportWidth >= 1400) {
		return "84vh";
	}

	if (viewportWidth >= 1024) {
		return "78vh";
	}

	if (viewportWidth >= 768) {
		return "70vh";
	}

	return "64vh";
}

function setControlsEnabled(enabled) {
	const controlIds = ["undoBtn", "redoBtn", "resetBtn", "fullscreenBtn", "toolbarToggle"];
	for (const id of controlIds) {
		const control = document.getElementById(id);
		if (control) {
			control.disabled = !enabled;
		}
	}
}

function setControlsEnabled2(enabled) {
	const controlIds = ["undoBtn2", "redoBtn2", "resetBtn2", "fullscreenBtn2", "toolbarToggle2"];
	for (const id of controlIds) {
		const control = document.getElementById(id);
		if (control) {
			control.disabled = !enabled;
		}
	}
}

function setControlsEnabled3(enabled) {
	const controlIds = ["undoBtn3", "redoBtn3", "resetBtn3", "fullscreenBtn3", "toolbarToggle3"];
	for (const id of controlIds) {
		const control = document.getElementById(id);
		if (control) {
			control.disabled = !enabled;
		}
	}
}

function setControlsEnabled4(enabled) {
	const controlIds = ["undoBtn4", "redoBtn4", "resetBtn4", "fullscreenBtn4", "toolbarToggle4"];
	for (const id of controlIds) {
		const control = document.getElementById(id);
		if (control) {
			control.disabled = !enabled;
		}
	}
}

function setControlsEnabledDashboard(enabled) {
	const controlIds = [
		"undoBtnDashboard",
		"redoBtnDashboard",
		"resetBtnDashboard",
		"fullscreenBtnDashboard",
		"toolbarToggleDashboard",
	];
	for (const id of controlIds) {
		const control = document.getElementById(id);
		if (control) {
			control.disabled = !enabled;
		}
	}
}

function createTableauViz() {
	const mount = document.getElementById("tableauMount");
	if (!mount) {
		return;
	}

	viz = new TableauViz();
	viz.src = "https://public.tableau.com/views/completeskillwalletproject_17735011013020/Sheet6?:showVizHome=no";
	viz.toolbar = "bottom";
	viz.hideTabs = true;
	viz.setAttribute("device", "desktop");
	viz.style.width = "100%";
	viz.style.height = getVizHeight();

	viz.addEventListener("firstinteractive", () => {
		setControlsEnabled(true);
	});

	mount.appendChild(viz);
}

function createTableauViz2() {
	const mount = document.getElementById("tableauMountRenovation");
	if (!mount) {
		return;
	}

	viz2 = new TableauViz();
	viz2.src = "https://public.tableau.com/views/completeskillwalletproject_17735011013020/Sheet9?:showVizHome=no";
	viz2.toolbar = "bottom";
	viz2.hideTabs = true;
	viz2.setAttribute("device", "desktop");
	viz2.style.width = "100%";
	viz2.style.height = getVizHeight();

	viz2.addEventListener("firstinteractive", () => {
		setControlsEnabled2(true);
	});

	mount.appendChild(viz2);
}

function createTableauViz3() {
	const mount = document.getElementById("tableauMountSales");
	if (!mount) {
		return;
	}

	viz3 = new TableauViz();
	viz3.src = "https://public.tableau.com/views/completeskillwalletproject_17735011013020/Sheet7?:showVizHome=no";
	viz3.toolbar = "bottom";
	viz3.hideTabs = true;
	viz3.setAttribute("device", "desktop");
	viz3.style.width = "100%";
	viz3.style.height = getVizHeight();

	viz3.addEventListener("firstinteractive", () => {
		setControlsEnabled3(true);
	});

	mount.appendChild(viz3);
}

function createTableauViz4() {
	const mount = document.getElementById("tableauMountSummary");
	if (!mount) {
		return;
	}

	viz4 = new TableauViz();
	viz4.src = "https://public.tableau.com/views/completeskillwalletproject_17735011013020/Sheet10?:showVizHome=no";
	viz4.toolbar = "bottom";
	viz4.hideTabs = false;
	viz4.setAttribute("device", "desktop");
	viz4.style.width = "100%";
	viz4.style.height = getSummaryVizHeight();

	viz4.addEventListener("firstinteractive", () => {
		setControlsEnabled4(true);
	});

	mount.appendChild(viz4);
}

function createDashboardViz() {
	const mount = document.getElementById("tableauMountDashboard");
	if (!mount) {
		return;
	}

	vizDashboard = new TableauViz();
	vizDashboard.src = "https://public.tableau.com/views/completeskillwalletproject/Dashboard1?:showVizHome=no";
	vizDashboard.toolbar = "bottom";
	vizDashboard.hideTabs = true;
	vizDashboard.setAttribute("device", "desktop");
	vizDashboard.style.width = "100%";
	vizDashboard.style.height = getSummaryVizHeight();

	vizDashboard.addEventListener("firstinteractive", () => {
		setControlsEnabledDashboard(true);
	});

	mount.appendChild(vizDashboard);
}

async function undoAction() {
	if (!viz || !viz.workbook) {
		return;
	}
	await viz.workbook.undoAsync();
}

async function redoAction() {
	if (!viz || !viz.workbook) {
		return;
	}
	await viz.workbook.redoAsync();
}

async function resetAction() {
	if (!viz || !viz.workbook) {
		return;
	}
	await viz.workbook.revertAllAsync();
}

async function undoAction2() {
	if (!viz2 || !viz2.workbook) {
		return;
	}
	await viz2.workbook.undoAsync();
}

async function redoAction2() {
	if (!viz2 || !viz2.workbook) {
		return;
	}
	await viz2.workbook.redoAsync();
}

async function resetAction2() {
	if (!viz2 || !viz2.workbook) {
		return;
	}
	await viz2.workbook.revertAllAsync();
}

async function undoAction3() {
	if (!viz3 || !viz3.workbook) {
		return;
	}
	await viz3.workbook.undoAsync();
}

async function redoAction3() {
	if (!viz3 || !viz3.workbook) {
		return;
	}
	await viz3.workbook.redoAsync();
}

async function resetAction3() {
	if (!viz3 || !viz3.workbook) {
		return;
	}
	await viz3.workbook.revertAllAsync();
}

async function undoAction4() {
	if (!viz4 || !viz4.workbook) {
		return;
	}
	await viz4.workbook.undoAsync();
}

async function undoDashboardAction() {
	if (!vizDashboard || !vizDashboard.workbook) {
		return;
	}
	await vizDashboard.workbook.undoAsync();
}

async function redoAction4() {
	if (!viz4 || !viz4.workbook) {
		return;
	}
	await viz4.workbook.redoAsync();
}

async function redoDashboardAction() {
	if (!vizDashboard || !vizDashboard.workbook) {
		return;
	}
	await vizDashboard.workbook.redoAsync();
}

async function resetAction4() {
	if (!viz4 || !viz4.workbook) {
		return;
	}
	await viz4.workbook.revertAllAsync();
}

async function resetDashboardAction() {
	if (!vizDashboard || !vizDashboard.workbook) {
		return;
	}
	await vizDashboard.workbook.revertAllAsync();
}

function fullscreenAction() {
	const mount = document.getElementById("tableauMount");
	if (mount && mount.requestFullscreen) {
		mount.requestFullscreen();
	}
}

function fullscreenAction2() {
	const mount = document.getElementById("tableauMountRenovation");
	if (mount && mount.requestFullscreen) {
		mount.requestFullscreen();
	}
}

function fullscreenAction3() {
	const mount = document.getElementById("tableauMountSales");
	if (mount && mount.requestFullscreen) {
		mount.requestFullscreen();
	}
}

function fullscreenAction4() {
	const mount = document.getElementById("tableauMountSummary");
	if (mount && mount.requestFullscreen) {
		mount.requestFullscreen();
	}
}

function fullscreenDashboardAction() {
	const mount = document.getElementById("tableauMountDashboard");
	if (mount && mount.requestFullscreen) {
		mount.requestFullscreen();
	}
}

function toggleToolbarAction(event) {
	if (!viz) {
		return;
	}

	viz.toolbar = event.target.checked ? "bottom" : "hidden";
}

function toggleToolbarAction2(event) {
	if (!viz2) {
		return;
	}

	viz2.toolbar = event.target.checked ? "bottom" : "hidden";
}

function toggleToolbarAction3(event) {
	if (!viz3) {
		return;
	}

	viz3.toolbar = event.target.checked ? "bottom" : "hidden";
}

function toggleToolbarAction4(event) {
	if (!viz4) {
		return;
	}

	viz4.toolbar = event.target.checked ? "bottom" : "hidden";
}

function toggleToolbarDashboardAction(event) {
	if (!vizDashboard) {
		return;
	}

	vizDashboard.toolbar = event.target.checked ? "bottom" : "hidden";
	vizDashboard.refresh();
}

function updateVizSize() {
	if (viz) {
		viz.style.height = getVizHeight();
	}

	if (viz2) {
		viz2.style.height = getVizHeight();
	}

	if (viz3) {
		viz3.style.height = getVizHeight();
	}

	if (viz4) {
		viz4.style.height = getSummaryVizHeight();
	}

	if (vizDashboard) {
		vizDashboard.style.height = getSummaryVizHeight();
	}
}

function bindControls() {
	document.getElementById("undoBtn")?.addEventListener("click", undoAction);
	document.getElementById("redoBtn")?.addEventListener("click", redoAction);
	document.getElementById("resetBtn")?.addEventListener("click", resetAction);
	document.getElementById("fullscreenBtn")?.addEventListener("click", fullscreenAction);
	document.getElementById("toolbarToggle")?.addEventListener("change", toggleToolbarAction);
}

function bindControls2() {
	document.getElementById("undoBtn2")?.addEventListener("click", undoAction2);
	document.getElementById("redoBtn2")?.addEventListener("click", redoAction2);
	document.getElementById("resetBtn2")?.addEventListener("click", resetAction2);
	document.getElementById("fullscreenBtn2")?.addEventListener("click", fullscreenAction2);
	document.getElementById("toolbarToggle2")?.addEventListener("change", toggleToolbarAction2);
}

function bindControls3() {
	document.getElementById("undoBtn3")?.addEventListener("click", undoAction3);
	document.getElementById("redoBtn3")?.addEventListener("click", redoAction3);
	document.getElementById("resetBtn3")?.addEventListener("click", resetAction3);
	document.getElementById("fullscreenBtn3")?.addEventListener("click", fullscreenAction3);
	document.getElementById("toolbarToggle3")?.addEventListener("change", toggleToolbarAction3);
}

function bindControls4() {
	document.getElementById("undoBtn4")?.addEventListener("click", undoAction4);
	document.getElementById("redoBtn4")?.addEventListener("click", redoAction4);
	document.getElementById("resetBtn4")?.addEventListener("click", resetAction4);
	document.getElementById("fullscreenBtn4")?.addEventListener("click", fullscreenAction4);
	document.getElementById("toolbarToggle4")?.addEventListener("change", toggleToolbarAction4);
}

function bindDashboardControls() {
	document.getElementById("undoBtnDashboard")?.addEventListener("click", undoDashboardAction);
	document.getElementById("redoBtnDashboard")?.addEventListener("click", redoDashboardAction);
	document.getElementById("resetBtnDashboard")?.addEventListener("click", resetDashboardAction);
	document.getElementById("fullscreenBtnDashboard")?.addEventListener("click", fullscreenDashboardAction);
	document.getElementById("toolbarToggleDashboard")?.addEventListener("change", toggleToolbarDashboardAction);
}

/* Dataset Modal Functions */
function openDatasetModal() {
	const modal = document.getElementById("datasetModal");
	const backdrop = document.getElementById("modalBackdrop");
	modal?.classList.add("active");
	backdrop?.classList.add("active");
}

function closeDatasetModal() {
	const modal = document.getElementById("datasetModal");
	const backdrop = document.getElementById("modalBackdrop");
	modal?.classList.remove("active");
	backdrop?.classList.remove("active");
}

function downloadDataset() {
	const csvPath = getDatasetUrl();
	const link = document.createElement("a");
	link.href = csvPath;
	link.download = "Transformed_Housing_Data2.csv";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	closeDatasetModal();
}

function parseCsv(text) {
	const rows = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
	if (rows.length === 0) {
		return { headers: [], data: [] };
	}

	const headers = rows[0].split(",");
	const data = rows.slice(1).map((row) => row.split(","));
	return { headers, data };
}

function renderDatasetTable(headers, rows) {
	const table = document.getElementById("datasetTable");
	if (!table) {
		return;
	}

	const thead = table.querySelector("thead");
	const tbody = table.querySelector("tbody");
	if (!thead || !tbody) {
		return;
	}

	thead.innerHTML = "";
	tbody.innerHTML = "";

	const headerRow = document.createElement("tr");
	thead.appendChild(headerRow);
	for (const header of headers) {
		const th = document.createElement("th");
		th.textContent = header;
		headerRow.appendChild(th);
	}

	for (const row of rows) {
		const tr = document.createElement("tr");
		for (const cell of row) {
			const td = document.createElement("td");
			td.textContent = cell;
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
}

async function loadDatasetPreview() {
	const status = document.getElementById("datasetStatus");
	const searchInput = document.getElementById("datasetSearch");
	const limitSelect = document.getElementById("datasetLimit");
	const refreshBtn = document.getElementById("datasetRefresh");
	const copyBtn = document.getElementById("copyDatasetLink");

	if (!status || !searchInput || !limitSelect || !refreshBtn || !copyBtn) {
		return;
	}

	let parsed = { headers: [], data: [] };

	async function fetchAndRender() {
		status.textContent = "Loading dataset...";
		try {
			const response = await fetch(getDatasetUrl());
			const text = await response.text();
			parsed = parseCsv(text);
			applyFilter();
		} catch (error) {
			status.textContent = "Unable to load dataset preview.";
		}
	}

	function applyFilter() {
		const query = searchInput.value.trim().toLowerCase();
		const limit = Number(limitSelect.value);
		const filtered = parsed.data.filter((row) => {
			if (!query) {
				return true;
			}
			return row.join(" ").toLowerCase().includes(query);
		});

		const preview = filtered.slice(0, limit);
		renderDatasetTable(parsed.headers, preview);
		status.textContent = `Showing ${preview.length} of ${filtered.length} rows.`;
	}

	searchInput.addEventListener("input", applyFilter);
	limitSelect.addEventListener("change", applyFilter);
	refreshBtn.addEventListener("click", fetchAndRender);
	copyBtn.addEventListener("click", () => {
		navigator.clipboard.writeText(getDatasetUrl());
		copyBtn.textContent = "Link Copied";
		setTimeout(() => {
			copyBtn.textContent = "Copy Link";
		}, 1200);
	});

	await fetchAndRender();
}

window.addEventListener("DOMContentLoaded", () => {
	/* Dataset Modal Event Listeners */
	const datasetBtn = document.getElementById("datasetBtn");
	const datasetBtnHero = document.getElementById("datasetBtnHero");
	const closeBtn = document.getElementById("closeModalBtn");
	const cancelBtn = document.getElementById("cancelBtn");
	const downloadBtn = document.getElementById("downloadConfirmBtn");
	const backdrop = document.getElementById("modalBackdrop");

	datasetBtn?.addEventListener("click", openDatasetModal);
	datasetBtnHero?.addEventListener("click", openDatasetModal);
	closeBtn?.addEventListener("click", closeDatasetModal);
	cancelBtn?.addEventListener("click", closeDatasetModal);
	downloadBtn?.addEventListener("click", downloadDataset);
	backdrop?.addEventListener("click", closeDatasetModal);

	setControlsEnabled(false);
	setControlsEnabled2(false);
	setControlsEnabled3(false);
	setControlsEnabled4(false);
	setControlsEnabledDashboard(false);
	bindControls();
	bindControls2();
	bindControls3();
	bindControls4();
	createTableauViz();
	createTableauViz2();
	createTableauViz3();
	createTableauViz4();
	bindDashboardControls();
	createDashboardViz();
	loadDatasetPreview();

	const datasetLinks = document.querySelectorAll("[data-dataset-link]");
	for (const link of datasetLinks) {
		link.setAttribute("href", getDatasetUrl());
	}
	updateVizSize();
});

window.addEventListener("resize", updateVizSize);
