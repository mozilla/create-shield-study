
const pathJoin = require('path').join;

module.exports = function (plop) {
    const templateDir = pathJoin(__dirname, 'templates/shield-study');

    plop.setActionType('info', function (answers, config, plop) {
        return plop.renderString(config.msg, answers);
    });

    // controller generator
    plop.setGenerator('shield study', {
        description: 'shield study',
        prompts: [
            {
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
                destination: pathJoin(process.cwd(), "{{id}}"),
                templateFiles: templateDir,
                base: templateDir,
                globOptions: {dot: true},
            },
            {
                type: 'info',
                msg: "Addon created => {{id}}/",
            }
        ]
    });
};
