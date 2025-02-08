import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSE_REPOSITORY_WRITE')
    private courseRepositoryWrite: Repository<Course>,
    
    @Inject('COURSE_REPOSITORY_READ')
    private courseRepositoryRead: Repository<Course>,
  ) { }

  create(createCourseDto: CreateCourseDto) {
    const course = new Course();
    return this.courseRepositoryWrite.save(course);
  }

  findAll() {
    return this.courseRepositoryRead.find();
  }

  findOne(id: number) {
    return this.courseRepositoryRead.findOneByOrFail({ id });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    return this.courseRepositoryWrite.delete({ id });
  }
}
