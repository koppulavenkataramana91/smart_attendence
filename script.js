let currentUser = null;

// Universal logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.replace('index.html');
}

// Initialize dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
        window.location.replace('index.html');
        return;
    }
    
    try {
        currentUser = JSON.parse(storedUser);
    } catch (e) {
        localStorage.removeItem('currentUser');
        window.location.replace('index.html');
        return;
    }
    
    // Set user name in navbar if element exists
    const nameElements = document.querySelectorAll('#staffName, #studentName');
    nameElements.forEach(el => {
        if (el) el.textContent = currentUser.name;
    });
    
    // Initialize dashboard features
    initSidebar();
    initDashboard();
});

// Sidebar navigation
function initSidebar() {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active sidebar item
            document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('.dashboard-section').forEach(section => {
                section.classList.remove('active');
            });
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

function initDashboard() {
    const path = window.location.pathname;
    
    if (path.includes('student.html')) {
        initStudentDashboard();
    } else if (path.includes('staff.html')) {
        initStaffDashboard();
    } else if (path.includes('admin.html')) {
        initAdminDashboard();
    }
    
    loadSampleData();
}

// Sample data loading
function loadSampleData() {
    // Populate overview stats
    document.getElementById('totalStudents') && (document.getElementById('totalStudents').textContent = '245');
    document.getElementById('totalStaff') && (document.getElementById('totalStaff').textContent = '12');
    document.getElementById('todayAttendance') && (document.getElementById('todayAttendance').textContent = '89%');
    document.getElementById('avgAttendance') && (document.getElementById('avgAttendance').textContent = '92%');
    document.getElementById('overallAttendance') && (document.getElementById('overallAttendance').textContent = '92%');
    document.getElementById('classesAttended') && (document.getElementById('classesAttended').textContent = '45');
}

// Dashboard specific initializations
function initStudentDashboard() {
    console.log('Student dashboard initialized');
}

function initStaffDashboard() {
    console.log('Staff dashboard initialized');
}

function initAdminDashboard() {
    console.log('Admin dashboard initialized');
}
