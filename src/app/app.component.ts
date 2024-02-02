import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanBoardComponent } from "./components/kanban-board/kanban-board.component";
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { ModalService } from './services/modal.service';
import { CommonModule } from '@angular/common';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, CommonModule, KanbanBoardComponent, DeleteModalComponent, 
      CreateModalComponent, TaskModalComponent, AppHeaderComponent, EditModalComponent
    ]
})
export class AppComponent {
  title = 'health-tracker';

  constructor(
    public modalService: ModalService
  ) {}

}
