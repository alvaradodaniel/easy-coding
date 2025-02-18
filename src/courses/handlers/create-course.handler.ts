import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCourseCommand } from "../commands/create-course.command";
import { Repository } from "typeorm";
import { Course } from "../entities/course.entity";
import { Inject } from "@nestjs/common";

@CommandHandler(CreateCourseCommand)
export class CreateCourseHandler implements ICommandHandler<CreateCourseCommand> {
    constructor(
        @Inject('COURSE_REPOSITORY_WRITE')
        private repository: Repository<Course>) { }

    async execute(command: CreateCourseCommand) {
        const { name } = command;
        const course = new Course();
        course.name = name;
        await this.repository.save(course);

        return {
            actionId: crypto.randomUUID(),
        }
    }
}
