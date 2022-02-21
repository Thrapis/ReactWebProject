
class DeleteForm extends React.Component {

    constructor(props) {
        super(props);
    }

    prerender() {
        this.hasInfo = false;
        switch (this.props.category) {
            case 'ST': 
                let student = getStudentById(this.props.selectedElement.student);
                if (student != null) {
                    this.hasInfo = true;
                    this.headInfo = `${student['name']}, ${student['spec']}-${student['syear']}-${student['group']}`;
                }
                break;
            case 'CO':
                let company = getCompanyById(this.props.selectedElement.company);
                if (company != null) {
                    this.hasInfo = true;
                    this.headInfo = `${company['name']}`;
                }
                break;
            case 'EV':
                let event = getEventById(this.props.selectedElement.event);
                if (event != null) {
                    this.hasInfo = true;
                    this.headInfo = `${event['text']}`;
                }
                break;
            case 'DT': break;
        }
    }
    
    render() {
        {this.prerender()}

        return <form className='tools-form'>
                    <span className='tools-form-header'>Delete</span>
                    <div className='tools-form-pair'>
                        <span className='tools-form-request'>Are you shure you want to delete "{this.headInfo}"?</span>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={this.props.deleteHandler}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
}