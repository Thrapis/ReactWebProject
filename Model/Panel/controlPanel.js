
class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    //<StudentList onClickHandler={this.props.onClickHandler}

    renderTools(category) {
        if (category == 'EV') return;
        else return  <ToolsPanel onAddHandler={this.props.onAddHandler} onDeleteHandler={this.props.onDeleteHandler} 
                        onEditHandler={this.props.onEditHandler}
                        selectedElement={this.props.selectedElement} category={this.props.category}/>
    }

    renderList(category) {
        switch (category) {
            case 'ST': return <StudentList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler}/>
            case 'CO': return <CompanyList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler}/>
            case 'EV': return <EventList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler}/>
            case 'DT': return <div></div>
        }
    }
    
    render() {
        return <div className='control-container'>
                    {this.renderTools(this.props.category)}
                    {this.renderList(this.props.category)}
                </div>
        
    }
}