import log4js from 'log4js';

// ログ出力の設定
log4js.configure({
	appenders : {
        system : {type : 'file', filename : 'system.log'},
        debug : {type : 'file', filename : 'debug.log'}
    },
    categories : {
        default : {appenders : ['system'], level : 'info'},
        debug : {appenders : ['debug'], level : 'debug'}
    }
});

const infoLogger = log4js.getLogger('info');
const debugLogger = log4js.getLogger('debug');

export { infoLogger, debugLogger };
