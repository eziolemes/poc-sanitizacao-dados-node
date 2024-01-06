import { body } from "express-validator";
import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.post(
  "/user",
  [
    body("nome").trim().isLength({ min: 3 }).escape(),
    body("sobreNome").trim().isLength({ min: 3, max: 40 }),
    body("idade").isInt(),
    body("email").trim().isEmail().normalizeEmail(),
    body("cidade").trim().isLength({ max: 50 }),
    body("estado").trim().isLength({ min: 2, max: 2 }),
  ],
  new CreateUserController().handle
);

export { router };
