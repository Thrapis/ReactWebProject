var Data = require("../mainData.js");

class DeleteControl {
    static deleteStudentById(id) {
        Data.DataStudents = Data.DataStudents.filter(s => s.id != id);
        Data.DataEvents.forEach(e => { 
            if (e.studentId == id) e.studentId = null;
        });
    }
    
    static deleteCompanyById(id) {
        Data.DataCompanies = Data.DataCompanies.filter(c => c.id != id);
        Data.DataEvents.forEach(e => { 
            if (e.companyId == id) e.companyId = null;
        });
    }
    
    static deleteEventById(id) {
        Data.DataEvents = Data.DataEvents.filter(e => e.id != id);
    }
    
    //---Massive delete---
    
    static deleteEventsAffiliatedWithStudentById(id) {
        Data.DataEvents = Data.DataEvents.filter(e => e.studentId != id);
    }
    
    static deleteEventsAffiliatedWithCompanyById(id) {
        Data.DataEvents = Data.DataEvents.filter(e => e.companyId != id);
    }
}

module.exports = DeleteControl;

