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