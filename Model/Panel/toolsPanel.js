
class ToolsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: 'NIL'
        };
        this.showButtons = true;
    }

    changeForm = (form) => this.setState({form: form});

    renderButtons(toRender) {
        if (toRender) {
            return <div className='tools-buttons-container'>
                        <button className='tools-button' onClick={() => this.changeForm('ADD')}><i className='fa fa-plus-circle icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('DEL')}><i className='fa fa-minus-circle icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('EDT')}><i className='fa fa-refresh icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('NIL')}><i className='fa fa-forward icon'/></button>
                    </div>
        }
        
    }

    renderForm(form) {
        this.showButtons = false;
        switch (form) {
            case 'ADD': return <AddForm  category={this.props.category}
                                    addHandler={this.props.onAddHandler} cancelHandler={() => this.changeForm('NIL')}/>
            case 'DEL': {
                let has = false;
                switch (this.props.category) {
                    case 'ST': has = getStudentById(this.props.selectedElement.student) != null; break;
                    case 'CO': has = getCompanyById(this.props.selectedElement.company) != null; break;
                    case 'EV': has = getEventById(this.props.selectedElement.event) != null; break;
                    case 'DT': return
                }
                if (has)
                    return <DeleteForm selectedElement={this.props.selectedElement} category={this.props.category}
                                    cancelHandler={() => this.changeForm('NIL')} deleteHandler={this.props.onDeleteHandler}/>
                else {
                    this.state.form = 'NIL';
                    this.showButtons = true;
                }  
            }
            case 'EDT': {
                let has = false;
                switch (this.props.category) {
                    case 'ST': has = getStudentById(this.props.selectedElement.student) != null; break;
                    case 'CO': has = getCompanyById(this.props.selectedElement.company) != null; break;
                    case 'EV': has = getEventById(this.props.selectedElement.event) != null; break;
                    case 'DT': return
                }
                if (has)
                    return <EditForm category={this.props.category} selectedElement={this.props.selectedElement}
                                    editHandler={this.props.onEditHandler} cancelHandler={() => this.changeForm('NIL')}/>
                else {
                    this.state.form = 'NIL';
                    this.showButtons = true;
                }  
            }
            
            default: this.showButtons = true;
        }
    }
    
    render() {
        return <div className='tools-container'>
                    {this.renderForm(this.state.form)}
                    {this.renderButtons(this.showButtons)}
                </div>
    }
}