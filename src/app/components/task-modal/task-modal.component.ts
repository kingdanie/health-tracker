import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Task } from '../../interfaces/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {

  TaskItem! : Task;

  constructor(public modalService: ModalService, private taskService : TaskService) {}

  closeModal(){
    this.modalService.closeModal();
  }

  deleteModal() {
    this.modalService.openDeleteTaskModal();
  }

ngOnInit() {
  this.TaskItem = this.taskService.getSelectedTask()
}
}
