
class EditForm extends React.Component {

    constructor(props) {
        super(props);
    }

    renderSpecs() {
        for (let spec in DataSpecs) {
            return <option value={spec}>{spec}</option>
        }
    }

    studentForm() {
        let editStudent = getStudentById(this.props.selectedElement.student);
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
                                {DataSpecs.map((spec, i)  => {
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
                        <input type='submit' value='Submit' onClick={(event) => { this.props.editHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }

    companyForm() {
        let editCompany = getCompanyById(this.props.selectedElement.company);
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
                        <input type='submit' value='Submit' onClick={(event) => { this.props.editHandler(event); this.props.cancelHandler();}}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
    
    render() {
        switch (this.props.category) {
            case 'ST': return this.studentForm();
            case 'CO': return this.companyForm()
            case 'EV': return
            case 'DT': return
        }
        
    }
}