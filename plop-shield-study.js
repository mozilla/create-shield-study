
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
        }],
        actions: [{
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
