// Camada de Infraestrutura - do Mundo externo que o usuario se comunica
export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}