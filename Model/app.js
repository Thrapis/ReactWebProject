
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
                student: null,
                company: null, 
                event: null
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

    onAddElement = () => {
        //console.log('onAddElement');
        switch (this.state.category) {
            case 'ST': 
                let sname = document.getElementById('studentName').value;
                let spec = document.getElementById('studentSpec').value;
                let syear = document.getElementById('studentSYear').value;
                let group = document.getElementById('studentGroup').value;
                addStudent(sname, spec, group, syear);
                break;
            case 'CO': 
                let cname = document.getElementById('companyName').value;
                addCompany(cname);
                break;
            case 'EV': 
                
                break;
            case 'DT': return
        }
        this.setState(this.state);
    }

    onDeleteElement = () => {
        //console.log('onDeleteElement');
        switch (this.state.category) {
            case 'ST': 
                deleteStudentById(this.state.selectedElement.student);
                this.state.selectedElement.student = null; 
                break;
            case 'CO': 
                deleteCompanyById(this.state.selectedElement.company);
                this.state.selectedElement.company = null;
                break;
            case 'EV': 
                deleteEventById(this.state.selectedElement.event);
                this.state.selectedElement.event = null;
                break;
            case 'DT': return
        }
        this.setState(this.state);
    }

    onEditElement = () => {
        //console.log('onAddElement');
        switch (this.state.category) {
            case 'ST': 
                let sname = document.getElementById('studentName').value;
                let spec = document.getElementById('studentSpec').value;
                let syear = document.getElementById('studentSYear').value;
                let group = document.getElementById('studentGroup').value;
                updateStudentById(this.state.selectedElement.student, sname, spec, group, syear);
                break;
            case 'CO': 
                let cname = document.getElementById('companyName').value;
                updateCompanyById(this.state.selectedElement.company, cname);
                break;
            case 'EV': 
                
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
                            onAddHandler={this.onAddElement} onDeleteHandler={this.onDeleteElement}
                            onEditHandler={this.onEditElement} onClickHandler={this.onListElementSelected}/>
                        <InfoPanel category={this.state.category} selectedElement={this.state.selectedElement}/>
                    </div>
                </div>
    };
}