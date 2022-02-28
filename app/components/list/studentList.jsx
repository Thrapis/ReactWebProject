var React = require('react');
var GetSortedDataControl = require("../../data/control/getSortedData.js");
var GetDataControl = require("../../data/control/getData.js");
var StudentSorts = require("../../data/mainData.js").StudentSorts;

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
            case 'id': this.data = GetSortedDataControl.getStudentsSortedById(this.state.direction == 'DESC'); break;
            case 'name': this.data = GetSortedDataControl.getStudentsSortedByName(this.state.direction == 'DESC'); break;
            case 'spec': this.data = GetSortedDataControl.getStudentsSortedBySpec(this.state.direction == 'DESC'); break;
            case 'group': this.data = GetSortedDataControl.getStudentsSortedByGroup(this.state.direction == 'DESC'); break;
            case 'syear': this.data = GetSortedDataControl.getStudentsSortedBySYear(this.state.direction == 'DESC'); break;
        }
        this.data = GetDataControl.getStudentsByNamePattern(this.data, this.props.pattern);

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


module.exports = StudentList;