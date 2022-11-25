import { Request, Response, NextFunction } from "express";
export const getProjects = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    throw new Error("Something went wrong ...");
    console.log(`[getProjects] - Start`);
    res.status(200).json({ message: "Listing all projects ..." });
    console.log(`[getProjects] - End`);
  } catch (ex) {
    console.log("Exception => ", ex);
    next(ex);
  }
};
