import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './gallery-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  galleryItems: GalleryItem[] = [];

  constructor() { }

  ngOnInit() {
    this.createGallery();
  }

  createGallery(): void {

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/hdrCastleS.jpg',
      enlarge: 'assets/images/portfolio/hdrCastleL.jpg',
      filterGroup: 'hdr'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/hdrChicagoS.jpg',
      enlarge: 'assets/images/portfolio/hdrChicagoL.jpg',
      filterGroup: 'hdr'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/hdrDancingS.jpg',
      enlarge: 'assets/images/portfolio/hdrDancingL.jpg',
      filterGroup: 'hdr'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/hdrWallS.jpg',
      enlarge: 'assets/images/portfolio/hdrWallL.jpg',
      filterGroup: 'hdr'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/psJustinS.jpg',
      enlarge: 'assets/images/portfolio/psJustinL.jpg',
      filterGroup: 'ps'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/psArmS.jpg',
      enlarge: 'assets/images/portfolio/psArmL.jpg',
      filterGroup: 'ps'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/psFlameS.jpg',
      enlarge: 'assets/images/portfolio/psFlameL.jpg',
      filterGroup: 'ps'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/psSmokeS.jpg',
      enlarge: 'assets/images/portfolio/psSmokeL.jpg',
      filterGroup: 'ps'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcGdanskS.jpg',
      enlarge: 'assets/images/portfolio/pcGdanskL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcMalaysiaS.jpg',
      enlarge: 'assets/images/portfolio/pcMalaysiaL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcSingaporeS.jpg',
      enlarge: 'assets/images/portfolio/pcSingaporeL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcSiemReapS.jpg',
      enlarge: 'assets/images/portfolio/pcSiemReapL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcTibetS.jpg',
      enlarge: 'assets/images/portfolio/pcTibetL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcUsaS.jpg',
      enlarge: 'assets/images/portfolio/pcUsaL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcWarsawS.jpg',
      enlarge: 'assets/images/portfolio/pcWarsawL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/pcXianS.jpg',
      enlarge: 'assets/images/portfolio/pcXianL.jpg',
      filterGroup: 'pc'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favBeachS.jpg',
      enlarge: 'assets/images/portfolio/favBeachL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favCappadociaS.jpg',
      enlarge: 'assets/images/portfolio/favCappadociaL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favColorS.jpg',
      enlarge: 'assets/images/portfolio/favColorL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favCopenhagenS.jpg',
      enlarge: 'assets/images/portfolio/favCopenhagenL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favElephantS.jpg',
      enlarge: 'assets/images/portfolio/favElephantL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favHeadS.jpg',
      enlarge: 'assets/images/portfolio/favHeadL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favIstanbulS.jpg',
      enlarge: 'assets/images/portfolio/favIstanbulL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favPandaS.jpg',
      enlarge: 'assets/images/portfolio/favPandaL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favPenangS.jpg',
      enlarge: 'assets/images/portfolio/favPenangL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favSantoriniS.jpg',
      enlarge: 'assets/images/portfolio/favSantoriniL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favRuinS.jpg',
      enlarge: 'assets/images/portfolio/favRuinL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/favTempleS.jpg',
      enlarge: 'assets/images/portfolio/favTempleL.jpg',
      filterGroup: 'fav'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/swBulbS.jpg',
      enlarge: 'assets/images/portfolio/swBulbL.jpg',
      filterGroup: 'sw'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/swDriveS.jpg',
      enlarge: 'assets/images/portfolio/swDriveL.jpg',
      filterGroup: 'sw'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/swPlaneS.jpg',
      enlarge: 'assets/images/portfolio/swPlaneL.jpg',
      filterGroup: 'sw'
    });

    this.galleryItems.push({
      thumb: 'assets/images/portfolio/swSkateS.jpg',
      enlarge: 'assets/images/portfolio/swSkateL.jpg',
      filterGroup: 'sw'
    });
  }
}
