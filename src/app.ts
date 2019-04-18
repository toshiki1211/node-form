import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import session from 'express-session';

const router = require('./routes/router');

/**
 * @class App
 **/
export class App {
    public app: express.Application;

    /**
     * @consturot
     */
    constructor () {
        this.app = express();
        this.config();
    }

    /**
     * @method bootstrap
     * @return { instance }
     */
    public static bootstrap(): express {
        return new App();
    }

    /**
     * @method config
     */
    public config(): void {
        // テンプレートの設定
        this.app.set('views', __dirname + '/views');
        this.app.set("view engine", "ejs");

        // セッションの設定
        this.app.use(session({
            secret: config.server.cookie.secret,
            name: config.server.cookie.name
        }));

        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());

        // ルーティングモジュールをアプリケーションのパスにマウントさせる
        this.app.use('/', router);
        this.app.use('/login', router);
        this.app.use('/register-confirm', router);
        this.app.use('/register', router);
    }
}
