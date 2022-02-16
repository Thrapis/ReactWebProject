
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
    
    render() {
        return <form className='tools-form'>
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
                        <input type='button' value='Submit'/>
                        <input type='button' value='Cancel' onClick={this.props.cancelHandler}/>
                    </div>
                </form>
    }
}