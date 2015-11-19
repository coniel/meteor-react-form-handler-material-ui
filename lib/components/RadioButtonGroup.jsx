RadioButtonGroup = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.string
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    _onChange: function (event, selected) {
        FormHandler.inputChanged(this.props.formId, this.props.name, selected);
    },
    render: function () {
        return (
            <MUIRadioButtonGroup name={this.props.name} defaultSelected={this.props.defaultValue} onChange={this._onChange}>
                {this.props.children}
            </MUIRadioButtonGroup>
        )
    }
});