import React from "react";

export class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
        this.handleNav = this.handleNav.bind(this);
    }

    handleNav(e, s) {
        this.props.onNavigate(this.props.links[s].href);
    }

    render() {
        const employees = this.props.employees.map(employee =>
            <EmployeeListRow key={employee['_links'].self.href} employee={employee}/>
        );
        const navTo = ['first', 'prev', 'next', 'last']
        const navLinks = navTo.map(nav =>
            <button
                key={nav}
                onClick={e => this.handleNav(e, nav)}
                disabled={!this.props.links[nav]}>
                {nav}</button>
        );

        return (
            <div>
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
                {navLinks}
            </div>
        )
    }
}

class EmployeeListRow extends React.Component {
    render() {
        return (
            <tr>
                <td><a href={this.props.employee['_links'].self.href}>{this.props.employee.name}</a></td>
                <td>{this.props.employee['department'].name}</td>
                <td>{this.props.employee.address}</td>
                <td>{this.props.employee['phNumber']}</td>
                <td>{this.props.employee['holiday']['holidayCount']}
                    /{this.props.employee['holiday']['holidayTime']}</td>
                <td>{this.props.employee['entranceDate']}</td>
            </tr>
        )
    }
}
