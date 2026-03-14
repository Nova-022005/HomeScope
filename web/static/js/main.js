import { TableauViz } from "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";

let viz;
let viz2;
let viz3;
let viz4;

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

async function redoAction4() {
	if (!viz4 || !viz4.workbook) {
		return;
	}
	await viz4.workbook.redoAsync();
}

async function resetAction4() {
	if (!viz4 || !viz4.workbook) {
		return;
	}
	await viz4.workbook.revertAllAsync();
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
	const csvPath = "../../data/Transformed_Housing_Data2.csv";
	const link = document.createElement("a");
	link.href = csvPath;
	link.download = "Transformed_Housing_Data2.csv";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	closeDatasetModal();
}

window.addEventListener("DOMContentLoaded", () => {
	/* Dataset Modal Event Listeners */
	const datasetBtn = document.getElementById("datasetBtn");
	const closeBtn = document.getElementById("closeModalBtn");
	const cancelBtn = document.getElementById("cancelBtn");
	const downloadBtn = document.getElementById("downloadConfirmBtn");
	const backdrop = document.getElementById("modalBackdrop");

	datasetBtn?.addEventListener("click", openDatasetModal);
	closeBtn?.addEventListener("click", closeDatasetModal);
	cancelBtn?.addEventListener("click", closeDatasetModal);
	downloadBtn?.addEventListener("click", downloadDataset);
	backdrop?.addEventListener("click", closeDatasetModal);

	setControlsEnabled(false);
	setControlsEnabled2(false);
	setControlsEnabled3(false);
	setControlsEnabled4(false);
	bindControls();
	bindControls2();
	bindControls3();
	bindControls4();
	createTableauViz();
	createTableauViz2();
	createTableauViz3();
	createTableauViz4();
	updateVizSize();
});

window.addEventListener("resize", updateVizSize);
