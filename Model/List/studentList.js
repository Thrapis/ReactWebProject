
class StudentList extends React.Component {

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
            case 'id': this.data = getStudentsSortedById(this.state.direction == 'DESC'); break;
            case 'name': this.data = getStudentsSortedByName(this.state.direction == 'DESC'); break;
            case 'spec': this.data = getStudentsSortedBySpec(this.state.direction == 'DESC'); break;
            case 'group': this.data = getStudentsSortedByGroup(this.state.direction == 'DESC'); break;
            case 'syear': this.data = getStudentsSortedBySYear(this.state.direction == 'DESC'); break;
        }
        this.data = getStudentsByNamePattern(this.data, this.props.pattern);

        return <div className="scroll-container" id="scrollContainer">
                    <div className='scroll-sort-box'>
                        <span className='scroll-sort-label'>Sort:&nbsp;</span>
                        <select id="sortType" name="sortType" className='scroll-sort-select' onChange={this.onSortChange}>
                            {StudentSorts.map((val, i)  => {
                                return <option value={val} key={i}>{val}</option>
                            })}
                        </select>
                        <select id="sortDirection" name="sortDirection" className='scroll-sort-select' onChange={this.onSortChange}>
                            <option value='ASC'>Ascending</option>
                            <option value='DESC'>Descending</option>
                        </select>
                    </div>
                    {this.data.map((student, i)  => { 
                        let selected = this.props.selectedElement.student == student.id;
                        return <button className={selected ? 'scroll-element-selected' : 'scroll-element'} 
                                    data={student['id']} key={i} onClick={this.props.onClickHandler}>
                                {student['id']} - {student['name']}
                            </button>
                    })}
                </div>
        
    }
}