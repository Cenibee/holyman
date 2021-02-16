import React from 'react';

export class TextFormField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {type: 'text'};
    }

    render() {
        return (
            <p key={this.props.attribute}>
                <input
                    type={this.state.type}
                    placeholder={this.props.attribute}
                    onChange={e => this.props.onChange(this.props.attribute, e.target.value)}
                    value={this.props.value}
                    className={'field'}/>
            </p>
        )
    }
}

export class DateFormField extends TextFormField {
    constructor(props) {
        super(props);
        this.state = {type: 'date'};
    }
}

export class NumberFormField extends TextFormField {
    constructor(props) {
        super(props);
        this.state = {type: 'number'};
    }
}

export class SelectFormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = this.props.list.map(name =>
            <option
                key={name}
                value={name}>
                {name}
            </option>
        );

        return (
            <p key={this.props.attribute}>
                <select
                        onChange={e => this.props.onChange(this.props.attribute, e.target.value)}
                        value={this.props.value}
                        className={'field'}>
                    <option value={''}>select department...</option>
                    {options}
                </select>
            </p>
        )
    }
}