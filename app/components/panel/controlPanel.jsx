var React = require('react');
var ToolsPanel = require('./toolsPanel.jsx');
var StudentList = require('../list/studentList.jsx');
var CompanyList = require('../list/companyList.jsx');
var EventList = require('../list/eventList.jsx');

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pattern: ''
        }
    }

    onFilter = (value) => {
        this.setState({pattern: value});
    }

    renderTools() {
        // if (this.props.category == 'EV') return;
        // else 
        return  <ToolsPanel onAddHandler={this.props.onAddHandler} onDeleteHandler={this.props.onDeleteHandler} 
                        onEditHandler={this.props.onEditHandler} onFilterHandler={this.onFilter} pattern={this.state.pattern}
                        selectedElement={this.props.selectedElement} category={this.props.category}/>
    }

    renderList() {
        switch (this.props.category) {
            case 'ST': return <StudentList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler} pattern={this.state.pattern}/>
            case 'CO': return <CompanyList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler} pattern={this.state.pattern}/>
            case 'EV': return <EventList selectedElement={this.props.selectedElement} onClickHandler={this.props.onClickHandler} pattern={this.state.pattern}/>
            case 'DT': return <div></div>
        }
    }
    
    render() {
        return <div className='control-container'>
                    {this.renderTools()}
                    {this.renderList()}
                </div>
        
    }
}

module.exports = ControlPanel;