### HOW TO TEST

after cloned git repository, create `key.ts` in `src/lib/key.ts`.
and then write down the key of google map api (from google developer console) like

```js
export const key = 'ABCDEFG'
```

and

```bash
$ yarn (if you did not installed node_modules yet)
$ yarn test
```

### EXAMPLE

1. node-server (typescript): see `src/examples/node-google-fetch-testing`

```
it is koa-based node-server.
you can experience my module on node server.
```
