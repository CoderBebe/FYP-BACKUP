"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// BACKEND/src/routes/auth.ts
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.post("/login", authController_1.login);
router.post("/register", authController_1.register);
router.post("/logout", authController_1.logout);
router.get("/profile", authController_1.getProfile);
exports.default = router;
