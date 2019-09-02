# js-dev-env
ddotdev's JavaScript Development Environment

##Outline
- Editors and configuration

- Package management
**npm**, Bower, JSPM, (Jam, volo)

- Development webserver
**Express**, Webpack dev server, Browsersync, budo, live-server, http-server
=> buildScripts
>*Sharing Work-in-progress*
**now**, Surge, ngrok, localtunnel

- Automation (development, environment, build process)
**npm Scripts**, Gulp, Grunt

- Transpiling
**Babel**, TypeScript, Elm
==> ES6

- Bundling
**Webpack**, Browserify, Rollup, JSPM
==> Sourcemaps: Debug transpiled and bundled code
>*Module Format*
**ES6 Modules**, CommonJS, Universal Module Definition, (IIFE, Asynchronous Module Definition)

- Linting
**ESLint**, JSHint, JSLint

- Testing and CI (unit testing:single function or module)
>*Testing Frameworks*
**Mocha**, Janmine, Tape, QUnit, AVA, Jest
>*Assertion Libraries*
**Chai**, Should.js, npm expect
>*Helper Libraries*
JSDOM, Cheerio
>*Where to Run Tests*
Browser: Karma, Testem
Headless Browser: PhantomJS
**In-memory DOM: JSDOM**
>*CI Server*
**Travis(linux), Appveyor(windows)**, Jenkins, CircleCI, Semaphore, SnapCI

- HTTP
>*HTTP Call Approaches*
Node: http, **request**
Browser: XMLHttpRequest, jQuery, **Fetch**
Node & Browser: isomorphic-fetch, xhr, SuperAgent, Axios
>*Mock HTTP*
Nock, Static JSON
Create dev webserver: api-mock, JSON server, JSON Schema faker, Browsersync, Express

>*Mocking HTTP*
**1-Declare schema**
JSON Schema Faker
**2-Generate Random Data**
faker.js, chance.js, regexp.js
**3-Serve Data via API**
JSON Server

- Project structure
- Production build
- Automated deployment
