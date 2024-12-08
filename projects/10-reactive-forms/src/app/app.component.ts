import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <form [formGroup]="blogForm" (ngSubmit)="handleFormSubmit()">
        <section>
          <label for="title">Post Title</label>
          <input type="text" id="title" formControlName="title"/>

          <label for="body">Post Body</label>
          <textarea name="" id="body" cols="30" rows="10" formControlName="body"></textarea>
        </section>
        <button type="submit">Submit Post</button>
      </form>
    </article>
  `,
  styles: [],
})
export class AppComponent {
  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })

  handleFormSubmit() {

    let title= this.blogForm.value.title;
    let body = this.blogForm.value.body;
    this.postBlog(title,body)
  }

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(`Posting blog titles ${title}, with the contents ${body}.`);
  }
}
