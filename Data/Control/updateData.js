function updateStudentById(id, name, spec, group, syear) {
    DataStudents.forEach(s => {
        if (s.id == id) {
            s.name = name;
            s.spec = spec;
            s.group = group;
            s.syear = syear;
        }
    });
}

function updateCompanyById(id, name) {
    DataCompanies.forEach(c => {
        if (c.id == id) {
            c.name = name;
        }
    });
}

function updateEventById(id, date, text, companyId, studentId) {
    DataEvents.forEach(e => {
        if (e.id == id) {
            e.date = date;
            e.text = text;
            e.companyId = companyId;
            e.studentId = studentId;
        }
    });
}