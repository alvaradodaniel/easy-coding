import { CreateCourseCommand } from "../commands/create-course.command";
import { UpdateCourseCommand } from "../commands/update-course.command";
import { CreateCourseHandler } from "../handlers/create-course.handler";
import { GetCourseHandler } from "../handlers/get-course.handler";
import { UpdateCourseHandler } from "../handlers/update-course.handler";
import { GetCourseQuery } from "../queries/get-course.query";

const handlers = [
    CreateCourseHandler,
    UpdateCourseHandler,
    GetCourseHandler,
];

const queries = [GetCourseQuery];

const commands = [CreateCourseCommand, UpdateCourseCommand];

export { handlers, queries, commands };