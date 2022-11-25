import { Response, Request } from "express";
const express = require("express");
const routes = express.Router();

routes.get("", (req: Request, res: Response) => {
  res.json({ message: "Listing all projects ..." });
});

routes.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Listing your project with id: ${id}` });
});

routes.post("", (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    message: `Creating your project, ${JSON.stringify(body)}`,
  });
});

routes.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Updating your project with id: ${id}` });
});

/**
 * TODO:
 *  - Check if the user is logged in else send an error message to redirect
 *  - Check if the user has the permissione to delete
 *  - check if the project exist
 *  - Ability to delete the project and return a successful status and message
 */
routes.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Deleting your poject with id: ${id}` });
});

export default routes;
