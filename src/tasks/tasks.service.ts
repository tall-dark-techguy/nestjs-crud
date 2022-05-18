import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async fetchTasks(): Promise<Task[]> {
    const tasks = await this.taskModel.find().sort({ _id: -1 });
    return tasks;
  }

  async createTask(title: string, body: string): Promise<Task> {
    const task = new this.taskModel({
      title,
      body,
    });

    return await task.save();
  }
}
