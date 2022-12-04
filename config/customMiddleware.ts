import { Request, Response, NextFunction } from "express";

const customMiddlewareExample = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("hi from custom middleware");
  next();
};

export default customMiddlewareExample;

/**
 * example use in config/middleware.ts
 */

//  import express, { Application } from "express";
//  import morgan from "morgan";
//  import customMiddlewareExample from "./customMiddleware";

//  const middlewareConfig = (app: Application) => {
//    app.use(morgan("short"));

//    app.use(express.json());
//    app.use(express.urlencoded({ extended: false }));

//    app.use(customMiddlewareExample);
//  };

//  export default middlewareConfig;
