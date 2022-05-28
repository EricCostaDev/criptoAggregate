import { Router } from "express";


const mountainRoutes = Router();

mountainRoutes.post("/", (request, response) => {
    const { name, height, country, state, city, mountain_type, description, image } = request.body;

    return response.status(201).send()
})


export default mountainRoutes;


