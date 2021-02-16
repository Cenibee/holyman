import {DateFormField, SelectFormField, TextFormField} from "../common/form-fields";

const React = require('react');

export class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formRefs: {},
            name: '',
            entranceDate: '',
            address: '',
            mailAddress: '',
            phNumber: '',
            department: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.holidayFormField = this.holidayFormField.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO
        // this.props.onCreate(employee);
    }

    holidayFormField() {
        return (
            // TODO
            <p/>
        )
    }

    onChange(attribute, value) {
        this.setState({[attribute]: value});
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
                            <TextFormField attribute={'name'} value={this.state['name']} onChange={this.onChange}/>
                            <TextFormField attribute={'address'} value={this.state['address']} onChange={this.onChange}/>
                            <TextFormField attribute={'mailAddress'} value={this.state['mailAddress']} onChange={this.onChange}/>
                            <TextFormField attribute={'phNumber'} value={this.state['phNumber']} onChange={this.onChange}/>
                            <DateFormField attribute={'entranceDate'} value={this.state['entranceDate']} onChange={this.onChange}/>
                            <SelectFormField
                                attribute={'department'} onChange={this.onChange}
                                value={this.state['department']}
                                list={Object.keys(this.props.department)}/>
                            {this.holidayFormField()}
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
