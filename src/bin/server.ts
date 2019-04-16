import config from 'config';
import { debugLogger } from '../common/util/logger';
const app = require('../app');

(function() {
    try {
        app.listen(config.server.port);
    } catch (error) {
        debugLogger.debug(`${error}：サーバー接続エラー`);
    }
})();
