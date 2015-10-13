var {
    FloatingActionButton,
    FontIcon,
    CircularProgress
    } = MUI;

var actionButtonStyle = {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(50%, -50%)"
};

var loaderStyle = {
    position: "absolute",
    right: 0,
    top: "50%",
    backgroundColor: "rgb(229, 229, 229)",
    paddingBottom: 9,
    paddingRight: 9,
    borderRadius: 30,
    transform: "translate(50%, -50%)"
};

SubmitFAB = React.createClass({
    render: function () {
        if (this.props.loading) {
            return (
                <CircularProgress mode="indeterminate" style={loaderStyle} size={0.6} />
            )
        } else {
            return (
                <span>
                    <FloatingActionButton disabled={this.props.disabled} type="submit" style={actionButtonStyle}>
                        <FontIcon className="mdi mdi-arrow-right" />
                    </FloatingActionButton>
                </span>
            )
        }
    }
});