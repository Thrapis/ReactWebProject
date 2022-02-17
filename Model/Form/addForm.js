
class AddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    renderSpecs() {
        for (let spec in DataSpecs) {
            console.log(spec);
            return <option value={spec}>{spec}</option>
        }
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
                                {DataSpecs.map((spec, i)  => {
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
                        <input type='button' value='Submit' onClick={this.props.addHandler}/>
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
                        <input type='button' value='Submit' onClick={this.props.addHandler}/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
    
    render() {
        switch (this.props.category) {
            case 'ST': return this.studentForm()
            case 'CO': return this.companyForm()
            case 'EV': this.props.selectedElement.event = value; break;
            case 'DT': break;
        }
        
    }
}