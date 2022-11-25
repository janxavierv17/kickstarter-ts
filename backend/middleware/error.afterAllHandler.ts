import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
export const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Error middleware => ", err);
  res.status(500).send({ error: [err] });
};
