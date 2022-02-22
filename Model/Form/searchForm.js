
class SearchForm extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange() {
        let val = document.getElementById('patternField').value;
        this.props.onChangeHandler(val);
    }

    onClose(event) {
        this.props.onChangeHandler('');
        this.props.cancelHandler(event);
    }
    
    form() {
        return <form className='tools-form' id='searchForm'>
                    <span className='tools-form-header'>Search</span>
                    <div className='tools-form-pair'>
                        <label htmlFor='patternField'>Pattern</label>
                        <input type='text' id='patternField' onChange={() => this.onChange()} defaultValue={this.props.pattern}/>
                    </div>
                    <div className='tools-form-control'>
                        <input type='button' value='Cancel' onClick={(event) => this.onClose(event)}/>
                    </div>
                </form>
    }
    
    render() {
        return this.form()
    }
}