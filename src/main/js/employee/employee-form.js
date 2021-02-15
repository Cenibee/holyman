const React = require('react');

export class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {formRefs: {}};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const employee = {};
        this.props.onCreate(employee);
    }

    render() {
        const inputs = this.props.attributes.map(attribute => {
            this.state.formRefs[attribute] = React.createRef();
            return (
                <p key={attribute}>
                    <input
                        type={'text'}
                        placeholder={attribute}
                        ref={this.state.formRefs[attribute]}
                        className={'field'}/>
                </p>
            )
        })

        return (
            <div>
                <a href={'#employeeCreate'}>Create</a>
                <div id={'employeeCreate'} className={'modalDialog'}>
                    <div>
                        <a href={'#'} title={'close'} className={'close'}>
                            X
                        </a>
                        <h2>Create new Employee</h2>
                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}