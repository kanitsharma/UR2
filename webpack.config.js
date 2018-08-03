const Lectro = require('@lectro/core')
const Buildutils = require('@lectro/enhancer-buildutils')

process.env.NODE_ENV = 'production'
// What? No webpackconfig, don't worry this will spit out webpack config
exports.ur2 = new Lectro('node')
  .use(Buildutils)
  .devtool('none')
  .addProgressBar({ name: 'UR2', color: 'yellow' })
