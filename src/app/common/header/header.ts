import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

}
