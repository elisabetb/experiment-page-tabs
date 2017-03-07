module.exports = Object.assign(require('../../webpack.config.package-test-build.js'),
    {
        entry: {
            experimentPageTabs: './index.js',
            dependencies: ['react', 'react-dom']
        }
    });
