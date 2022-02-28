var Data = require("../mainData.js");

class UpdateControl {

    static updateStudentById(id, name, spec, group, syear) {
        Data.DataStudents.forEach(s => {
            if (s.id == id) {
                s.name = name;
                s.spec = spec;
                s.group = group;
                s.syear = syear;
            }
        });
    }
    
    static updateCompanyById(id, name) {
        Data.DataCompanies.forEach(c => {
            if (c.id == id) {
                c.name = name;
            }
        });
    }
    
    static updateEventById(id, date, text, companyId, studentId) {
        Data.DataEvents.forEach(e => {
            if (e.id == id) {
                e.date = date;
                e.text = text;
                e.companyId = companyId;
                e.studentId = studentId;
            }
        });
    }
}

module.exports = UpdateControl;