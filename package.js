Package.describe({
  name: "conielo:react-form-handler-material-ui",
  summary: "Material UI inputs for conielo:react-form-handler" ,
  version: "0.1.0"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");

    // Dependencies
    var dependencies = [
        'react@0.1.10',
        'izzilab:material-ui@0.1.7',
        'conielo:react-form-handler'
    ];
    api.use(dependencies);
    api.imply(dependencies);

    // Shared files
    api.addFiles([
      'lib/components/TextInput.jsx',
      'lib/components/DatePicker.jsx',
      'lib/components/SelectInput.jsx',
      'lib/components/CheckboxInput.jsx',
      // Submit buttons
      'lib/components/SubmitButton.jsx',
      'lib/components/FormActions.jsx',
      'lib/components/SubmitFAB.jsx'
    ]);

    // Exports
    api.export([
      'TextInput',
      'DatePicker',
      'SelectInput',
      'CheckboxInput',
      'SubmitButton',
      'FormActions',
      'SubmitFAB'
]);
});


Package.onTest(function (api) {
    // api.use("tinytest");
    api.use("conielo:react-form-handler-material-ui");
});
