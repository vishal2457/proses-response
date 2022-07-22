interface registerLoggerParams {
    err?: Function;
    info?: Function;
    warn?: Function;
  }
  
  class ResponseHandler {
    errLogger!: Function|undefined;
    infoLogger!: Function|undefined;
    warnLogger!: Function|undefined;
  
    registerLoggers({ err, info, warn }: registerLoggerParams): void {
      this.errLogger = err;
      this.infoLogger = info;
      this.warnLogger = warn;
    }
  
  }
  
  
export  const responseHandler = new ResponseHandler();
