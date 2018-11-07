module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'UpdatedTimeField',
      externals: {
        react: 'React'
      }
    }
  }
}
