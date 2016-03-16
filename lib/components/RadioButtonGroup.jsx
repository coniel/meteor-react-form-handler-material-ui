RadioButtonGroup = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.string
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
    _onChange: function (event, selected) {
        if (this.props.formId) {
            FormHandler.inputChanged(this.props.formId, this.props.name, selected);
        }

        this.setState({
            value: selected
        });
    },
    render: function () {
        return (
            <div>
                <MUIComponents.RadioButtonGroup name={this.props.name} defaultSelected={this.props.defaultValue} onChange={this._onChange}>
                    {this.props.children}
                </MUIComponents.RadioButtonGroup>
                <input type="hidden" name={this.props.name} value={this.state.value} />
            </div>
        )
    }
});