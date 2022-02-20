function addStudent(name, spec, group, syear) {
    let maxId = Math.max.apply(Math, DataStudents.map(function(s) { return s.id; }));
    DataStudents.push({id: maxId + 1, name: name, spec: spec, group: group, syear: syear});
}

function addCompany(name) {
    let maxId = Math.max.apply(Math, DataCompanies.map(function(c) { return c.id; }));
    DataCompanies.push({id: maxId + 1, name: name});
}

function addEvent(date, text, companyId, studentId) {
    let maxId = Math.max.apply(Math, DataEvents.map(function(e) { return e.id; }));
    DataEvents.push({id: maxId + 1, date: date, text: text, companyId: companyId, studentId: studentId});
}