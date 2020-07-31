# Extract Dat!

Runs an extractor function against a value in order to pull out some other value. If the extractor function fails to pull the data out for any reason, `extract-dat` will suppress any errors and simply return the default value. Because SOMETIMES... you just want a value without all the whining.

## Getting Started
- `npm install --save extract-dat`
- `import extract from "extract-dat";`

### Interface
``` JavaScript
extract(dataValue, extractorFn, [defaultValue=null])
// => value or defaultValue
```

Argument | Type | Description
-------- | ---- | -----------
dataValue | `Any` | Value to be passed into `extractorFn` as the first parameter.
extractorFn | `Function` | Function to extract a value from `dataValue`.
defaultValue | `Any` | Value to be returned if `extractorFn` produces an error or returns `undefined`.

### Example
``` JavaScript
import extract from "extract-dat";

const user = {
  phone: {type: 'home', number: '123-456-7890'},
  greet: 'Hello World',
  roles: ['editor', 'contributor']
};

const name = extract(user, x => x.name, 'Bob');
// => "Bob"

const greeting = extract(user, x => x.greet, 'HI!');
// => "Hello World"

const email = extract(user, x => x.email);
// => null

const isAdmin = extract(user, x => x.roles.includes('admin'), false);
// => false

const isEditor = extract(user, x => x.roles.includes('editor'), false);
// => true

const formattedPhone = extract(user, x => `${x.phone.number} (${x.phone.type})`, 'No Phone Number');
// => "123-456-7890 (home)"
```

## Lib Dat!
`extract-dat` is part of `lib-dat`, a suite of tools that all...
- Have ZERO dependencies.
- Do one task well.
- Make it easier to work with data.
