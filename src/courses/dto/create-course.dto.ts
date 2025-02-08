import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {
    @ApiProperty({ name: 'name', description: 'The name of the course' })
    name: string;
}
