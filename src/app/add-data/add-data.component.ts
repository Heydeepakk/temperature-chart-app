import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent {
  dataForm: FormGroup;

  @Output() dataAdded = new EventEmitter<{ datetime: string; temperature: number }>();

  dataList: { datetime: string; temperature: number; }[] = [];

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      datetime: ['', [Validators.required, this.dateValidator]],
      temperature: [
        '',
        [Validators.required, Validators.min(-50), Validators.max(50)],
      ],
    });
  }

  dateValidator(control: any) {
    const inputDate = new Date(control.value);
    if (inputDate >= new Date()) {
      return { invalidDate: true };
    }
    return null;
  }

  onSubmit() {
    if (this.dataForm.valid) {
      const formData = this.dataForm.value;
      this.dataList.push(formData);
      this.dataAdded.emit(formData);
      this.dataForm.reset();
    }
  }
}
