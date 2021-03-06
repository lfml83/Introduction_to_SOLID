import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user.admin !== true || !user) {
      throw new Error(
        "It's not possible to list users, just admin user can list!"
      );
    }
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
