import { Command } from "@nestjs/cqrs";

export class createCourseCommand extends Command<{
    actionId: string // This type represents the command execution result
}> {
    constructor(
        public readonly name: string,
    ) { super(); }
}
