//-----------GET---------------------------

function getStudentById(studentId) {
    let students = DataStudents.filter(s => s.id == studentId);
    if (students.length == 1) return students[0];
    else return null;
}

function getCompanyById(companyId) {
    let companies = DataCompanies.filter(c => c.id == companyId);
    if (companies.length == 1) return companies[0];
    else return null;
}

function getEventById(eventId) {
    let events = DataEvents.filter(e => e.id == eventId);
    if (events.length == 1) return events[0];
    else return null;
}

function getEventsByStudentId(studentId) {
    let events = DataEvents.filter(e => e.studentId == studentId);
    if (events.length > 0) return events;
    else return [];
}

function getEventsByCompanyId(companyId) {
    let events = DataEvents.filter(e => e.companyId == companyId);
    if (events.length > 0) return events;
    else return [];
}

function getExtendedEvent(event) {
    if (event != null) {
        let student = getStudentById(event.studentId);
        let company = getCompanyById(event.companyId);
        return {event: event, student: student, company: company};
    }
    else return null;
}

function getExtendedEvents(events) {
    if (events.length > 0) return events.map(e => getExtendedEvent(e));
    else return [];
}

//----------Info--------------------------
function getInfoOfExtendedEventByStudentSide(extendedEvent) {
    let event = extendedEvent.event;
    let eventInfo = `${event.id}, ${event.date}, ${event.text}`;
    let companyInfo = '';
    if (extendedEvent.company != null) companyInfo = extendedEvent.company.name;
    else companyInfo = 'No company'

    return `${eventInfo} - ${companyInfo}`;
}

function getInfoOfExtendedEventByCompanySide(extendedEvent) {
    let event = extendedEvent.event;
    let eventInfo = `${event.id}, ${event.date}, ${event.text}`;
    let studentInfo = '';
    if (extendedEvent.student != null) studentInfo = extendedEvent.student.name;
    else studentInfo = 'No student'

    return `${eventInfo} - ${studentInfo}`;
}
//-----------ADD---------------------------

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

//-----------DEL---------------------------

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

//---------UPD-------------------------------

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