
class StudentList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div className="scroll-container" id="scrollContainer">
                    {DataStudents.map((student, i)  => { 
                        let dis = this.props.selectedElement.student == student.id;
                        return <button disabled={dis} className="scroll-element" data={student['id']} key={i} onClick={this.props.onClickHandler}>
                                {student['name']}
                            </button>
                    })}
                </div>
        
    }
}