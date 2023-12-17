// album.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-album', // Adjusted selector
  styleUrls: ['./album.component.scss'], // Corrected style file reference
  templateUrl: './album.component.html', // Corrected template file reference
})
export class AlbumComponent {
  images = [
    'https://picsum.photos/200/300',
    'https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23600.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais',
    'https://i.pinimg.com/736x/30/8f/ed/308fed412dcc86bfa7c810cc6a64e19b.jpg',
    'https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23600.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais',
    'https://i.pinimg.com/736x/30/8f/ed/308fed412dcc86bfa7c810cc6a64e19b.jpg',
    'https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23600.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais',
    'https://i.pinimg.com/736x/30/8f/ed/308fed412dcc86bfa7c810cc6a64e19b.jpg',
    'https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23600.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais',
  ];

  bookOpen(index: number, direction: 'left' | 'right'): void {
    let pages: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("page") as HTMLCollectionOf<HTMLElement>;
  
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.transition = 'transform 0.8s ease-out'; // Apply transition only during the animation
      pages[i].style.transform = '';
    }
  
    if (direction === 'left') {
      if (index > 1) {
        pages[index - 2].style.transform = 'rotateY(-180deg)';
      }
    } else if (direction === 'right') {
      if (index < pages.length) {
        pages[index].style.transform = 'rotateY(-180deg)';
      }
    }
  }
  
  
}
