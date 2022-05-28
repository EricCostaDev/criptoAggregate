import { Request, Response,Router } from "express";
import CreateMountainService from "../../../../modules/mountains/services/CreateMountainService";

const routes = Router();

// routes.use('/')
// routes.use('/mountains')
// routes.use('/users')

export function createMountain(request: Request, response: Response) {
   CreateMountainService.execute()
   return response.send({ message: "create mountain" });
}

// export default routes;