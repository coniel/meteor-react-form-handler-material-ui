let TextField = MUI.TextField;

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
        FormHandler.inputChanged(this.props.formId, this.props.name, event.nativeEvent.target.value);
    },
    render: function() {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <TextField fullWidth={true} onChange={this._onChange} {...this.props} errorText={this.props.errorText} />
            </div>
        )
    }
});