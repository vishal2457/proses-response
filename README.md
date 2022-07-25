# Proses response handlers
Internal lib for handling express response
## Usage

```
import {success} from "proses-response";
//res should be express response object;
success(res, data, msg);
other(res, msg)
```


### Register an error logger to record server error

```
import {responseHandler} from "proses-response";
responseHandler.registerLoggers({
    err: myCustomFunction
})
```
this will emit the error handled by server error.


### Send encrypted response to client
```
const encryptResponse = (data:any) => {
   //encrypt data
   return data
}
import {responseHandler} from "proses-response";
responseHandler.registerEncryption(encryptResponse)
```

### specify dialect for foreign key checks
```
import {responseHandler} from "proses-response";
responseHandler.registerDialect('mssql')
```
For handling foreign key checks.



## Contributing
Any changes or suggestions are welcome. Please discuss the changes before hand.

Please make sure to use types where applicable to avoid wring config.