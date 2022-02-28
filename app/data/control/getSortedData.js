var Data = require("../mainData.js");

class GetSortedDataControl {

    static ascendingTextSort(arg1, arg2) { 
        if (arg1 > arg2) return 1;
        else if (arg1 < arg2) return -1;
        else return 0;
    }
    
    static descendingTextSort(arg1, arg2) { 
        if (arg1 > arg2) return -1;
        else if (arg1 < arg2) return 1;
        else return 0;
    }
    
    //---Students----
    
    static getStudentsSortedById(descending = false) {
        if (descending) return Data.DataStudents.sort((s1, s2) => s2.id - s1.id);
        else return Data.DataStudents.sort((s1, s2) => s1.id - s2.id);
    }
    
    static getStudentsSortedByName(descending = false) {
        if (descending) return Data.DataStudents.sort((s1, s2) => this.descendingTextSort(s1.name, s2.name));
        else return Data.DataStudents.sort((s1, s2) => this.ascendingTextSort(s1.name, s2.name));
    }
    
    static getStudentsSortedBySpec(descending = false) {
        if (descending) return Data.DataStudents.sort((s1, s2) => this.descendingTextSort(s1.spec, s2.spec));
        else return Data.DataStudents.sort((s1, s2) => this.ascendingTextSort(s1.spec, s2.spec));
    }
    
    static getStudentsSortedBySYear(descending = false) {
        if (descending) return Data.DataStudents.sort((s1, s2) => s2.syear - s1.syear);
        else return Data.DataStudents.sort((s1, s2) => s1.syear - s2.syear);
    }
    
    static getStudentsSortedByGroup(descending = false) {
        if (descending) return Data.DataStudents.sort((s1, s2) => s2.group - s1.group);
        else return Data.DataStudents.sort((s1, s2) => s1.group - s2.group);
    }
    
    //---Companies----
    
    static getCompaniesSortedById(descending = false) {
        if (descending) return Data.DataCompanies.sort((c1, c2) => c2.id - c1.id);
        else return Data.DataCompanies.sort((c1, c2) => c1.id - c2.id);
    }
    
    static getCompaniesSortedByName(descending = false) {
        if (descending) return Data.DataCompanies.sort((c1, c2) => this.descendingTextSort(c1.name, c2.name));
        else return Data.DataCompanies.sort((c1, c2) => this.ascendingTextSort(c1.name, c2.name));
    }
    
    //---Events----
    
    static getEventsSortedById(descending = false) {
        if (descending) return Data.DataEvents.sort((e1, e2) => e2.id - e1.id);
        else return Data.DataEvents.sort((e1, e2) => e1.id - e2.id);
    }
    
    static getEventsSortedByDate(descending = false) {
        if (descending) return Data.DataEvents.sort((e1, e2) => new Date(e2.date).getTime() - new Date(e1.date).getTime());
        else return Data.DataEvents.sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());
    }
    
    static getEventsSortedByText(descending = false) {
        if (descending) return Data.DataEvents.sort((e1, e2) => this.descendingTextSort(e1.text, e2.text));
        else return Data.DataEvents.sort((e1, e2) => this.ascendingTextSort(e1.text, e2.text));
    }
}

module.exports = GetSortedDataControl;