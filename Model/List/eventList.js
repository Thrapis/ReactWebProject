
class EventList extends React.Component {

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
            case 'id': this.data = getEventsSortedById(this.state.direction == 'DESC'); break;
            case 'date': this.data = getEventsSortedByDate(this.state.direction == 'DESC'); break;
            case 'text': this.data = getEventsSortedByText(this.state.direction == 'DESC'); break;
        }

        return <div className="scroll-container" id="scrollContainer">
                    <div className='scroll-sort-box'>
                        <span className='scroll-sort-label'>Sort:&nbsp;</span>
                        <select id="sortType" name="sortType" className='scroll-sort-select' onChange={this.onSortChange}>
                            {EventSorts.map((val, i)  => {
                                return <option value={val} key={i}>{val}</option>
                            })}
                        </select>
                        <select id="sortDirection" name="sortDirection" className='scroll-sort-select' onChange={this.onSortChange}>
                            <option value='ASC'>Ascending</option>
                            <option value='DESC'>Descending</option>
                        </select>
                    </div>
                    {DataEvents.map((event, i)  => { 
                        let dis = this.props.selectedElement.event == event.id;
                        return <button disabled={dis} className="scroll-element" data={event['id']} key={i} onClick={this.props.onClickHandler}>
                                {`${event['text']} | ${event['date']}`}
                            </button>
                    })}
                </div>
        
    }
}