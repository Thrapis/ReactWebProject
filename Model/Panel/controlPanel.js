
class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    //<StudentList onClickHandler={this.props.onClickHandler}

    renderList(param) {
        switch (param) {
            case 'ST': return <StudentList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler}/>
            case 'CO': return <CompanyList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler}/>
            case 'EV': return <EventList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler}/>
            case 'DT': return <div></div>
        }
    }
    
    render() {
        return <div className='control-container'>
                    <ToolsPanel onDeleteHandler={this.props.onDeleteHandler} selectedElement={this.props.selectedElement} category={this.props.category}/>
                    {this.renderList(this.props.category)}
                </div>
        
    }
}