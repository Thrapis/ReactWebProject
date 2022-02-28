var React = require('react');
var Data = require("../../data/mainData");

class AddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    studentForm() {
        return <form className='tools-form' id='addForm'>
                    <span className='tools-form-header'>Add</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentName'>Name</label>
                        <input type='text' id='studentName' placeholder='Иванов И.И.'/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentSpec'>Spec</label>
                        <select id="studentSpec" name="studentSpec">
                            {Data.DataSpecs.map((spec, i)  => {
                                return <option value={spec} key={i}>{spec}</option>
                            })}
                        </select>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentSYear'>SYear</label>
                        <input type='number' id='studentSYear' defaultValue={new Date().getFullYear()}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentGroup'>Group</label>
                        <input type='number' id='studentGroup' defaultValue='1'/>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={(event) => { this.props.addHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }

    companyForm() {
        return <form className='tools-form' id='addForm'>
                    <span className='tools-form-header'>Add</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='companyName'>Name</label>
                        <input type='text' id='companyName' placeholder='Megacorp Inc.'/>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={(event) => { this.props.addHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }

    eventForm() {
        const date = new Date();
        const futureDate = date.getDate() + 1;
        date.setDate(futureDate);
        const defaultValue = date.toLocaleDateString('en-CA');

        return <form className='tools-form' id='addForm'>
                    <span className='tools-form-header'>Add</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='eventDate'>Date</label>
                        <input type="date" id='eventDate' defaultValue={defaultValue}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='eventText'>Text</label>
                        <input type='text' id='eventText' placeholder='Work'/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='companyId'>Company</label>
                        <select id="companyId" name="companyId">
                            <option value={null} key={-1}>No company</option>
                            {Data.DataCompanies.map((company, i)  => {
                                return <option value={company.id} key={i}>{company.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentId'>Student</label>
                        <select id="studentId" name="studentId">
                            <option value={null} key={-1}>No student</option>
                            {Data.DataStudents.map((student, i)  => {
                                return <option value={student.id} key={i}>{student.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={(event) => { this.props.addHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
    
    render() {
        switch (this.props.category) {
            case 'ST': return this.studentForm()
            case 'CO': return this.companyForm()
            case 'EV': return this.eventForm()
            case 'DT': break;
        }
        
    }
}

module.exports = AddForm;