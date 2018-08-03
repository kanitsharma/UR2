const path = require('path')
const { ur2 } = require('../../webpack.config')

ur2.setOutputPath(path.resolve(__dirname, 'dist')).build()
