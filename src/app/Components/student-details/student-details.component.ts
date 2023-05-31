import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [],
})
export class StudentDetailsComponent {
  ID: any;
  student: any;
  constructor(myActivated: ActivatedRoute, private myService: StudentsService) {
    this.ID = myActivated.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetStudentByID(this.ID).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
