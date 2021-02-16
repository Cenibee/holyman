import axios from "axios";

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
                            {textFormField('name', this.state.formRefs)}
                            {textFormField('entranceDate', this.state.formRefs)}
                            {textFormField('address', this.state.formRefs)}
                            {textFormField('mailAddress', this.state.formRefs)}
                            {textFormField('phNumber', this.state.formRefs)}
                            {selectFormField('department', this.props.department, this.state.formRefs)}
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

function textFormField(attribute, refs) {
    refs[attribute] = React.createRef();
    return (
        <p key={attribute}>
            <input
                type={attribute.indexOf('Date') == -1 ? 'text' : 'date'}
                placeholder={attribute}
                ref={refs[attribute]}
                className={'field'}/>
        </p>
    )
}

function selectFormField(attribute, list, refs) {
    refs[attribute] = React.createRef();

    const options = list.map(option =>
        <option
                key={option}
                value={option}>
            {option.name}</option>
    )

    return (
        <p key={attribute}>
            <select
                    placeholder={attribute}
                    ref={refs[attribute]}
                    className={'field'}>
                {options}
            </select>
        </p>
    )
}

function holidayFormField(attribute, refs) {
    refs[attribute] = React.createRef();
    return (
        <p key={attribute}>
            in
        </p>
    )
}