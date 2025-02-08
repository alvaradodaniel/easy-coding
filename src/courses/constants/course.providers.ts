
import { DataSource } from 'typeorm';
import { Course } from '../entities/course.entity';

export const courseProviders = [
    {
        provide: 'COURSE_REPOSITORY_WRITE',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
        inject: ['DATA_SOURCE_WRITE'],
    },
    {
        provide: 'COURSE_REPOSITORY_READ',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
        inject: ['DATA_SOURCE_READ'],
    },
];
