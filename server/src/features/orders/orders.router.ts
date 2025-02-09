import express from "express";
import { getOrders } from "./orders.service";
import { pagingRequestSchema } from "../types";
import { validate } from "../../middleware/validation.middleware";

export const ordersRouter = express.Router();

// get orders - paging sets of 3
ordersRouter.get("/", validate(pagingRequestSchema), async (req, res) => {
    const data = pagingRequestSchema.parse(req);
    const orders = getOrders(data.query.skip, data.query.take);
    res.json(orders);
})
