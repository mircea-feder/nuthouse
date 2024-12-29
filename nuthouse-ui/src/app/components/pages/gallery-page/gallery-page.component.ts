import {Component, OnInit} from '@angular/core';
import {GalleriaModule} from "primeng/galleria";

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [
    GalleriaModule
  ],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent implements OnInit {
  imgFileNames: string[] = [
    "IMG_2133.jpg",
    "img1.jpg",
    "IMG_2139.jpg",
    "IMG_2141.jpg",
    "IMG_2142.jpg",
    "IMG_2145.jpg",
    "IMG_2153.jpg",
    "poza_panoramica_2.jpg",
    "reclama.jpg",
    "sala_mese.jpg",
    "WhatsApp Image 2023-06-28 at 19.08.093.jpg",
    "WhatsApp Image 2023-06-28 at 19.08.104.jpg",
    "WhatsApp Image 2023-06-28 at 19.08.140.jpg",
    "terasa1.jpg",
    "ceaun.jpg",
    "gazebo2.jpg",
    "bedroom-2.jpg",
    "bedroom-2b.jpg",
    "img3.jpg",
    "img4.jpg",
  ];

  images: any[];
  responsiveOptions: any[];

  ngOnInit() {
    this.images = this.imgFileNames.map(x => ({
      itemImageSrc: `/house/${x}`,
      thumbnailImageSrc: `/house-thumbnails/${x}`
    }));

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
