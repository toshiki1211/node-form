import config from 'config';
import { debugLogger } from '../common/util/logger';
import { App } from '../app';

(function() {
    try {
        const server = App.bootstrap().app;
        server.listen(config.server.port);
    } catch (error) {
        debugLogger.debug(`${error}：サーバー接続エラー`);
    }
})();
