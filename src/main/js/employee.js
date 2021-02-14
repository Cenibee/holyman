// 리액트 컴포넌트로 사용할 App 컴포넌트에 대한 선언
import React from "react";
import 'regenerator-runtime/runtime'

const axios = require('axios')

const DEFAULT_PAGE_SIZE = 2

export default class Employee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: DEFAULT_PAGE_SIZE
        };
    }

    // DOM 에 React 가 렌더링된 후 실행할 함수
    componentDidMount() {
        this.loadFromServer().finally(/* Do Nothing*/)
    }

    async loadFromServer(pageSize=this.state.pageSize, page=0) {
        const employeeCollection = await axios.get('/api/employees', {
            params: {
                size: pageSize,
                page: page
            },
        });

        const schema = await axios.get(employeeCollection.data['_links'].profile.href, {
            headers: {Accept: 'application/schema+json'}
        });

        this.setState({
            employees: employeeCollection.data['_embedded'].employees,
            pageSize: pageSize,
            page: employeeCollection.data.page,
            links: employeeCollection.data['_links'],
            attributes: Object.keys(schema.data.properties)
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
        if(!this.props.employees) return <div/>;

        const employees = this.props.employees.map(employee =>
            <EmployeeListRow key={employee._links.self.href} employee={employee}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Holiday</th>
                    <th>Entrance Date</th>
                </tr>
                {employees}
                </tbody>
            </table>
        )
    }
}

class EmployeeListRow extends React.Component {
    render() {
        return (
            <tr>
                <td><a href={this.props.employee._links.self.href}>{this.props.employee.name}</a></td>
                <td>{this.props.employee.department.name}</td>
                <td>{this.props.employee.address}</td>
                <td>{this.props.employee.phNumber}</td>
                <td>{this.props.employee.holiday.holidayCount}
                    /{this.props.employee.holiday.holidayTime}</td>
                <td>{this.props.employee.entranceDate}</td>
            </tr>
        )
    }
}
