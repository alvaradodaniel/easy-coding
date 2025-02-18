import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateCourseCommand } from "../commands/update-course.command";
import { Course } from "../entities/course.entity";
import { Repository } from "typeorm";
import { Inject } from "@nestjs/common";

@CommandHandler(UpdateCourseCommand)
export class UpdateCourseHandler implements ICommandHandler<UpdateCourseCommand> {
    constructor(
        @Inject('COURSE_REPOSITORY_WRITE')
        private repository: Repository<Course>) { }

    async execute(command: UpdateCourseCommand) {
        const { id, name } = command;
        if (!name) throw new Error('name is required');
        await this.repository.update({ id }, { name });

        return {
            actionId: crypto.randomUUID(),
        }
    }
}
