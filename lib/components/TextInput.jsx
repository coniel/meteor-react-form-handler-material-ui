var typingTimer;

TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    getInitialState() {
        return {
            value: this.props.defaultValue,
            previousValue: this.props.defaultValue
        }
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    _onDoneTyping(value) {
        this.props.onDoneTyping(value);
    },
    _onKeyUp(event) {
        if (this.props.onDoneTyping) {
            var value = event.nativeEvent.target.value;
            if (value !== this.state.previousValue) {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(this._onDoneTyping.bind(this, value), this.props.doneTypingInterval || 1000);
            }
        }
    },
    _onKeyDown() {
        clearTimeout(typingTimer);
    },
    _onChange(event) {

        let value = event.nativeEvent.target.value;

        if (this.props._valueType === "number") {
            value = Number(value);
        }

        this.setState({
            value: value,
            previousValue: this.state.value
        });

        FormHandler.inputChanged(this.props.formId, this.props.name, value);
    },
    render: function() {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <MUIComponents.TextField
                    fullWidth={true}
                    onChange={this._onChange}
                    {...this.props}
                    placeholder={null}
                    hintText={this.props.placeholder}
                    floatingLabelText={this.props.label}
                    errorText={this.props.errorText}
                    onKeyDown={this._onKeyDown}
                    onKeyUp={this._onKeyUp}
                />
            </div>
        )
    }
});