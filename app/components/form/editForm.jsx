var React = require('react');
var GetDataControl = require("../../data/control/getData.js");
var Data = require("../../data/mainData");

class EditForm extends React.Component {

    constructor(props) {
        super(props);
    }
    
    studentForm() {
        let editStudent = GetDataControl.getStudentById(this.props.selectedElement.student);
        return <form className='tools-form' id='editForm'>
                    <span className='tools-form-header'>Edit</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentId'>Id</label>
                        <input type='text' id='studentId' key={editStudent.id} defaultValue={editStudent.id} readOnly disabled={true}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentName'>Name</label>
                        <input type='text' id='studentName' key={editStudent.id} placeholder='Иванов И.И.' defaultValue={editStudent.name}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentSpec'>Spec</label>
                        <select id="studentSpec" name="studentSpec" key={editStudent.id} defaultValue={editStudent.spec}>
                                {Data.DataSpecs.map((spec, i)  => {
                                    return <option value={spec} key={i}>{spec}</option>
                                })}
                        </select>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentSYear'>SYear</label>
                        <input type='number' id='studentSYear' key={editStudent.id} defaultValue={editStudent.syear}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentGroup'>Group</label>
                        <input type='number' id='studentGroup' key={editStudent.id} defaultValue={editStudent.group}/>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={(event) => { this.props.editHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }

    companyForm() {
        let editCompany = GetDataControl.getCompanyById(this.props.selectedElement.company);
        return <form className='tools-form' id='addForm'>
                    <span className='tools-form-header'>Edit</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='companyId'>Id</label>
                        <input type='text' id='companyId' key={editCompany.id} defaultValue={editCompany.id} readOnly disabled={true}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='companyName'>Name</label>
                        <input type='text' id='companyName' key={editCompany.id} placeholder='Megacorp Inc.' defaultValue={editCompany.name}/>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={(event) => { this.props.editHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }

    eventForm() {
        let editEvent = GetDataControl.getEventById(this.props.selectedElement.event);
        let extendedEditEvent = GetDataControl.getExtendedEvent(editEvent);

        const date = new Date(editEvent.date);
        const futureDate = date.getDate() + 1;
        date.setDate(futureDate);
        const defaultValue = date.toLocaleDateString('en-CA');

        return <form className='tools-form' id='editForm'>
                    <span className='tools-form-header'>Edit</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='eventId'>Id</label>
                        <input type='text' id='eventId' key={editEvent.id} defaultValue={editEvent.id} readOnly disabled={true}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='eventDate'>Date</label>
                        <input type="date" id='eventDate' key={editEvent.id} defaultValue={defaultValue}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='eventText'>Text</label>
                        <input type='text' id='eventText' key={editEvent.id} placeholder='Work' defaultValue={editEvent.text}/>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='companyId'>Company</label>
                        <select id="companyId" name="companyId" key={editEvent.id} 
                                defaultValue={extendedEditEvent.company != null ? extendedEditEvent.company.id : null}>
                            <option value={null} key={-1}>No company</option>
                            {Data.DataCompanies.map((company, i)  => {
                                return <option value={company.id} key={i}>{company.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='tools-form-pair'>
                        <label htmlFor='studentId'>Student</label>
                        <select id="studentId" name="studentId" key={editEvent.id}
                                defaultValue={extendedEditEvent.student != null ? extendedEditEvent.student.id : null}>
                            <option value={null} key={-1}>No student</option>
                            {Data.DataStudents.map((student, i)  => {
                                return <option value={student.id} key={i}>{student.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Submit' onClick={(event) => { this.props.editHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
    
    render() {
        switch (this.props.category) {
            case 'ST': return this.studentForm()
            case 'CO': return this.companyForm()
            case 'EV': return this.eventForm()
            case 'DT': return
        }
        
    }
}

module.exports = EditForm;