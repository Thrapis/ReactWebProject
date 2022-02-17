class InfoPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    //<span className="info-list-element">List element</span>
    
    prerender() {
        this.hasInfo = false;
        this.headInfo = '';
        this.detailsList = [];
        switch (this.props.category) {
            case 'ST': 
                let student = getStudentById(this.props.selectedElement.student);
                if (student != null) {
                    let events = getEventsByStudentId(this.props.selectedElement.student);
                    let extendedEvents = getExtendedEvents(events);

                    this.hasInfo = true;
                    this.headInfo = `${student['name']}, ${student['spec']}-${student['syear']}-${student['group']}`;
                    this.detailsList = extendedEvents.map(ee => getInfoOfExtendedEventByStudentSide(ee));
                }
                break;
            case 'CO':
                let company = getCompanyById(this.props.selectedElement.company);
                if (company != null) {
                    let events = getEventsByCompanyId(this.props.selectedElement.company);
                    let extendedEvents = getExtendedEvents(events);

                    this.hasInfo = true;
                    this.headInfo = `${company['name']}`;
                    this.detailsList = extendedEvents.map(ee => getInfoOfExtendedEventByCompanySide(ee));
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
    }

    render() {
        {this.prerender()}

        if (this.hasInfo) {
            return <div className="info-container">
                        <span className="info-head-element">{this.headInfo}</span>
                        <hr className="delimetr-to-width"/>
                        {this.detailsList.map((elem, i)  => { 
                            return <span className="info-list-element" key={i}>{elem}</span>
                        })}
                    </div>
        }
        else {
            return <div className="info-container">{this.props.selectedElement.Student}</div>
        }
    }
}