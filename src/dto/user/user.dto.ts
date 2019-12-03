import { IdentifyableDTO } from 'src/infastructure/dto/identifyable.dto';

export class UserDTO extends IdentifyableDTO {
    public UserName: string;
    public Password: string;
}
