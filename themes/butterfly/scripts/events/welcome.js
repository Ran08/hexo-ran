const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`
  ===================================================================
　　
                  正在编译中.......请等待..........           
  　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                   本程序基于当前版本 ${version}     
          项目地址：https://github.com/Ran08/hexo-ran       
  ===================================================================`)
})
