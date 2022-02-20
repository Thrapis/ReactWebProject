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