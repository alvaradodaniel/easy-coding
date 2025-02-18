import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCourseCommand } from './commands/create-course.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCourseQuery } from './queries/get-course.query';
import { UpdateCourseCommand } from './commands/update-course.command';

@Controller('courses')
export class CoursesController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.commandBus.execute(
      new CreateCourseCommand(createCourseDto.name),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(
      new GetCourseQuery(parseInt(id)),
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.commandBus.execute(
      new UpdateCourseCommand(parseInt(id), updateCourseDto.name),
    );
  }

  /* @Get()
  findAll() {
    return this.coursesService.findAll();
  }

 

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  } */
}
