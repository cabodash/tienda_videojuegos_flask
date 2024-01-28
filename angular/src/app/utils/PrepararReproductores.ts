import { ElementRef, QueryList } from "@angular/core";

export class PrepararReproductores{
    //Funcion para preparar la reproduccion de los videos 
  static prepararReproductores(items: QueryList<ElementRef>){
    items.forEach(videojuegoItem => {
      const video = videojuegoItem.nativeElement.querySelector('video');
      const reproductor = videojuegoItem.nativeElement;
  
      if (video) {
        video.addEventListener('canplaythrough', () => {
          video.play();
        });
  
        video.pause();
  
        reproductor.addEventListener('mouseenter', () => {
          if (video && video.readyState >= 2) {
            video.play();
            reproductor.querySelector('.imagen-item').style.opacity = 0;
            reproductor.querySelector('.imagen-item').style.visibility = 'hidden';
            reproductor.querySelector('.video-item').style.opacity = 1;
            reproductor.querySelector('.video-item').style.visibility = 'visible';
          }
        });
  
        reproductor.addEventListener('mouseleave', () => {
          if (video && video.readyState >= 2) {
            video.pause();
            reproductor.querySelector('.imagen-item').style.opacity = 1;
            reproductor.querySelector('.imagen-item').style.visibility = 'visible';
            reproductor.querySelector('.video-item').style.opacity = 0;
            reproductor.querySelector('.video-item').style.visibility = 'hidden';
          }
        });
  
        video.addEventListener('ended', () => {
          video.currentTime = 0;
          video.play();
        });
      }
    });
  }
}