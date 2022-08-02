# eslint-config-dropull
This package provides our default eslint configuration.

# Usage
Four configurations are exported by this package that you can extend in your eslint config:

- **dropull** (default)
- **dropull/typescript**
- **dropull/react**
- **dropull/react-typescript**

For `typescript` you need to install

```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

and for `react`

```bash
npm install -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

And then install our eslint config

```bash
npm install -D eslint-config-dropull
```

Now you can extend our eslint configuration and tweak it whatever you want. Look at the eslint config below in a `package.json`:

```json
{
    "eslintConfig": {
        "root": true,
        "extends": "dropull/react-typescript",
        "parserOptions": {
            "project": "./tsconfig.json"
        }
    }
}
```