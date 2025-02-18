import { Command } from "@nestjs/cqrs";

export class UpdateCourseCommand extends Command<{
    actionId: string
}> {
    constructor(
        public readonly id: number,
        public readonly name?: string,
    ) { super(); }
}
