var RaisedButton = MUI.RaisedButton;

SubmitButton = React.createClass({
    render: function() {
        let label = this.props.label || "actions.submit";
        label = TAPi18n.__(label);

        return (
            <span style={{float: 'right', paddingTop: 15, paddingBottom: 15}}>
                <RaisedButton label={label} type="submit" primary={true} />
            </span>
        )
    }
});