import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'urlImg'
})
export class UrlImgPipe implements PipeTransform {

  url: string;

  transform(img: string): string {
    this.url = environment.imgUrl;
    img = `${this.url}${img}`;
    /* console.log(img); */
    return img;
  }

}
