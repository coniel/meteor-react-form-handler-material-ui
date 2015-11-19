Package.describe({
  name: "coniel:react-form-handler-material-ui",
  summary: "Material UI inputs for conielo:react-form-handler" ,
  git: 'https://github.com/coniel/meteor-react-form-handler-material-ui.git',
  version: "0.1.5"
});

var MUI_VERSION = '0.13.3';
var EXTERNALIFY_VERSION = "0.1.0";
Npm.depends({
    'externalify': EXTERNALIFY_VERSION,
    'material-ui': MUI_VERSION
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");

    // Dependencies
    var dependencies = [
        'react@0.14.1_1',
        'coniel:react-form-handler@0.2.1',
        'coniel:react-tap-event-plugin@0.0.3',
        'cosmos:browserify@0.8.1'
    ];
    api.use(dependencies);

    // Shared files
    api.addFiles([
      'mui.browserify.options.json',
      'mui.browserify.js',
      'lib/components/TextInput.jsx',
      'lib/components/TextArea.jsx',
      'lib/components/DatePicker.jsx',
      'lib/components/Select.jsx',
      'lib/components/Checkbox.jsx',
      'lib/components/RadioButtonGroup.jsx',
      'lib/components/RadioButton.jsx',
      // Submit buttons
      'lib/components/SubmitButton.jsx',
      'lib/components/FormActions.jsx'
    ]);

    // Exports
    api.export([
      'TextInput',
      'TextArea',
      'DatePicker',
      'Select',
      'Checkbox',
      'RadioButtonGroup',
      'RadioButton',
      'SubmitButton',
      'FormActions',
      'SubmitFAB'
]);
});


Package.onTest(function (api) {
    // api.use("tinytest");
    api.use("coniel:react-form-handler-material-ui");
});
