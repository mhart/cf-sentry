# cf-sentry

A template to create a [Cloudflare worker](https://www.cloudflare.com/products/cloudflare-workers/)
that logs errors to [Sentry](https://sentry.io).

## Generating

Use [wrangler](https://github.com/cloudflare/wrangler2#readme)

```
wrangler generate projectname https://github.com/bustle/cf-sentry
```

Then edit the config variables in [`sentry.js`](https://github.com/bustle/cf-sentry/blob/master/sentry.js)
to suit your environment:

```js
// Get the key from the "DSN" at: https://sentry.io/settings/<org>/projects/<project>/keys/
// The "DSN" will be in the form: https://<SENTRY_KEY>@sentry.io/<SENTRY_PROJECT_ID>
// eg, https://0000aaaa1111bbbb2222cccc3333dddd@sentry.io/123456
const SENTRY_PROJECT_ID = '123456'
const SENTRY_KEY = '0000aaaa1111bbbb2222cccc3333dddd'

// Useful if you have multiple apps within a project – not necessary, only used in TAGS and SERVER_NAME below
const APP = 'my-app'

// https://docs.sentry.io/error-reporting/configuration/?platform=javascript#environment
const ENV = 'development'

// https://docs.sentry.io/error-reporting/configuration/?platform=javascript#release
// A string describing the version of the release – we just use: git rev-parse --verify HEAD
// You can use this to associate files/source-maps: https://docs.sentry.io/cli/releases/#upload-files
const RELEASE = '0000aaaa1111bbbb2222cccc3333dddd'

// https://docs.sentry.io/enriching-error-data/context/?platform=javascript#tagging-events
const TAGS = { app: APP }

// https://docs.sentry.io/error-reporting/configuration/?platform=javascript#server-name
const SERVER_NAME = `${APP}-${ENV}`
```

Then you can develop and publish it with `wrangler`:
```
cd projectname
wrangler publish
```

## License

Licensed under either of

- Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.
