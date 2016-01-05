FormActions = React.createClass({
    render: function() {
        let submitLabel = this.props.label || "actions.submit";
        let cancelLabel = this.props.label || "actions.cancel";
        submitLabel = TAPi18n.__(submitLabel);
        cancelLabel = TAPi18n.__(cancelLabel);
        let submitButton = (typeof this.props.submitAction !== 'undefined')? <MUIComponents.RaisedButton onClick={this.props.submitAction} label={submitLabel} primary={true} /> : <MUIComponents.RaisedButton label={submitLabel} type="submit" primary={true} />
        return (
            <span style={{float: 'right', paddingTop: 15, paddingBottom: 15}}>
                <MUIComponents.FlatButton label={cancelLabel} style={{marginRight: 15}} onClick={this.props.cancelAction} />
                {submitButton}
            </span>
        )
    }
});