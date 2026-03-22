let currentUser = null;
let activeSession = null;

// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    
    const user = users[role] || users[id];
    
    if (user && user.id === id && user.password === password && user.role === role) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = role === 'admin' ? 'admin.html' : 
                              role === 'staff' ? 'staff.html' : 'student.html';
    } else {
        showMessage('Invalid credentials!', 'error');
    }
});

function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    if (messageEl) {
        messageEl.textContent = text;
        messageEl.className = `message ${type}`;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Initialize user on dashboard pages
document.addEventListener('DOMContentLoaded', function() {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set user name in navbar
    const nameEl = document.getElementById('staffName') || document.getElementById('studentName');
    if (nameEl) nameEl.textContent = currentUser.name;
    
    initDashboard();
    loadData();
});

// Sidebar navigation
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(target)?.classList.add('active');
    });
});

function initDashboard() {
    // Initialize dashboard specific features
    if (window.location.pathname.includes('student.html')) {
        initStudentDashboard();
    } else if (window.location.pathname.includes('staff.html')) {
        initStaffDashboard();
    } else if (window.location.pathname.includes('admin.html')) {
        initAdminDashboard();
    }
}