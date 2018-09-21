
module.exports = function (plop) {
    plop.setActionType('info', function (answers, config, plop) {
        return plop.renderString(config.msg, answers);
    });

    // controller generator
    plop.setGenerator('shield study', {
        description: 'shield study',
        prompts: [{
            type: 'input',
            name: 'id',
            message: 'webExtension id'
        },
        {
            type: 'list',
            name: 'xtype',
            message: 'Shield (or Pioneer)',
            choices: [
                'shield',
                'pioneer'
            ]
        },
        {
            type: 'confirm',
            name: 'tellSI',
            message: 'inform Strategy and Insights about your project'
        },
        {
            type: 'checkbox',
            name: 'libraries',
            message:  'choose all starting libraries',
            choices: [
                {
                    name: 'shield-study-addon-utils',
                    checked: true
                },
            ]
        }
        ],
        actions: [
        {
            type: 'addMany',
            destination: '{{id}}/',
            templateFiles: 'templates/shield-study'
        },
        {
            type: 'info',
            msg: 'Addon created =>  {{id}}/'
        }
        ]
    });
};
