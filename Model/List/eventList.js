
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
        this.data = getEventsByTextPattern(this.data, this.props.pattern);

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
                    {this.data.map((event, i)  => { 
                        let selected = this.props.selectedElement.event == event.id;
                        if (selected){
                            return <div className='selected-event-block' key={i}>
                                    <button className='scroll-element-selected' data={event.id} onClick={this.props.onClickHandler}>
                                        {`${event.text}, ${event.date}`}
                                    </button>
                                    <div className='selected-event-info'>
                                        <span className='selected-event-info-row'>
                                            <span>ID:</span>
                                            <span>{event.id}</span>
                                        </span>
                                        <hr className='delimetr-to-width'/>
                                        <span className='selected-event-info-row'>
                                            <span>Date:</span>
                                            <span>{event.date}</span>
                                        </span>
                                        <hr className='delimetr-to-width'/>
                                        <span className='selected-event-info-row'>
                                            <span>Text:</span>
                                            <span>{event.text}</span>
                                        </span>
                                        <hr className='delimetr-to-width'/>
                                        <span className='selected-event-info-row'>
                                            <span>Company:</span>
                                            <span>{event.companyId != null ? getCompanyById(event.companyId).name : 'No company'}</span>
                                        </span>
                                        <hr className='delimetr-to-width'/>
                                        <span className='selected-event-info-row'>
                                            <span>Student:</span>
                                            <span>{event.studentId != null ? getStudentById(event.studentId).name : 'No student'}</span>
                                        </span>
                                    </div>
                                </div>
                        }
                        else {
                            return <button className='scroll-element' data={event['id']} key={i} onClick={this.props.onClickHandler}>
                                    {`${event['text']}, ${event['date']}`}
                                </button>
                        }
                        
                    })}
                </div>
        
    }
}