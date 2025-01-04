import {
	Body,
	Controller,
	Post,
	Get,
	Patch,
	Param,
	ParseIntPipe,
	Delete
} from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { CreateTaskDto } from "./dtos/create-task.dto"
import { Task } from "@prisma/client"
import { UpdateTaskDto } from "./dtos/update-task.dto"

@Controller("tasks")
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	// @Get() // тестовый url
	// async hello() {
	//   return "hello"
	// }

	@Get()
	async get(): Promise<Task[]> {
		return await this.tasksService.get()
	}

	@Post()
	async createOne(@Body() dto: CreateTaskDto): Promise<Task> {
		return await this.tasksService.createOne(dto)
	}

	// http://localhost:3000/task/id
	@Patch(":id")
	async updateOne(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateTaskDto) {
		return await this.tasksService.updateOne(id, dto)
	}

	@Delete(":id")
	async deleteOne(@Param("id", ParseIntPipe) id: number) {
		return await this.tasksService.deleteOne(id)
	}
}
