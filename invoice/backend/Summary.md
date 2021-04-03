# Summary for the backend

## Comment on Js function and class

[Google Javascript style guide](https://google.github.io/styleguide/jsguide.html#jsdoc-method-and-function-comments)

- [@overrides anotation in jsdoc](https://jsdoc.app/tags-override.html)

## HTTP

1.  **Set-Cookie** HTTP response header is used to send a cookie from server to the user agent, so the user agent can send it back to the server later.

> 1. How to send mutiple cookies

```js
res.setHeader('Set-Cookie', [access.value, token.value]);
```

> 2.  Expires/Max-Age: the max lifetime of the cooklie as an http-date timestamp. <br/>

**If unspecified, the cookie becomes a session cookie. A session finishes when the client shuts down, and session cookies will be removed**

> 3.  How to clear a cookie

- set the max-age as negitive value or zero

> 4.  **httpOnly**: Forbids the javascript from accessing the cookie. Can only be modified by server.

> 5. **Secure**, cookie is only be sent to the server when a request is made with **https** schema(except on localhost).

> 6. **SameSite** Controls where a cookie is sent with cross-origin request.

## MongoDB

- return updated record for updating opertion when using mongoose

```js
 .findOneAndUpdate({ _id: id, author: userId }, update, {
    returnOriginal: false, // returns the new version of doc after updating
  })
```

## Nest.js

- **cors** handling for authentication

```js
app.use(cookieParser());
app.enableCors({ credentials: true, origin: true });
```

- configure expiration time for JWT and the cookie

```js
{
  auth:
    access:
      name: access
      secret: access
      expiresIn: 30min
      expiration: 1800
    token:
      name: token
      secret: secret
      expiresIn: 7d
      expiration: 604800
}

```

- Separate JWT signing using JwtService provided by Nest.js

  - Please refer to [crypto.module.ts](src/common/auth/crypto/crypto.module.ts)
  - and [auth.module.ts](src/common/auth/auth.module.ts)

- log information for requesting on terminal
  - add [log middleware](src/common/log.middleware.ts) and bind it to [API path](src/api/api.module.ts)
