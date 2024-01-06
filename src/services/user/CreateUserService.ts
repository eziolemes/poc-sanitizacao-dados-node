interface UserRequest {
  firstName: string;
  sobreNome: string;
  idade: number;
  email: string;
  cidade: string;
  estado: string;
}

class CreateUserService {
  async execute({
    firstName,
    sobreNome,
    idade,
    email,
    cidade,
    estado,
  }: UserRequest): Promise<string> {
    const usuario = { firstName, sobreNome, idade, email, cidade, estado };
    console.table(usuario);

    return "Topzera";
  }
}

export { CreateUserService };
