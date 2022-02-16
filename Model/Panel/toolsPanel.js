
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
                        <button className='tools-button' onClick={() => this.changeForm('NIL')}><i className='fa fa-refresh icon'/></button>
                        <button className='tools-button' onClick={() => this.changeForm('NIL')}><i className='fa fa-arrow-right icon'/></button>
                    </div>
        }
        
    }

    renderForm(form) {
        this.showButtons = false;
        switch (form) {
            case 'ADD': return <AddForm cancelHandler={() => this.changeForm('NIL')}/>
            case 'DEL': {
                let has = false;
                switch (this.props.category) {
                    case 'ST': has = DataStudents.filter(s => s.id == this.props.selectedElement.student).length == 1; break;
                    case 'CO': has = DataCompanies.filter(c => c.id == this.props.selectedElement.company).length == 1; break;
                    case 'EV': has = DataEvents.filter(e => e.id == this.props.selectedElement.event).length == 1; break;
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