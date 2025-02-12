//  CSV to JavaScript Array
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

// Room Filtering Logic
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
        'A1.204', 'A1.205', 'A1.206', 'A1.207', 'A1.208', 'A1.209', 'A1.207A', 'A1.207B', 'A2.309'
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

//  Form Submission
document.getElementById("roomForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let selectedDay = document.getElementById("day").value;

    //  all selected checkboxes
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

    // smooth animation
    availableRooms.forEach((room, index) => {
        setTimeout(() => {
            let li = document.createElement("li");
            li.textContent = room;
            li.classList.add("fade-in");
            resultList.appendChild(li);

            // Auto-scroll to bottom
            resultList.scrollTop = resultList.scrollHeight;
        }, index * 100); // 100ms delay between each item
    });
});

// Function to Get Room Usage (Strictly Follows Python Logic)
function getRoomUsage(csvData, room) {
    let data = parseCSV(csvData);  // Convert CSV data to JavaScript array

    const startingPeriodCol = "Tiết BD";
    const durationCol = "ST";
    const dayCol = "Thứ";
    const roomCol = "Phòng";

    // Ensure required columns exist
    let requiredColumns = [startingPeriodCol, durationCol, dayCol, roomCol];
    for (let col of requiredColumns) {
        if (!data[0].hasOwnProperty(col)) {
            console.log(`Column '${col}' not found in the file. Check your CSV data.`);
            return;
        }
    }

    // Filter data for the specified room
    let roomData = data.filter(entry => entry[roomCol] === room);

    if (roomData.length === 0) {
        document.getElementById("roomUsage").innerHTML = `<p>Không tìm thấy dữ liệu cho phòng: ${room}</p>`;
        return;
    }

    // Remove duplicates based on [dayCol, startingPeriodCol, durationCol]
    let uniqueRoomData = [];
    let seen = new Set();
    roomData.forEach(entry => {
        let key = `${entry[dayCol]}_${entry[startingPeriodCol]}_${entry[durationCol]}`;
        if (!seen.has(key)) {
            seen.add(key);
            uniqueRoomData.push(entry);
        }
    });

    // Convert periods to numeric & clean data
    uniqueRoomData.forEach(entry => {
        entry[startingPeriodCol] = parseInt(entry[startingPeriodCol]);
        entry[durationCol] = parseInt(entry[durationCol]);
    });

    // Remove invalid rows
    uniqueRoomData = uniqueRoomData.filter(entry => !isNaN(entry[startingPeriodCol]) && !isNaN(entry[durationCol]));

    // Calculate used periods for each entry
    uniqueRoomData.forEach(entry => {
        entry["Used Periods"] = Array.from({ length: entry[durationCol] }, (_, i) => entry[startingPeriodCol] + i);
    });

    //  room usage
    let daysOfWeek = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'];
    let roomUsageHTML = `<h3>Các tiết sử dụng phòng ${room}:</h3>`;

    daysOfWeek.forEach(day => {
        let dayData = uniqueRoomData.filter(entry => entry[dayCol] === day);
        if (dayData.length > 0) {
            roomUsageHTML += `<strong>- ${day}:</strong><br>`;
            let uniquePeriods = new Set();
            dayData.forEach(entry => {
                let periodsTuple = entry["Used Periods"].join(", ");
                let subjectName = entry["Tên môn học"] || "Không rõ";  // Default if no subject found
            
                if (!uniquePeriods.has(periodsTuple)) {
                    uniquePeriods.add(periodsTuple);
                    roomUsageHTML += `Tiết: ${periodsTuple}: ${subjectName}<br>`;
                }
            });
            
        } else {
            roomUsageHTML += `<strong>- ${day}:</strong> Không có tiết<br>`;
        }
    });

    let roomUsageBox = document.getElementById("roomUsage");

// Apply fade-out before updating content
// Reset styles so that every click behaves like the first click
roomUsageBox.classList.remove("fade-in", "expanded", "fade-out");

// Apply fade-out before updating content
roomUsageBox.classList.add("fade-out");

// Wait for fade-out to complete before replacing content
setTimeout(() => {
    roomUsageBox.innerHTML = roomUsageHTML;

    // Expand box & fade-in effect
    roomUsageBox.classList.remove("fade-out");
    roomUsageBox.classList.add("fade-in", "expanded"); 
}, 500);  // 0.5s delay for smooth transition


// Wait for fade-out to complete before replacing content
setTimeout(() => {
    roomUsageBox.innerHTML = roomUsageHTML;

    // Expand box & fade-in effect
    roomUsageBox.classList.remove("fade-out");
    roomUsageBox.classList.add("fade-in", "expanded"); 
}, 500);  // 0.5s delay for smooth transition
;
}

// Handle Room Click Event
document.getElementById("result").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        let room = event.target.textContent.split("*")[0].trim();  // Remove marker (*) and get room name
        getRoomUsage(csvData, room);
    }
});

