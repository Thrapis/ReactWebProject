
const REGIM = {
    ST: 'Students',
    CO: 'Companies',
    EV: 'Events',
    DT: 'Dicts'
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'ST',
            selectedElement: {
                student: -1,
                company: -1, 
                event: -1
            }
        }
    };

    onNavigationSelected = () => {
        this.state.category = event.target.attributes.getNamedItem('data').value;
        this.setState(this.state);
    };

    onListElementSelected = () => {
        let value = event.target.attributes.getNamedItem('data').value;
        switch (this.state.category) {
            case 'ST': this.state.selectedElement.student = value; break;
            case 'CO': this.state.selectedElement.company = value; break;
            case 'EV': this.state.selectedElement.event = value; break;
            case 'DT': break;
        }
        this.setState(this.state);
    };

    onDeleteElement = () => {
        //console.log('onDeleteElement');
        switch (this.state.category) {
            case 'ST': 
                DataStudents = DataStudents.filter(s => s.id != this.state.selectedElement.student);
                this.state.selectedElement.student = -1; 
                break;
            case 'CO': 
                DataCompanies = DataCompanies.filter(c => c.id != this.state.selectedElement.company);
                this.state.selectedElement.company = -1;
                break;
            case 'EV': 
                DataEvents = DataEvents.filter(e => e.id != this.state.selectedElement.event);
                this.state.selectedElement.event = -1;
                break;
            case 'DT': return
        }
        this.setState(this.state);
    }

    render() {
        return <div id='subroot'>
                    <NavigationPanel category={this.state.category} onClickHandler={this.onNavigationSelected}/>
                    <div className='main-container'>
                        <ControlPanel category={this.state.category} selectedElement={this.state.selectedElement} 
                            onDeleteHandler={this.onDeleteElement} onClickHandler={this.onListElementSelected}/>
                        <InfoPanel category={this.state.category} selectedElement={this.state.selectedElement}/>
                    </div>
                </div>
    };
}