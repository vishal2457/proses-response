import {responseHandler} from "./response-handler";

//200 OK
export const success = (res: any, data: any, msg: string) => {
  res.status(200).send({ data, msg });
};

//500 SERVER ERROR
export const serverError = (res: any, err: any) => {
    if(res.headersSent) return
    if(responseHandler.errLogger) {
        responseHandler.errLogger(err)
    }
  res.status(500).send({ err });
};

//404 Not Found
export const notFound = (res: any, msg: string) => {
  res.status(404).send(msg);
};

//401 Unauthorized
export const unauthorized = (res: any, msg: string) => {
  res.status(401).send(msg);
};

//400 Bad Request
export const other = (res: any, msg: string) => {
  res.status(400).send(msg);
};

//409 conflict (Used for duplicate values mainly)
export const alreadyExist = (res: any, msg: string) => {
  res.status(409).send(msg);
};

//422 fields required
export const requiredFields = (res: any, err: any) => {
  res.status(422).json({ required: err });
};
