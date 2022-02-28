var React = require('react');
var GetSortedDataControl = require("../../data/control/getSortedData.js");
var GetDataControl = require("../../data/control/getData.js");
var CompanySorts = require("../../data/mainData.js").CompanySorts;

class CompanyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'id',
            direction: 'ASC'
        }
    }

    onSortChange = () => {
        this.state.type = document.getElementById('sortType').value;
        this.state.direction = document.getElementById('sortDirection').value;
        this.setState(this.state);
    }
    
    render() {
        switch (this.state.type) {
            case 'id': this.data = GetSortedDataControl.getCompaniesSortedById(this.state.direction == 'DESC'); break;
            case 'name': this.data = GetSortedDataControl.getCompaniesSortedByName(this.state.direction == 'DESC'); break;
        }
        this.data = GetDataControl.getCompaniesByNamePattern(this.data, this.props.pattern);

        return <div className="scroll-container" id="scrollContainer">
                    <div className='scroll-sort-box'>
                        <span className='scroll-sort-label'>Sort:&nbsp;</span>
                        <select id="sortType" name="sortType" className='scroll-sort-select' onChange={this.onSortChange}>
                            {CompanySorts.map((val, i)  => {
                                return <option value={val} key={i}>{val}</option>
                            })}
                        </select>
                        <select id="sortDirection" name="sortDirection" className='scroll-sort-select' onChange={this.onSortChange}>
                            <option value='ASC'>Ascending</option>
                            <option value='DESC'>Descending</option>
                        </select>
                    </div>
                    {this.data.map((company, i)  => { 
                        let selected = this.props.selectedElement.company == company.id;
                        return <button className={selected ? 'scroll-element-selected' : 'scroll-element'}
                                     data={company['id']} key={i} onClick={this.props.onClickHandler}>
                                {company['name']}
                            </button>
                    })}
                </div>
        
    }
}

module.exports = CompanyList;