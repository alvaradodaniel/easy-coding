import { Repository } from "typeorm";
import { Course } from "../entities/course.entity";

export class CourseRepository extends Repository<Course> { 
    findUsers() {
        return this.find();
    }
} 