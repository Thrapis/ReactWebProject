
class ToolsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: 'NIL'
        };
        this.showButtons = true;
        this.selected = false;
    }

    changeForm = (form) => this.setState({form: form});

    checkButtonsState() {
        this.showButtons = false;
        switch (this.props.category) {
            case 'ST': this.selected = getStudentById(this.props.selectedElement.student) != null; break;
            case 'CO': this.selected = getCompanyById(this.props.selectedElement.company) != null; break;
            case 'EV': this.selected = getEventById(this.props.selectedElement.event) != null; break;
            case 'DT': return
        }
        if (this.state.form == 'NIL') this.showButtons = true;
    }

    renderButtons() {
        if (this.showButtons) {
            if (this.selected) {
                return <div className='tools-buttons-container'>
                        <button className='tools-button' onClick={() => this.changeForm('ADD')}><i className='fa fa-plus-circle icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('DEL')}><i className='fa fa-minus-circle icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('EDT')}><i className='fa fa-refresh icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('NIL')}><i className='fa fa-forward icon'/></button>
                    </div>
            }
            else {
                return <div className='tools-buttons-container'>
                        <button className='tools-button-wide' onClick={() => this.changeForm('ADD')}><i className='fa fa-plus-circle icon'/></button>
                        <button className='tools-button-wide' onClick={() => this.changeForm('NIL')}><i className='fa fa-forward icon'/></button>
                    </div>
            }
        }
    }

    renderForm() {
        if (this.state.form == 'ADD') {
            return <AddForm  category={this.props.category} addHandler={this.props.onAddHandler}
                         cancelHandler={() => this.changeForm('NIL')}/>
        }
        else if (this.state.form == 'DEL' && this.selected) {
            return <DeleteForm selectedElement={this.props.selectedElement} category={this.props.category}
                                    cancelHandler={() => this.changeForm('NIL')} deleteHandler={this.props.onDeleteHandler}/>
        }
        else if (this.state.form == 'EDT' && this.selected) {
            return <EditForm category={this.props.category} selectedElement={this.props.selectedElement}
                                    editHandler={this.props.onEditHandler} cancelHandler={() => this.changeForm('NIL')}/>
        }
    }
    
    render() {
        {this.checkButtonsState();}
        return <div className='tools-container'>
                    {this.renderForm()}
                    {this.renderButtons()}
                </div>
    }
}