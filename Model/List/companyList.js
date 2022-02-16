
class CompanyList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div className="scroll-container" id="scrollContainer">
                    {DataCompanies.map((company, i)  => { 
                        let dis = this.props.selectedElement.company == company.id;
                        return <button disabled={dis} className="scroll-element" data={company['id']} key={i} onClick={this.props.onClickHandler}>
                                {company['name']}
                            </button>
                    })}
                </div>
        
    }
}