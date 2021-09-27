import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userProfile = this.usersRepository.findById(user_id);

    if (!userProfile) {
      if (!userProfile.admin) {
        return this.usersRepository.turnAdmin(userProfile);
      }
    }
    throw new Error("User Not Found!");
  }
}

export { TurnUserAdminUseCase };
