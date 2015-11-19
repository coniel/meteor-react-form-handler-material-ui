Package.describe({
  name: "coniel:react-form-handler-material-ui",
  summary: "Material UI inputs for conielo:react-form-handler" ,
  git: 'https://github.com/coniel/meteor-react-form-handler-material-ui.git',
  version: "0.2.0"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");

    // Dependencies
    var dependencies = [
        'react@0.14.1_1',
        'izzilab:material-ui@0.2.1',
        'coniel:react-form-handler@0.2.1'
    ];
    api.use(dependencies);
    api.imply(dependencies);

    // Shared files
    api.addFiles([
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
