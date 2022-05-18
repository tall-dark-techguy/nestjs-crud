import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskDTO } from './tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks() {
    const tasks = await this.tasksService.fetchTasks();
    return { status: 'success', data: tasks };
  }

  @Post()
  async createTask(@Body() reqBody: TaskDTO) {
    const { title, body } = reqBody;
    const task = await this.tasksService.createTask(title, body);

    return {
      status: 'success',
      data: task,
      message: 'Task created successfully!',
    };
  }
}
