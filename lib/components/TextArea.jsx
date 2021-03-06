import React from 'react';
import TextField from 'material-ui/TextField';
import { AvailableFormLayoutStyles, FormLayoutStyles, FormHandler } from 'react-ss-form-handler';

const TextArea = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    componentWillMount() {
        if (this.props.formId) {
            FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
        }
    },
    _onChange(event) {

        let value = event.nativeEvent.target.value;

        if (this.props.type === "number") {
            value = parseFloat(value);
        }
        if (this.props.formId) {
            FormHandler.inputChanged(this.props.formId, this.props.name, value);
        }
    },
    render: function() {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <TextField fullWidth={true} onChange={this._onChange} {...this.props} multiLine={true} placeholder={null} hintText={this.props.placeholder} floatingLabelText={this.props.label} errorText={this.props.errorText} />
            </div>
        )
    }
});

export default TextArea;