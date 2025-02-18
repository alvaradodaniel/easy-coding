import { Query } from "@nestjs/cqrs";
import { Course } from "../entities/course.entity";

export class GetCourseQuery extends Query<{
    course: Course
}> {
    constructor(
        public readonly id: number,
    ) { super(); }
}