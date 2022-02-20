function deleteStudentById(id) {
    DataStudents = DataStudents.filter(s => s.id != id);
    DataEvents.forEach(e => { 
        if (e.studentId == id) e.studentId = null;
    });
}

function deleteCompanyById(id) {
    DataCompanies = DataCompanies.filter(c => c.id != id);
    DataEvents.forEach(e => { 
        if (e.companyId == id) e.companyId = null;
    });
}

function deleteEventById(id) {
    DataEvents = DataEvents.filter(e => e.id != id);
}