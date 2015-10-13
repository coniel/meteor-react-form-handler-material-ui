var MuiDatePicker = MUI.DatePicker;

DatePicker = React.createClass({
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
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    },
    _onChange(event, date) {
        FormHandler.inputChanged(this.props.formId, this.props.name, date);
        this.setState({
            value: date
        });
    },
    render: function () {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MuiDatePicker ref="datepicker" fullWidth={true} onChange={this._onChange} {...this.props} errorText={this.props.errorText} value={this.state.value} />
            </div>
        )
    }
});