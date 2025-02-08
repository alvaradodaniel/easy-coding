import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { courseProviders } from './constants/course.providers';
import { databaseProviders } from 'common/db.providers';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, ...courseProviders, ...databaseProviders],
  exports: [...courseProviders],
})
export class CoursesModule { }
