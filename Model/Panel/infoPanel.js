class InfoPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    //<span className="info-list-element">List element</span>
    
    render() {
        this.hasInfo = false;
        switch (this.props.category) {
            case 'ST': 
                let students = DataStudents.filter(s => s.id == this.props.selectedElement.student);
                if (students.length == 1) {
                    let student = students[0];
                    this.hasInfo = true;
                    this.headInfo = `${student['name']}, ${student['spec']}-${student['syear']}-${student['group']}`
                }
                break;
            case 'CO':
                let companies = DataCompanies.filter(c => c.id == this.props.selectedElement.company);
                if (companies.length == 1) {
                    let company = companies[0];
                    this.hasInfo = true;
                    this.headInfo = `${company['name']}`
                }
                break;
            case 'EV':
                let events = DataEvents.filter(e => e.id == this.props.selectedElement.event);
                if (events.length == 1) {
                    let event = events[0];
                    this.hasInfo = true;
                    this.headInfo = `${event['text']}`
                }
                break;
            case 'DT': break;
        }

        if (this.hasInfo) {
            return <div className="info-container">
                        <span className="info-head-element">{this.headInfo}</span>
                        <hr className="delimetr-to-width"/>
                        
                    </div>
        }
        else {
            return <div className="info-container">{this.props.selectedElement.Student}</div>
        }
    }
}