import express from "express";

export const ordersRouter = express.Router();

// get orders - paging sets of 3
// ordersRouter.get("/", validate(pagingRequestSchema), async (req, res) => {
//     const data = pagingRequestSchema.parse(req);
//     const orders = getOrders(data.query.skip, data.query.take);
//     res.json(orders);
// })
