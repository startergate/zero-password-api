# zero-password-api

The server behind [0Password](https://0password.startergate.dev), a Chrome extension that shows a site's password rules on its login screen. 0Password never stores passwords; it only collects each site's password rules.

This app serves:

- the rule lookup API that the extension calls through `zero-password/lite`
- the landing page and the privacy policy

It is one Next.js app deployed on Vercel at `https://0password.startergate.dev`.

## Related repositories

- [zero-password-db](https://github.com/startergate/zero-password-db): the rule database and the `zero-password` npm package. Rules are added there.
- [zero-password-chrome](https://github.com/startergate/zero-password-chrome): the Chrome extension.

## API

### `GET /api/{domain}`

`domain` is the host name of the current tab. It is matched with `findRule` from `zero-password`: exact entry, then `www.`, then parent domains.

- `200`: a rule was found. `domain` is the database entry that matched, which can differ from the request (`login.coupang.com` matches `www.coupang.com`). `$ref` is already resolved.

  ```json
  { "domain": "nid.naver.com", "rule": { "length": { "min": 8, "max": 16 }, "...": "..." } }
  ```

- `404`: no rule for the domain.

  ```json
  { "error": "not_found" }
  ```

Both responses are `application/json`. The `rule` object follows the `Rule` type exported by `zero-password`. Responses stay backward compatible: fields are only ever added, never removed or changed.

## Development

```bash
bun install
bun dev
```

Open http://localhost:3000. Before opening a pull request, run `bun run lint` and `bun run build`.

Rule data comes from the `zero-password` package in `node_modules`, so a new rule appears here after the package is updated.
