
class DeleteForm extends React.Component {

    constructor(props) {
        super(props);
    }
    
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

        return <form className='tools-form'>
                    <span className='tools-form-header'>Delete</span>
                    <div className='tools-form-pair'>
                        <span className='tools-form-request'>I you shure you want to delete "{this.headInfo}"?</span>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={this.props.deleteHandler}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
}