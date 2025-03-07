import { Controller, Get, Param, Post, Put, Patch, Body, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll(): Task {
    return this.taskService.getAll();
  }

  @Get(":id")
  getOne(@Param() id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  create(@Body() task: Task): Task {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: Task): Task {
    return this.taskService.updateTask(id, task);
  }

  @Patch(':id')
  updateTaskStatus(@Param('id') id: string): Task {
    return this.taskService.updateTaskStatus(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): { success: boolean } {
    const isDeleted = this.taskService.deleteTask(id);
    return { success: isDeleted };
  }
}
