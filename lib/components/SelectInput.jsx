var {
    SelectField
    } = MUI;

SelectInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        options: React.PropTypes.arrayOf(React.PropTypes.object),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    getInitialState() {
        return {
            value: this.props.defaultValue
        }
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    _onChange(event) {
        this.setState({
            value: event.nativeEvent.target.value
        });
        FormHandler.inputChanged(this.props.formId, this.props.name, event.nativeEvent.target.value);
    },
    render: function () {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <SelectField fullWidth={true} onChange={this._onChange} valueMember="value" displayMember="label" menuItems={this.props.options} {...this.props} errorText={this.props.errorText} value={this.state.value} />
            </div>
        )
    }
});