SubmitButton = React.createClass({
    render: function() {
        let label = this.props.label;
		
		if (FormHandler.i18n) {
			label = TAPi18n.__(label);
		}
		
		let containerStyle = {
			paddingTop: 15,
			paddingBottom: 15
		};
		
		let buttonStyle = this.props.style || {};
		
		if (this.props.fullWidth) {
			containerStyle.width = '100%';
			containerStyle.display = 'block';
			
		} else {
			containerStyle.float = 'right';
		}

        return (
            <span style={containerStyle}>
                <RaisedButton  primary={true} {...this.props} label={label} type="submit" style={buttonStyle} />
            </span>
        )
    }
});