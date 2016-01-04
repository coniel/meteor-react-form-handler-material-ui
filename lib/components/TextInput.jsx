TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    _onChange(event) {

        let value = event.nativeEvent.target.value;

        if (this.props._valueType === "number") {
            value = Number(value);
        }

        FormHandler.inputChanged(this.props.formId, this.props.name, value);
    },
    render: function() {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MUITextField fullWidth={true} onChange={this._onChange} {...this.props} placeholder={null} hintText={this.props.placeholder} floatingLabelText={this.props.label} errorText={this.props.errorText} />
            </div>
        )
    }
});