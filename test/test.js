import piston from "../index.js";

(async () => {
  const client = piston();

  // const result = await client.execute({
  //   "language": "js",
  //   "version": "15.10.0",
  //   "files": [{
  //     "name": "my_cool_code.js",
  //     "content": "console.log('Hello World')"
  //   }],
  //   "stdin": "",
  //   "args": ["1", "2", "3"],
  //   "compileTimeout": 10000,
  //   "runTimeout": 3000,
  //   "compileMemoryLimit": -1,
  //   "runMemoryLimit": -1
  // });

  //await client.execute("javascript", `console.log('Hello World');`);

  // await client.execute("python", `print("Hello World");`, {
  //   version: "3.9.4"
  // });

})();
