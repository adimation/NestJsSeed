import { EntityRepository, Repository } from 'typeorm';
import User from 'src/entity/user.entity';
import { UserDTO } from 'src/dto/user/user.dto';
import BaseRepository from 'src/infastructure/base/base.respository';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
    async signUp(userDto: UserDTO): Promise<any> {
        const { UserName, Password } = userDto;
        const user = new User();
        user.UserName = UserName;
        user.Password = Password;
        await user.save();
        return await this.find();
    }
}
