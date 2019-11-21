import { PagingInfo } from './../infastructure/paging/paging-info';
import { UserRepository } from "src/repository/user.repository";
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/dto/user/user.dto";
import { PagedList } from "src/infastructure/paging/paged-list";
import User from 'src/entity/user.entity';
import { getCustomRepository, EntityManager } from 'typeorm';

@Injectable()
export class AuthService {
    private userRepo: UserRepository;

    constructor(protected entityManager: EntityManager) {
        this.userRepo = entityManager.getCustomRepository(UserRepository);
    }

    async signUp(userDto: UserDTO): Promise<any> {
        return await this.userRepo.findOne(1);
    }

    async getPaged(pageIndex: number, pageSize: number): Promise<User[]> { //} | Promise<PagedList<User>> {
        return await this.userRepo.find();

        const [result, total] = await this.userRepo.find({});// ({ take: 1, skip: 0 });
        let p = new PagedList<User>();
        //p.Source = result;
        // return p;
        // const page = new PagingInfo();
        // page.PageIndex = pageIndex;
        // page.PageSize = pageSize;
        // return this.userRepo.getPaged(page);
    }
}
