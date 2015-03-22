Package.describe({
    name    : 'madvas:angular-material',
    version : '0.0.1'
});

Package.onUse(function(api) {
    Npm.depends({
        'angular-material' : '0.8.3'
    });

    api.addFiles('.npm/package/node_modules/angular-material/angular-material.css', 'client');
    api.addFiles('.npm/package/node_modules/angular-animate/angular-animate.js', 'client');
    api.addFiles('.npm/package/node_modules/angular-aria/angular-aria.js', 'client');
    api.addFiles('.npm/package/node_modules/angular-material/angular-material.js', 'client');
});