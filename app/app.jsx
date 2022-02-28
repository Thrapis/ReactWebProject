var React = require('react');
var ReactDOM = require('react-dom');

var InfoPanel = require('./components/panel/infoPanel.jsx');
var NavigationPanel = require('./components/panel/navigationPanel.jsx');
var ControlPanel = require('./components/panel/controlPanel.jsx');


//var Data = require("../mainData.js");
var AddControl = require("./data/control/addData.js");
var UpdateControl = require("./data/control/updateData.js");
var DeleteControl = require("./data/control/deleteData.js");



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
            case 'ST': 
                this.state.selectedElement.student = (value == this.state.selectedElement.student ? null : value);
                break;
            case 'CO': 
                this.state.selectedElement.company = (value == this.state.selectedElement.company ? null : value);
                break;
            case 'EV':
                this.state.selectedElement.event = (value == this.state.selectedElement.event ? null : value);
                break;
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
                AddControl.addStudent(sname, spec, group, syear);
                break;
            case 'CO': 
                let cname = document.getElementById('companyName').value;
                AddControl.addCompany(cname);
                break;
            case 'EV': 
                let date = document.getElementById('eventDate').value;
                let text = document.getElementById('eventText').value;
                let studentId = document.getElementById('studentId').value;
                let companyId = document.getElementById('companyId').value;
                AddControl.addEvent(date, text, companyId, studentId);
                break;
            case 'DT': return
        }
        this.setState(this.state);
    }

    onDeleteElement = () => {
        //console.log('onDeleteElement');
        let deleteEvents = false;
        switch (this.state.category) {
            case 'ST':
                deleteEvents = confirm("Do you want to delete events affilated with this student?");
                if (deleteEvents) DeleteControl.deleteEventsAffiliatedWithStudentById(this.state.selectedElement.student);
                DeleteControl.deleteStudentById(this.state.selectedElement.student);
                this.state.selectedElement.student = null; 
                break;
            case 'CO': 
                deleteEvents = confirm("Do you want to delete events affilated with this company?");
                if (deleteEvents) DeleteControl.deleteEventsAffiliatedWithCompanyById(this.state.selectedElement.company);
                DeleteControl.deleteCompanyById(this.state.selectedElement.company);
                this.state.selectedElement.company = null;
                break;
            case 'EV': 
            DeleteControl.deleteEventById(this.state.selectedElement.event);
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
                UpdateControl.updateStudentById(this.state.selectedElement.student, sname, spec, group, syear);
                break;
            case 'CO': 
                let cname = document.getElementById('companyName').value;
                UpdateControl.updateCompanyById(this.state.selectedElement.company, cname);
                break;
            case 'EV': 
                let date = document.getElementById('eventDate').value;
                let text = document.getElementById('eventText').value;
                let studentId = document.getElementById('studentId').value;
                let companyId = document.getElementById('companyId').value;
                UpdateControl.updateEventById(this.state.selectedElement.event, date, text, companyId, studentId);
                break;
            case 'DT': return
        }
        this.setState(this.state);
    }

    rederInfoPanel() {
        if (this.state.category != 'EV')
            return <InfoPanel category={this.state.category} selectedElement={this.state.selectedElement}/>
    }

    render() {
        return <div id='subroot'>
                    <NavigationPanel category={this.state.category} onClickHandler={this.onNavigationSelected}/>
                    <div className='main-container'>
                        <ControlPanel category={this.state.category} selectedElement={this.state.selectedElement} 
                            onAddHandler={this.onAddElement} onDeleteHandler={this.onDeleteElement}
                            onEditHandler={this.onEditElement} onClickHandler={this.onListElementSelected}/>
                            {this.rederInfoPanel()}
                    </div>
                </div>
    };
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
  )