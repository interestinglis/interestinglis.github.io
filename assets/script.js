// 📌 Convert CSV to JavaScript Array
function parseCSV(csvText) {
    let lines = csvText.split("\n").map(line => line.trim());
    let headers = lines[0].split(",");
    let rows = lines.slice(1).map(line => {
        let values = line.split(",");
        let obj = {};
        headers.forEach((header, i) => obj[header] = values[i]);
        return obj;
    });
    return rows;
}

const schedule = parseCSV(csvData);

// 📌 Room Filtering Logic (Strictly Following Your Python Logic)
function findEmptyRooms(day, periods) {
    const startingPeriodCol = "Tiết BD";
    const durationCol = "ST";
    const dayCol = "Thứ";
    const roomCol = "Phòng";

    periods = periods.map(p => (typeof p === "string" ? parseInt(p.trim()) : parseInt(p))).filter(p => !isNaN(p));
    if (periods.length === 0) return [];

    let maxPeriod = Math.max(...periods);
    let occupiedRooms = new Set();
    let roomsUsedBefore = new Set();

    let validRooms = schedule.filter(entry =>
        entry[dayCol] === day &&
        entry[startingPeriodCol] &&
        entry[durationCol] &&
        entry[roomCol]
    );

    validRooms.forEach(entry => {
        let startPeriod = parseInt(entry[startingPeriodCol]);
        let duration = parseInt(entry[durationCol]);
        let usedPeriods = Array.from({ length: duration }, (_, i) => startPeriod + i);

        if (usedPeriods.some(p => p < maxPeriod)) {
            roomsUsedBefore.add(entry[roomCol]);
        }

        if (periods.some(p => usedPeriods.includes(p))) {
            occupiedRooms.add(entry[roomCol]);
        }
    });

    let allRooms = new Set(validRooms.map(entry => entry[roomCol]));
    let emptyRooms = [...allRooms].filter(room => !occupiedRooms.has(room));

    let specialRooms = new Set([
        'A1.109', 'A2.104', 'A1.201', 'A1.202', 'A1.203',
        'A1.204', 'A1.205', 'A1.206', 'A1.207', 'A1.208', 'A1.209', 'A1.207A', 'A1.207B'
    ]);

    let normalRooms = [];
    let markedRooms = [];
    emptyRooms.forEach(room => {
        let markers = [];
        if (!roomsUsedBefore.has(room)) markers.push('*');
        if (specialRooms.has(room)) markers.push('*');

        let formattedRoom = `${room}${markers.length ? ' ' + markers.join('') : ''}`;
        if (markers.length) {
            markedRooms.push(formattedRoom);
        } else {
            normalRooms.push(formattedRoom);
        }
    });

    return normalRooms.concat(markedRooms);
}

// 📌 Handle Form Submission
document.getElementById("roomForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let selectedDay = document.getElementById("day").value;

    // 📌 Get all selected checkboxes (periods)
    let selectedPeriods = Array.from(document.querySelectorAll('input[name="period"]:checked'))
        .map(cb => cb.value)
        .map(p => parseInt(p))
        .filter(p => !isNaN(p)); // Convert to integers & remove invalid values

    if (selectedPeriods.length === 0) {
        alert("Vui lòng chọn ít nhất một tiết học.");
        return;
    }

    let availableRooms = findEmptyRooms(selectedDay, selectedPeriods);

    let resultList = document.getElementById("result");
    resultList.innerHTML = ""; // Clear previous results

    if (availableRooms.length === 0) {
        resultList.innerHTML = "<li class='fade-in'>No available rooms.</li>";
        return;
    }

    // 📌 Add results with a delay for smooth animation
    availableRooms.forEach((room, index) => {
        setTimeout(() => {
            let li = document.createElement("li");
            li.textContent = room;
            li.classList.add("fade-in");
            resultList.appendChild(li);

            // 📌 Auto-scroll to bottom smoothly
            resultList.scrollTop = resultList.scrollHeight;
        }, index * 200); // 200ms delay between each item
    });
});


