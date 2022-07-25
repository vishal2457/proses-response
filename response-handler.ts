interface registerLoggerParams {
    err?: Function;
    info?: Function;
    warn?: Function;
  }
  
  class ResponseHandler {
    errLogger!: Function|undefined;
    infoLogger!: Function|undefined;
    warnLogger!: Function|undefined;
    encryption!: Function|undefined;
    dbDialect: 'mysql' | 'mssql' = 'mysql';
  
    registerLoggers({ err, info, warn }: registerLoggerParams): void {
      this.errLogger = err;
      this.infoLogger = info;
      this.warnLogger = warn;
    }

    registerEncryption(encryptionFunc: Function) {
      this.encryption = encryptionFunc;
    }

    registerDialect(dbdialect: 'mysql' | 'mssql') {
      this.dbDialect = dbdialect
    }
  
  }
  
  
export  const responseHandler = new ResponseHandler();
