function ascendingTextSort(arg1, arg2) { 
    if (arg1 > arg2) return 1;
    else if (arg1 < arg2) return -1;
    else return 0;
}

function descendingTextSort(arg1, arg2) { 
    if (arg1 > arg2) return -1;
    else if (arg1 < arg2) return 1;
    else return 0;
}

//---Students----

function getStudentsSortedById(descending = false) {
    if (descending) return DataStudents.sort((s1, s2) => s2.id - s1.id);
    else return DataStudents.sort((s1, s2) => s1.id - s2.id);
}

function getStudentsSortedByName(descending = false) {
    if (descending) return DataStudents.sort((s1, s2) => descendingTextSort(s1.name, s2.name));
    else return DataStudents.sort((s1, s2) => ascendingTextSort(s1.name, s2.name));
}

function getStudentsSortedBySpec(descending = false) {
    if (descending) return DataStudents.sort((s1, s2) => descendingTextSort(s1.spec, s2.spec));
    else return DataStudents.sort((s1, s2) => ascendingTextSort(s1.spec, s2.spec));
}

function getStudentsSortedBySYear(descending = false) {
    if (descending) return DataStudents.sort((s1, s2) => s2.syear - s1.syear);
    else return DataStudents.sort((s1, s2) => s1.syear - s2.syear);
}

function getStudentsSortedByGroup(descending = false) {
    if (descending) return DataStudents.sort((s1, s2) => s2.group - s1.group);
    else return DataStudents.sort((s1, s2) => s1.group - s2.group);
}

//---Companies----

function getCompaniesSortedById(descending = false) {
    if (descending) return DataCompanies.sort((c1, c2) => c2.id - c1.id);
    else return DataCompanies.sort((c1, c2) => c1.id - c2.id);
}

function getCompaniesSortedByName(descending = false) {
    if (descending) return DataCompanies.sort((c1, c2) => descendingTextSort(c1.name, c2.name));
    else return DataCompanies.sort((c1, c2) => ascendingTextSort(c1.name, c2.name));
}

//---Events----

function getEventsSortedById(descending = false) {
    if (descending) return DataEvents.sort((e1, e2) => e2.id - e1.id);
    else return DataEvents.sort((e1, e2) => e1.id - e2.id);
}

function getEventsSortedByDate(descending = false) {
    if (descending) return DataEvents.sort((e1, e2) => new Date(e2.date).getTime() - new Date(e1.date).getTime());
    else return DataEvents.sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());
}

function getEventsSortedByText(descending = false) {
    if (descending) return DataEvents.sort((e1, e2) => descendingTextSort(e1.text, e2.text));
    else return DataEvents.sort((e1, e2) => ascendingTextSort(e1.text, e2.text));
}