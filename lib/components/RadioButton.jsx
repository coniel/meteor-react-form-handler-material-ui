import React from 'react';
import {RadioButton as MUIRadioButton} from 'material-ui/RadioButton';

const RadioButton = React.createClass({
    render: function () {
        return (
            <MUIRadioButton {...this.props} />
        )
    }
});

export default RadioButton;