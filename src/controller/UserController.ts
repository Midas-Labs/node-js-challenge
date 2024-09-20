import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async save(name, email_Id, auth0Id) {
        // const { firstName, lastName, age } = request.body;
        let user = await this.userRepository.findOne({ where: { auth0Id } });
        if (!user) {
            user = Object.assign(new User(), {
                name,
                email_Id,
                auth0Id
            })
            console.log('user')
            console.log(user)
            this.userRepository.save(user)
        }
        return user
    }

}