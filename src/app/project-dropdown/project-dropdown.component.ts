import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-dropdown',
  templateUrl: './project-dropdown.component.html',
  styleUrls: ['./project-dropdown.component.css']
})
export class ProjectDropdownComponent {
  @ViewChild('category') category!: ElementRef;
  public selectedProjectCategory = 'All';

  constructor() {
  }

  onSelect() {
    this.selectedProjectCategory = this.category.nativeElement.value;
    console.log(this.selectedProjectCategory);
  }

}
