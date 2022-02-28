var Data = require("../mainData.js");

class GetDataControl {

    static getStudentById(studentId) {
        let students = Data.DataStudents.filter(s => s.id == studentId);
        if (students.length == 1) return students[0];
        else return null;
    }
    
    static getCompanyById(companyId) {
        let companies = Data.DataCompanies.filter(c => c.id == companyId);
        if (companies.length == 1) return companies[0];
        else return null;
    }
    
    static getEventById(eventId) {
        let events = Data.DataEvents.filter(e => e.id == eventId);
        if (events.length == 1) return events[0];
        else return null;
    }
    
    static getEventsByStudentId(studentId) {
        let events = Data.DataEvents.filter(e => e.studentId == studentId);
        if (events.length > 0) return events;
        else return [];
    }
    
    static getEventsByCompanyId(companyId) {
        let events = Data.DataEvents.filter(e => e.companyId == companyId);
        if (events.length > 0) return events;
        else return [];
    }
    
    static getExtendedEvent(event) {
        if (event != null) {
            let student = this.getStudentById(event.studentId);
            let company = this.getCompanyById(event.companyId);
            return {event: event, student: student, company: company};
        }
        else return null;
    }
    
    static getExtendedEvents(events) {
        if (events.length > 0) return events.map(e => this.getExtendedEvent(e));
        else return [];
    }
    
    //----------------------------------
    
    static getStudentsByNamePattern(students, pattern) {
        return students.filter(s => s.name.toLowerCase().includes(pattern.toLowerCase()));
    }
    
    static getCompaniesByNamePattern(companies, pattern) {
        return companies.filter(c => c.name.toLowerCase().includes(pattern.toLowerCase()));
    }
    
    static getEventsByTextPattern(events, pattern) {
        return events.filter(e => e.text.toLowerCase().includes(pattern.toLowerCase()));
    }
}

module.exports = GetDataControl;