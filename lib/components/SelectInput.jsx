var {
    SelectField
    } = MUI;

Select = React.createClass({
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

        let options = this.props.options;

        if (this.props.useAllowedValues) {
            if (this.props.allowedValues) {
                options = [];
                this.props.allowedValues.map((value) => {
                    options.push({label: value, value: value});
                });
            } else {
                console.error("Select input " + this.props.name + " has useAllowedValues but does not have any allowedValues");
            }
        }

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <SelectField fullWidth={true} onChange={this._onChange} valueMember="value" displayMember="label" menuItems={options} {...this.props} errorText={this.props.errorText} value={this.state.value} />
            </div>
        )
    }
});