# Piston Node Client

A Node.js client wrapper for the [Piston API](https://github.com/engineer-man/piston). 

Piston is a high performance general purpose code execution engine. It excels at running untrusted and possibly malicious code without fear from any harmful effects.

<br>

## Installation

```bash
npm install piston-client
```

### Usage Example

```js
import piston from "piston-client";

(async () => {

    const client = piston({ server: "https://emkc.org" });
    
    const runtimes = await client.runtimes();
    // [{ language: 'python', version: '3.9.4', aliases: ['py'] }, ...]

    const result = await client.execute('python', 'print("Hello World!")');
    // { language: 'python', version: '3.9.4', run: {
    //     stdout: 'Hello World!\n',
    //     stderr: '',
    //     code: 0,
    //     signal: null,
    //     output: 'Hello World!\n'
    // }}

})();
```

<br>

## Documentation

### `piston(options)`

```js
import piston from "piston-client";
const client = piston({});
```

Creates a new client. Accepts an `options` object as its first argument.

##### Options

- `server` - The domain name of the Piston server to be used. Defaults to `https://emkc.org`.

### `client.runtimes()`

```js
import piston from "piston-client";
(async () => {
    const client = piston();
    const runtimes = await client.runtimes();
})();
```

Returns an array of available runtimes. [See Piston documentation for the runtimes endpoint](https://github.com/engineer-man/piston#runtimes-endpoint).

### `client.execute(language, code, [config])`

Execute arbitrary code for a given language. Additional, optional config can be passed in the third parameter.

```js
import piston from "piston-client";
(async () => {
    const client = piston();
    const result = await client.execute('javascript', 'console.log("Hello world!")', { language: '3.9.4 '});
})();
```

##### Options

- `language` - Expects a string of the language.
- `code` - Expects a string of the code to execute.
- `config` - Expects an object with additional config. See [Piston documentation](https://github.com/engineer-man/piston#execute-endpoint) for the available config options.

### `client.execute(config)`

To execute Piston with more fine-tuned control, pass in a `config` object as the first and only parameter.

```js
import piston from "piston-client";
(async () => {
    const client = piston();
    const result = await client.execute({
        "language": "js",
        "version": "15.10.0",
        "files": [{
            "name": "my_cool_code.js",
            "content": "console.log(process.argv)"
        }],
        "stdin": "",
        "args": ["1", "2", "3"],
        "compileTimeout": 10000,
        "runTimeout": 3000,
        "compileMemoryLimit": -1,
        "runMemoryLimit": -1
    });
})();
```

##### Options

See [Piston documentation](https://github.com/engineer-man/piston#execute-endpoint) for the available options. The only difference is that the option are in camelCase as opposed to snake_case.

### Error handling

Any error will return an object with the following signature:

```js
{ success: false, error: Error }
```

No errors are thrown so wrapping in `try / catch` is unnecessary.

<br>

## License

MIT © [DC](https://github.com/dthree)
