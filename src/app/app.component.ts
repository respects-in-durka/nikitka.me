import {ElementRef, ViewChild, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('burger') burger!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  toggleMenu(): void {
    this.burger.nativeElement.classList.toggle('active');
    this.menu.nativeElement.classList.toggle('active');
  }
}
