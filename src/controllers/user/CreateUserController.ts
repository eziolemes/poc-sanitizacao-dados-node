import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { escape } from "html-escaper";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<void> {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        response.status(400).json({ errors: errors.array() });
        return;
      }

      const { nome, sobreNome, idade, email, cidade, estado } = request.body;

      const firstName = escape(nome);

      const createUserService = new CreateUserService();

      const result = await createUserService.execute({
        firstName,
        sobreNome,
        idade,
        email,
        cidade,
        estado,
      });

      response.status(200).json({ message: result });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export { CreateUserController };
