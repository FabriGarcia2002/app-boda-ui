import { Component, ChangeDetectorRef } from '@angular/core';
import { WeddingNav } from "../wedding-nav/wedding-nav";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface FilePreview {
  file: File;
  preview: string;
  progress: number; // 0 = pending, 1 = uploading, 2 = done, -1 = error
}

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [WeddingNav, FormsModule, CommonModule],
  templateUrl: './upload.html',
  styleUrl: './upload.css',
})
export class Upload {

  nombre: string = '';
  filePreviews: FilePreview[] = [];
  uploadSuccess = false;
  isUploading = false;
  isDragging = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  get selectedFiles() {
    return this.filePreviews.map(fp => fp.file);
  }

  get uploadedCount() {
    return this.filePreviews.filter(f => f.progress === 2).length;
  }

  get hasError() {
    return this.filePreviews.some(f => f.progress === -1);
  }

  get canUpload(): boolean {
    return this.filePreviews.length > 0 && this.nombre.trim().length > 0 && !this.isUploading;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const files = Array.from(event.dataTransfer?.files || []);
    this.addFiles(files);
  }

  onFilesSelected(event: any) {
    const files: File[] = Array.from(event.target.files);
    this.addFiles(files);
  }

  addFiles(files: File[]) {
    for (const file of files) {
      const reader = new FileReader();
      const preview: FilePreview = { file, preview: '', progress: 0 };
      this.filePreviews.push(preview);

      if (file.type.startsWith('image/')) {
        reader.onload = (e) => {
          preview.preview = e.target?.result as string;
          this.cdr.detectChanges();
        };
        reader.readAsDataURL(file);
      } else {
        preview.preview = 'video';
      }
    }
  }

  removeFile(index: number) {
    this.filePreviews.splice(index, 1);
  }

  async uploadFiles() {
    if (!this.canUpload) return;
    this.isUploading = true;
    this.uploadSuccess = false;

    try {
      for (const fp of this.filePreviews) {
        if (fp.progress === 2) continue;
        fp.progress = 1;
        this.cdr.detectChanges();

        const uploadData: any = await this.http
          .get(`http://localhost:3000/photos/upload-url?filename=${fp.file.name}&nombre=${this.nombre}`)
          .toPromise();

        await fetch(uploadData.url, {
          method: 'PUT',
          body: fp.file,
          headers: { 'Content-Type': fp.file.type },
        });

        fp.progress = 2;
        this.cdr.detectChanges();
      }

      this.uploadSuccess = true;
      this.nombre = '';
      setTimeout(() => {
        this.filePreviews = [];
        this.uploadSuccess = false;
        this.cdr.detectChanges();
      }, 4000);

    } catch (error) {
      console.error('Error subiendo archivos:', error);
      this.filePreviews.forEach(fp => { if (fp.progress === 1) fp.progress = -1; });
    } finally {
      this.isUploading = false;
      this.cdr.detectChanges();
    }
  }
}