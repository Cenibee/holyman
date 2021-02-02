// 리액트 컴포넌트로 사용할 App 컴포넌트에 대한 선언
import React from "react";

const axios = require('axios')

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    // DOM 에 React 가 렌더링된 후 실행할 함수
    componentDidMount() {
        axios.get('/api/employees')
            .then(response => {
                this.setState({employees: response.data._embedded.employees});
            });
    }

    // 화면에 컴포넌트를 그리도록하는 API - 프레임워크 레벨에서 콜된다.
    render () {
        return (
            <EmployeeList employees={this.state.employees}/>
        )
    }
}

class EmployeeList extends React.Component {
    render() {
        const employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Employee</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Rest Holiday</th>
                    <th>Rest Holitime</th>
                    <th>Entrance Date</th>
                </tr>
                {employees}
                </tbody>
            </table>
        )
    }
}

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td><a href={this.props.employee._links.self.href}>{this.props.employee.name}</a></td>
                <td>{this.props.employee.address}</td>
                <td>{this.props.employee.phNumber}</td>
                <td>{this.props.employee.holiday.holidayCount}</td>
                <td>{this.props.employee.holiday.holidayTime}</td>
                <td>{this.props.employee.entranceDate}</td>
            </tr>
        )
    }
}
