import React from 'react';
import MUIDatePicker from 'material-ui/DatePicker';
import { AvailableFormLayoutStyles } from 'react-ss-form-handler';

const DatePicker = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.object
    },
    getInitialState() {
        return {
            value: this.props.defaultValue
        }
    },
    componentWillMount() {
        if (this.props.formId) {
            FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    },
    _onChange(event, date) {
        if (this.props.formId) {
            FormHandler.inputChanged(this.props.formId, this.props.name, date);
        }
        this.setState({
            value: date
        });
    },
    render: function () {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MUIDatePicker ref="datepicker" fullWidth={true} onChange={this._onChange} {...this.props} floatingLabelText={this.props.label} placeholder={null} errorText={this.props.errorText} value={this.state.value} />
                <input type="hidden" name={this.props.name} value={this.state.value} />
            </div>
        )
    }
});

export default DatePicker;