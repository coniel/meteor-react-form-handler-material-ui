Checkbox = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.bool
    },
    componentWillMount() {
        if (this.props.formId) {
            FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
        }
    },
    _onCheck: function (event, checked) {
        if (this.props.formId) {
            FormHandler.inputChanged(this.props.formId, this.props.name, checked);
        }
    },
    render: function() {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MUIComponents.Checkbox ref="checkbox" {...this.props} defaultChecked={this.props.defaultValue} value={this.props.name} onCheck={this._onCheck} />
            </div>
        )
    }
});