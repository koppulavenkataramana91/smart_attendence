// Mock data for demonstration
const users = {
    admin: { id: 'admin', password: 'admin123', role: 'admin', name: 'Admin User' },
    staff: { 
        id: 'S001', password: 'staff123', role: 'staff', 
        name: 'John Doe', department: 'Mathematics', email: 'john@school.com'
    },
    student: { 
        id: 'STU001', password: 'student123', role: 'student', 
        name: 'Jane Smith', class: 'Class A', barcode: '123456789012'
    }
};

const students = [
    { id: 'STU001', name: 'Jane Smith', class: 'Class A', attendance: 92 },
    { id: 'STU002', name: 'Mike Johnson', class: 'Class A', attendance: 87 },
    // Add more students...
];

const staffList = [
    { id: 'S001', name: 'John Doe', email: 'john@school.com', department: 'Mathematics' },
    { id: 'S002', name: 'Sarah Wilson', email: 'sarah@school.com', department: 'Science' },
];