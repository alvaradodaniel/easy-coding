import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CoursesModule, DatabaseModule, CqrsModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule { }
