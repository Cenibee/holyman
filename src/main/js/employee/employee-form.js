import {DateFormField, NumberFormField, SelectFormField, TextFormField} from "../common/form-fields";

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
            department: '',
            holidayCount: 0,
            holidayTime: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newEmployee = {
            name: this.state.name,
            entranceDate: this.state.entranceDate,
            address: this.state.address,
            mailAddress: this.state.mailAddress,
            phNumber: this.state.phNumber,
            department: this.props.department[this.state.department]['_links'].self.href,
            holiday: {
                holidayCount: this.state.holidayCount,
                holidayTime: this.state.holidayTime
            }
        }
        this.props.onCreate(newEmployee);
    }

    onChange(attribute, value) {
        this.setState({[attribute]: value});
    }

    onClose(e) {
        e.preventDefault();
        this.setState({
            formRefs: {},
            name: '',
            entranceDate: '',
            address: '',
            mailAddress: '',
            phNumber: '',
            department: ''
        });
        window.location.hash =''
    }

    render() {
        return (
            <div>
                <button onClick={this.onClose} className={'close'}>X</button>
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
                    <NumberFormField attribute={'holidayCount'} value={this.state['holidayCount']} onChange={this.onChange}/>
                    <NumberFormField attribute={'holidayTime'} value={this.state['holidayTime']} onChange={this.onChange}/>
                    <button onClick={this.handleSubmit}>
                        Create
                    </button>
                </form>
            </div>
        );
    }
}
