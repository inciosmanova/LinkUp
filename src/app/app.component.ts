import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LinkUp';
  constructor(private router: Router) { }
  ngOnInit() {
    let login = localStorage.getItem('Linkuptoken')
    if (!login) {
      this.router.navigate(['/choose-color'])
    }

  }
}
