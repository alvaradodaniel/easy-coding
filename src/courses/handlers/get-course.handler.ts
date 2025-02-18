import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";
import { Course } from "../entities/course.entity";
import { Inject } from "@nestjs/common";
import { GetCourseQuery } from "../queries/get-course.query";

@QueryHandler(GetCourseQuery)
export class GetCourseHandler implements IQueryHandler<GetCourseQuery> {
    constructor(
        @Inject('COURSE_REPOSITORY_WRITE')
        private repository: Repository<Course>) { }

    async execute(query: GetCourseQuery) {
        const { id } = query;
        if (!id) throw new Error('id is required');
        const course = await this.repository.findOneOrFail({ where: { id } });
        return {
            course
        }
    }
}
