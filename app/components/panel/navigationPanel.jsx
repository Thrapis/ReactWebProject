var React = require('react');
var REGIM = require("../../data/mainData.js").REGIM;

class NavigationPanel extends React.Component {

    constructor(props) {
        super(props);
        this.buttonState = {deselected: 'header-button-deselected', selected: 'header-button-selected'};
    }
    
    render() {
        return <div className="header-container">
                    {Object.entries(REGIM).map((pair, key) => { 
                        return <button className={this.props.category == pair[0] ? this.buttonState.selected : this.buttonState.deselected}
                                    onClick={this.props.onClickHandler} data={pair[0]} key={key}>
                                    {pair[1]}
                                </button>
                    })}
                </div>
    }
}

module.exports = NavigationPanel;