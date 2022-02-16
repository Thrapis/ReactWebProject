
class EventList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div className="scroll-container" id="scrollContainer">
                    {DataEvents.map((event, i)  => { 
                        let dis = this.props.selectedElement.event == event.id;
                        return <button disabled={dis} className="scroll-element" data={event['id']} key={i} onClick={this.props.onClickHandler}>
                                {`${event['text']} | ${event['date']}`}
                            </button>
                    })}
                </div>
        
    }
}