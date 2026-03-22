// Attendance session management
function openAttendanceSession() {
    const className = document.getElementById('sessionClass').value;
    const subject = document.getElementById('sessionSubject').value;
    
    if (!className || !subject) {
        alert('Please select class and enter subject');
        return;
    }
    
    activeSession = {
        id: Date.now(),
        class: className,
        subject: subject,
        startTime: new Date(),
        studentsPresent: []
    };
    
    showMessage('Attendance session opened successfully!', 'success');
}

// Barcode scanner simulation
function startBarcodeScanner(videoId) {
    const video = document.getElementById(videoId);
    // Simulate barcode scanning
    setTimeout(() => {
        markAttendance(currentUser.id, 'barcode');
    }, 2000);
}

// Face recognition simulation
function startFaceRecognition() {
    const statusEl = document.getElementById('faceStatus');
    statusEl.textContent = 'Scanning face...';
    statusEl.style.color = '#007bff';
    
    // Simulate face recognition
    setTimeout(() => {
        markAttendance(currentUser.id, 'face');
        statusEl.textContent = 'Attendance marked successfully!';
        statusEl.style.color = '#28a745';
    }, 3000);
}

function markAttendance(studentId, method) {
    if (activeSession) {
        activeSession.studentsPresent.push({
            studentId,
            timestamp: new Date(),
            method
        });
        showMessage(`Attendance marked via ${method}!`, 'success');
        updateAttendanceStats();
    }
}

function updateAttendanceStats() {
    // Update real-time stats
    console.log('Attendance updated:', activeSession);
}

// Load sample attendance data
function loadData() {
    // Populate tables with sample data
    if (document.getElementById('staffTable')) {
        populateStaffTable();
    }
    if (document.getElementById('studentAttendanceTable')) {
        populateStudentAttendance();
    }
}

function populateStaffTable() {
    const tbody = document.getElementById('staffTable');
    // Add staff data
}

function populateStudentAttendance() {
    const tbody = document.getElementById('studentAttendanceTable');
    const sampleData = [
        { date: '2024-03-20', subject: 'Math', status: 'Present', time: '09:30' },
        { date: '2024-03-19', subject: 'Science', status: 'Present', time: '10:45' },
        { date: '2024-03-18', subject: 'English', status: 'Absent', time: '-' }
    ];
    
    tbody.innerHTML = sampleData.map(row => `
        <tr>
            <td>${row.date}</td>
            <td>${row.subject}</td>
            <td>
                <span class="status ${row.status.toLowerCase()}">
                    ${row.status}
                </span>
            </td>
            <td>${row.time}</td>
        </tr>
    `).join('');
}

// Initialize student dashboard
function initStudentDashboard() {
    // Simple chart simulation
    const ctx = document.getElementById('attendanceChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Attendance %',
                    data: [90, 93, 92],
                    borderColor: '#667eea',
                    tension: 0.4
                }]
            }
        });
    }
}