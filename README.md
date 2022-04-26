# @dropull/eslint-config
This package provides our default eslint configuration.

# Usage
Four configurations are exported by this package that you can extend in your eslint config:

- **@dropull** (default)
- **@dropull/eslint-config/typescript**
- **@dropull/eslint-config/react**
- **@dropull/eslint-config/react-typescript**

For `typescript` you need to install

```bash
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

and for `react`

```bash
npm install eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

> For react and typescript, run both commands.

As this is a private repository, you need to tell npm cli where to look up and give it permission to read/write to the repository

```bash
npm login --scope=@dropull --registry=https://npm.pkg.github.com
```

> See more [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token=) about how to authenticate to Github npm registry using a personal access token.

And then install our eslint config

```bash
npm install @dropull/eslint-config
```

Now you can extend our eslint configuration and tweak it whatever you want. Look at the eslint config below in a `package.json`:

```json
{
    "eslintConfig": {
        "root": true,
        "extends": "@dropull/eslint-config/react-typescript",
        "parserOptions": {
            "project": "./tsconfig.json"
        }
    }
}
```