import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TaskService {
    private tasks: Task[] = []

    getAll(): any {
        return this.tasks;
    }

    getTaskById(id: string): any {
        return this.tasks.find(task => task.id === id);
    }
    

    createTask(task: Task): Task {
        const newTask = { ...task, id: Date.now().toString() };
        this.tasks.push(newTask);
        return newTask;
    }
    
    updateTask(id: string, updatedTask: Task): any {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
          this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
          return this.tasks[taskIndex];
        }
        return null;
    }
    
    updateTaskStatus(id: string): any {
        const taskId = this.tasks.findIndex(task => task.id === id);
        if (taskId !== -1) {
          this.tasks[taskId].isDone = !this.tasks[taskId].isDone ;
          return this.tasks[taskId];
        }
        return null;
    }    
    
    deleteTask(id: string): boolean {
        const taskId = this.tasks.findIndex(task => task.id === id);
        if (taskId !== -1) {
          this.tasks.splice(taskId, 1);
          return true;
        }
        return false;
    }
}
