var Data = require("../mainData.js");

class AddControl {

    static addStudent(name, spec, group, syear) {
        let maxId = Math.max.apply(Math, Data.DataStudents.map(function(s) { return s.id; }));
        Data.DataStudents.push({id: maxId + 1, name: name, spec: spec, group: group, syear: syear});
    }
    
    static addCompany(name) {
        let maxId = Math.max.apply(Math, Data.DataCompanies.map(function(c) { return c.id; }));
        Data.DataCompanies.push({id: maxId + 1, name: name});
    }
    
    static addEvent(date, text, companyId, studentId) {
        let maxId = Math.max.apply(Math, Data.DataEvents.map(function(e) { return e.id; }));
        Data.DataEvents.push({id: maxId + 1, date: date, text: text, companyId: companyId, studentId: studentId});
    }
}

module.exports = AddControl;