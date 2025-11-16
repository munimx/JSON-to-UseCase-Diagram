function generateTableForObject(data) {
    let html = `
        <table>
            <tr><th class="left-align">Identifier</th><td colspan="2">${data.Identifier}</td></tr>
            <tr><th class="left-align">Purpose</th><td colspan="2">${data.Purpose}</td></tr>
            <tr><th class="left-align">Priority</th><td colspan="2">${data.Priority}</td></tr>
            <tr><th class="left-align">Pre-conditions</th><td colspan="2">${data.PreConditions}</td></tr>
            <tr><th class="left-align">Post-conditions</th><td colspan="2">${data.PostConditions}</td></tr>

            <tr><th colspan="3" class="section-header">Typical Course of Action</th></tr>
            <tr>
                <th class="s-col">S#</th>
                <th>Actor Action</th>
                <th>System Response</th>
            </tr>
    `;

    data.TypicalCourseOfAction.forEach(row => {
        html += `
            <tr>
                <td class="s-col">${row["S#"]}</td>
                <td>${row.ActorAction}</td>
                <td>${row.SystemResponse}</td>
            </tr>
        `;
    });

    html += `
        <tr><th colspan="3" class="section-header">Alternate Course of Action</th></tr>
        <tr>
            <th class="s-col">S#</th>
            <th>Actor Action</th>
            <th>System Response</th>
        </tr>
    `;

    data.AlternateCourseOfAction.forEach(row => {
        html += `
            <tr>
                <td class="s-col">${row["S#"]}</td>
                <td>${row.ActorAction}</td>
                <td>${row.SystemResponse}</td>
            </tr>
        `;
    });

    html += "</table>";
    return html;
}

function generate() {
    const raw = document.getElementById("jsonInput").value;
    let data;

    try {
        data = JSON.parse(raw);
    } catch {
        console.error("Invalid JSON");
        return;
    }

    let html = "";

    // Check if data is an array
    if (Array.isArray(data)) {
        data.forEach(obj => {
            html += generateTableForObject(obj);
        });
    } else {
        // Single object
        html += generateTableForObject(data);
    }

    document.getElementById("output").innerHTML = html;
}



function copyTables() {
    const output = document.getElementById("output");
    if (!output.innerHTML.trim()) {
        console.warn("Generate the table first.");
        return;
    }

    const html = output.innerHTML;

    navigator.clipboard.write([
        new ClipboardItem({
            "text/html": new Blob([html], { type: "text/html" }),
            "text/plain": new Blob([output.innerText], { type: "text/plain" })
        })
    ])
    .then(() => console.log("Table copied! Paste into Word to retain formatting."))
    .catch(err => {
        console.error(err);
        console.error("Copy failed.");
    });
}