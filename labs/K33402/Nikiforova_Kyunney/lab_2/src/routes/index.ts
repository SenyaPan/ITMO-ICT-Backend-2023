import express from "express"
import eventRoutes from "./events/Event"
import userRoutes from "./users/User"
import usereventRoutes from "./users/UserEvent"

const routes: express.Router = express.Router()

routes.use('/events', eventRoutes)
routes.use('/users', userRoutes)
routes.use('/users/profile', usereventRoutes)

export default routes
