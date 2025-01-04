import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { Task } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksService {

    constructor(private readonly prismaService:PrismaService) {}

    async get() {
		return await this.prismaService.task.findMany()
	}

    async createOne(dto:CreateTaskDto):Promise<Task> {
        const task = await this.prismaService.task.create({
            data:dto
        })

        return task
    }

    async updateOne(id:number, dto:UpdateTaskDto ) {
        await this.getOneOrThrow(id)

        const updatedTask = await this.prismaService.task.update({where:{id}, data:dto})

        return updatedTask
    }

    async deleteOne (id:number) {
        await this.getOneOrThrow(id)

        const deleteTask = await this.prismaService.task.delete({where:{id}})
        return deleteTask
    }


    // Private methode
    private async getOneOrThrow(id:number){
        const task = await this.prismaService.task.findUnique({
            where:{id}
        })
        if (!task) {
            throw new NotFoundException("Could not find any task")
        }
        return task
    }
}
