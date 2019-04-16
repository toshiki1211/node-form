export = index;
declare function index(): any;
declare namespace index {
    class Route {
        constructor(path: any);
        path: any;
        stack: any;
        methods: any;
        acl(...args: any[]): any;
        all(...args: any[]): any;
        bind(...args: any[]): any;
        checkout(...args: any[]): any;
        connect(...args: any[]): any;
        copy(...args: any[]): any;
        dispatch(req: any, res: any, done: any): any;
        get(...args: any[]): any;
        head(...args: any[]): any;
        link(...args: any[]): any;
        lock(...args: any[]): any;
        merge(...args: any[]): any;
        mkactivity(...args: any[]): any;
        mkcalendar(...args: any[]): any;
        mkcol(...args: any[]): any;
        move(...args: any[]): any;
        notify(...args: any[]): any;
        options(...args: any[]): any;
        patch(...args: any[]): any;
        post(...args: any[]): any;
        propfind(...args: any[]): any;
        proppatch(...args: any[]): any;
        purge(...args: any[]): any;
        put(...args: any[]): any;
        rebind(...args: any[]): any;
        report(...args: any[]): any;
        search(...args: any[]): any;
        source(...args: any[]): any;
        subscribe(...args: any[]): any;
        trace(...args: any[]): any;
        unbind(...args: any[]): any;
        unlink(...args: any[]): any;
        unlock(...args: any[]): any;
        unsubscribe(...args: any[]): any;
    }
    function Router(options: any): any;
    namespace Router {
        function acl(path: any, ...args: any[]): any;
        function all(path: any, ...args: any[]): any;
        function bind(path: any, ...args: any[]): any;
        function checkout(path: any, ...args: any[]): any;
        function connect(path: any, ...args: any[]): any;
        function copy(path: any, ...args: any[]): any;
        function get(path: any, ...args: any[]): any;
        function handle(req: any, res: any, out: any): void;
        function head(path: any, ...args: any[]): any;
        function link(path: any, ...args: any[]): any;
        function lock(path: any, ...args: any[]): any;
        function merge(path: any, ...args: any[]): any;
        function mkactivity(path: any, ...args: any[]): any;
        function mkcalendar(path: any, ...args: any[]): any;
        function mkcol(path: any, ...args: any[]): any;
        function move(path: any, ...args: any[]): any;
        function notify(path: any, ...args: any[]): any;
        function options(path: any, ...args: any[]): any;
        function param(name: any, fn: any): any;
        function patch(path: any, ...args: any[]): any;
        function post(path: any, ...args: any[]): any;
        function process_params(layer: any, called: any, req: any, res: any, done: any): any;
        function propfind(path: any, ...args: any[]): any;
        function proppatch(path: any, ...args: any[]): any;
        function purge(path: any, ...args: any[]): any;
        function put(path: any, ...args: any[]): any;
        function rebind(path: any, ...args: any[]): any;
        function report(path: any, ...args: any[]): any;
        function route(path: any): any;
        function search(path: any, ...args: any[]): any;
        function source(path: any, ...args: any[]): any;
        function subscribe(path: any, ...args: any[]): any;
        function trace(path: any, ...args: any[]): any;
        function unbind(path: any, ...args: any[]): any;
        function unlink(path: any, ...args: any[]): any;
        function unlock(path: any, ...args: any[]): any;
        function unsubscribe(path: any, ...args: any[]): any;
        function use(fn: any, ...args: any[]): any;
    }
    namespace application {
        function acl(path: any, ...args: any[]): any;
        function all(path: any, ...args: any[]): any;
        function bind(path: any, ...args: any[]): any;
        function checkout(path: any, ...args: any[]): any;
        function connect(path: any, ...args: any[]): any;
        function copy(path: any, ...args: any[]): any;
        class defaultConfiguration {
            locals: any;
            mountpath: any;
        }
        function del(arg0: any, ...args: any[]): any;
        function disable(setting: any): any;
        function disabled(setting: any): any;
        function enable(setting: any): any;
        function enabled(setting: any): any;
        function engine(ext: any, fn: any): any;
        function get(path: any, ...args: any[]): any;
        function handle(req: any, res: any, callback: any): void;
        function head(path: any, ...args: any[]): any;
        class init {
            cache: any;
            engines: any;
            settings: any;
        }
        function lazyrouter(): void;
        function link(path: any, ...args: any[]): any;
        function listen(...args: any[]): any;
        function lock(path: any, ...args: any[]): any;
        function merge(path: any, ...args: any[]): any;
        function mkactivity(path: any, ...args: any[]): any;
        function mkcalendar(path: any, ...args: any[]): any;
        function mkcol(path: any, ...args: any[]): any;
        function move(path: any, ...args: any[]): any;
        function notify(path: any, ...args: any[]): any;
        function options(path: any, ...args: any[]): any;
        function param(name: any, fn: any): any;
        function patch(path: any, ...args: any[]): any;
        function path(): any;
        function post(path: any, ...args: any[]): any;
        function propfind(path: any, ...args: any[]): any;
        function proppatch(path: any, ...args: any[]): any;
        function purge(path: any, ...args: any[]): any;
        function put(path: any, ...args: any[]): any;
        function rebind(path: any, ...args: any[]): any;
        function render(name: any, options: any, callback: any): any;
        function report(path: any, ...args: any[]): any;
        function route(path: any): any;
        function search(path: any, ...args: any[]): any;
        function set(setting: any, val: any, ...args: any[]): any;
        function source(path: any, ...args: any[]): any;
        function subscribe(path: any, ...args: any[]): any;
        function trace(path: any, ...args: any[]): any;
        function unbind(path: any, ...args: any[]): any;
        function unlink(path: any, ...args: any[]): any;
        function unlock(path: any, ...args: any[]): any;
        function unsubscribe(path: any, ...args: any[]): any;
        function use(fn: any, ...args: any[]): any;
    }
    const bodyParser: any;
    const compress: any;
    const cookieParser: any;
    const cookieSession: any;
    const csrf: any;
    const directory: any;
    const errorHandler: any;
    const favicon: any;
    function json(options: any): any;
    const limit: any;
    const logger: any;
    const methodOverride: any;
    const multipart: any;
    function query(options: any): any;
    const request: {
        accepts: Function;
        acceptsCharset: Function;
        acceptsCharsets: Function;
        acceptsEncoding: Function;
        acceptsEncodings: Function;
        acceptsLanguage: Function;
        acceptsLanguages: Function;
        addListener: Function;
        destroy: Function;
        destroyed: any;
        emit: Function;
        eventNames: Function;
        fresh: any;
        get: Function;
        getMaxListeners: Function;
        header: Function;
        host: any;
        hostname: any;
        ip: any;
        ips: any;
        is: Function;
        isPaused: Function;
        listenerCount: Function;
        listeners: Function;
        off: Function;
        on: Function;
        once: Function;
        param: Function;
        path: any;
        pause: Function;
        pipe: Function;
        prependListener: Function;
        prependOnceListener: Function;
        protocol: any;
        push: Function;
        range: Function;
        rawListeners: Function;
        read: Function;
        readableBuffer: any;
        readableFlowing: any;
        readableHighWaterMark: any;
        readableLength: any;
        removeAllListeners: Function;
        removeListener: Function;
        resume: Function;
        secure: any;
        setEncoding: Function;
        setMaxListeners: Function;
        setTimeout: Function;
        stale: any;
        subdomains: any;
        unpipe: Function;
        unshift: Function;
        wrap: Function;
        xhr: any;
    };
    const response: {
        addListener: Function;
        addTrailers: Function;
        append: Function;
        assignSocket: Function;
        attachment: Function;
        clearCookie: Function;
        contentType: Function;
        cookie: Function;
        destroy: Function;
        detachSocket: Function;
        download: Function;
        emit: Function;
        end: Function;
        eventNames: Function;
        flush: Function;
        flushHeaders: Function;
        format: Function;
        get: Function;
        getHeader: Function;
        getHeaderNames: Function;
        getHeaders: Function;
        getMaxListeners: Function;
        hasHeader: Function;
        header: Function;
        headersSent: any;
        json: Function;
        jsonp: Function;
        links: Function;
        listenerCount: Function;
        listeners: Function;
        location: Function;
        off: Function;
        on: Function;
        once: Function;
        pipe: Function;
        prependListener: Function;
        prependOnceListener: Function;
        rawListeners: Function;
        redirect: Function;
        removeAllListeners: Function;
        removeHeader: Function;
        removeListener: Function;
        render: Function;
        send: Function;
        sendFile: Function;
        sendStatus: Function;
        sendfile: Function;
        set: Function;
        setHeader: Function;
        setMaxListeners: Function;
        setTimeout: Function;
        status: Function;
        statusCode: number;
        statusMessage: any;
        type: Function;
        vary: Function;
        write: Function;
        writeContinue: Function;
        writeHead: Function;
        writeHeader: Function;
        writeProcessing: Function;
    };
    const responseTime: any;
    const session: any;
    const staticCache: any;
    const timeout: any;
    function urlencoded(options: any): any;
    const vhost: any;
}
