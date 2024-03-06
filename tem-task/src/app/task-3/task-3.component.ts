import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-task-3',
  templateUrl: './task-3.component.html',
  styleUrls: ['./task-3.component.css']
})
export class Task3Component {
  selectedFile: File | null = null;
  uploadProgress$?: Observable<number | undefined>;
  downloadURL$?: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {}

  onSelectFile(event: any): void {
    this.selectedFile = event.target.files[0] as File;
}
onUpload(): void {
  if (this.selectedFile) {
    const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.selectedFile);

    this.uploadProgress$ = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL$ = fileRef.getDownloadURL();
        })
      )
      .subscribe();
  }
}
}
