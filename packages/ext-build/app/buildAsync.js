const chalk = require('chalk');
const util = require('../util.js')

var prefix = ``
if (require('os').platform() == 'darwin') {
  prefix = `ℹ ｢ext｣:`
}
else {
  prefix = `i [ext]:`
}

var app = `${chalk.green(prefix)} ext-build-async:`;

// export async function emit() {
//   console.log('before')
//   let promise = executeAsync(s)
//   await promise
//   console.log('after')
// }


// export async function executeAsync() {
//   await new Promise((resolve, reject) => {
//     setTimeout(function(){
//       console.log('done!')
//       resolve(0)
//     },5000)
//   })
// }




class buildAsync {
  constructor(options) {
    this.profile = options.parms[2]
    this.environment = options.parms[3]
    this.verbose = options.parms[4]
  }

  async executeAsync() {
    var me = this
    console.log('in executeAsync')
    await Promise(function(resolve, reject) {
      var parms = ['app','build', me.profile, me.environment]
      console.log(parms)
      if (me.verbose == 'yes') {
        console.log(`${app} passing to 'sencha app build ${me.profile} ${me.environment}'`)
      }
      try {
        await util.senchaCmdAsync(parms, me.verbose)
        resolve(0);
      } catch(err) {
        reject({error: err})
      }
    })
  }
}
module.exports = buildAsync