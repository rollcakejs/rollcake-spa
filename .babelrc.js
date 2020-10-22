module.exports = {
    presets: [
        require('@babel/preset-env'),
        require('@babel/plugin-proposal-class-properties'),
    ],
    plugins: [
        require('@babel/plugin-syntax-dynamic-import')
    ],
    ignore: [
        'dist/*.js',
    ]
}