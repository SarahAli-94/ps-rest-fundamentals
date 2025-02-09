import express from "express";
import { getCustomerDetail, getCustomers, searchCustomers } from "./customers.service";
import { getOrdersForCustomer } from "../orders/orders.service";

export const customersRouter = express.Router();

// GET all customers
customersRouter.get(("/"), async (req, res) => {
    const customers = await getCustomers();
    res.json(customers);
})

// GET specific customer
customersRouter.get("/:id", async (req, res) => {
    const customer = await getCustomerDetail(req.params.id);
    if (customer != null) {
        res.json(customer);
    } else {
        res.status(404).json({ message: "customer not found" });
    }
})

// Search for a specific customer
customersRouter.get("/search/:query", async (req, res) => {
    const customers = await searchCustomers(req.params.query);
    if (customers != null) {
        res.json(customers);
    } else {
        res.status(404).json({ message: "no customers found" });
    }
})

// GET orders history //revisit to use then
customersRouter.get("/:id/orders", async (req, res) => {
    const customer = await getCustomerDetail(req.params.id);
    if (customer != null) {
        const orders = await getOrdersForCustomer(req.params.id);
        if (orders.length > 0)
            res.json(orders);
        else
            res.status(200).json("customer hasn't made orders yet")
    } else {
        res.status(404).json({ message: "no customer found" })
    }
})