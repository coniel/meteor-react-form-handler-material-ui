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
        if (this.props.formId) {
            FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
        }
    },
    _onChange(event, index, value) {
        this.setState({
            value: value
        });
        if (this.props.formId) {
            FormHandler.inputChanged(this.props.formId, this.props.name, value);
        }
    },
    render: function () {

        let options = [];

        if (this.props.useAllowedValues) {
            if (this.props.allowedValues) {
                this.props.allowedValues.map((value) => {
                    options.push(<MUIComponents.MenuItem key={value} value={value} primaryText={value} />);
                });
            } else {
                console.error("Select input " + this.props.name + " has useAllowedValues but does not have any allowedValues");
            }
        } else {
            this.props.options.map((option) => {
                options.push(<MUIComponents.MenuItem key={option.value} value={option.value} primaryText={option.label} />);
            });
        }

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MUIComponents.SelectField {...this.props} fullWidth={true} onChange={this._onChange} floatingLabelText={this.props.label} hintText={this.props.placeholder} placeholder={null} errorText={this.props.errorText} value={this.state.value}>
                    {options}
                </MUIComponents.SelectField>
                <input type="hidden" name={this.props.name} value={this.state.value} />
            </div>
        )
    }
});