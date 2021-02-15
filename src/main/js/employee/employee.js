// 리액트 컴포넌트로 사용할 App 컴포넌트에 대한 선언
import React from "react";
import {EmployeeList} from './employee-list'
import {EmployeeForm} from "./employee-form";

import 'regenerator-runtime/runtime'

const axios = require('axios')

const DEFAULT_PAGE_SIZE = 2

export default class Employee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageSize: DEFAULT_PAGE_SIZE,
            employees: [],
            links: {},
            attributes: []
        };

        this.onCreate = this.onCreate.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
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

    onCreate(employee) {
        axios.post('/api/employees', employee).catch(reason => {
            alert("Failed to create employee: " + reason);
        });
    }

    onNavigate(navUrl) {
        axios.get(navUrl).then(employeeCollection => {
            this.setState({
                employees: employeeCollection.data['_embedded'].employees,
                links: employeeCollection.data['_links'],
                page: employeeCollection.data.page
            });
        });
    }

    // 화면에 컴포넌트를 그리도록하는 API - 프레임워크 레벨에서 콜된다.
    render () {
        return (
            <div>
                <EmployeeForm
                    attributes={this.state.attributes}
                    onCreate={this.onCreate}/>
                <EmployeeList
                    links={this.state.links}
                    employees={this.state.employees}
                    onNavigate={this.onNavigate}/>
            </div>
        )
    }
}
