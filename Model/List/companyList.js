
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
            case 'id': this.data = getCompaniesSortedById(this.state.direction == 'DESC'); break;
            case 'name': this.data = getCompaniesSortedByName(this.state.direction == 'DESC'); break;
        }

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
                    {DataCompanies.map((company, i)  => { 
                        let selected = this.props.selectedElement.company == company.id;
                        return <button className={selected ? 'scroll-element-selected' : 'scroll-element'}
                                     data={company['id']} key={i} onClick={this.props.onClickHandler}>
                                {company['name']}
                            </button>
                    })}
                </div>
        
    }
}