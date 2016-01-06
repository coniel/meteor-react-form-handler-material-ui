global.React = React;
global.ReactDOM = ReactDOM;

import MUICheckbox from 'material-ui/lib/checkbox';
import MUIRadioButton from 'material-ui/lib/radio-button';
import MUIRadioButtonGroup from 'material-ui/lib/radio-button-group';
import MUIDatePicker from 'material-ui/lib/date-picker/date-picker';
import MUIRaisedButton from 'material-ui/lib/raised-button';
import MUIFlatButton from 'material-ui/lib/flat-button';
import MUISelectField from 'material-ui/lib/select-field';
import MUIMenuItem from 'material-ui/lib/menus/menu-item';
import MUITextField from 'material-ui/lib/text-field';
import MUIAutoComplete from 'material-ui/lib/auto-complete';

MUIComponents = {
    Checkbox: MUICheckbox.default,
    RadioButton: MUIRadioButton.default,
    RadioButtonGroup: MUIRadioButtonGroup.default,
    DatePicker: MUIDatePicker.default,
    RaisedButton: MUIRaisedButton.default,
    FlatButton: MUIFlatButton.default,
    SelectField: MUISelectField.default,
    MenuItem: MUIMenuItem.default,
    TextField: MUITextField.default,
    AutoComplete: MUIAutoComplete.default
};