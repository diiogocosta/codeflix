import {
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header', { static: true }) header;
  public active = 'Início';
  public menu = [
    {
      description: 'Início',
      route: ''
    },
    {
      description: 'Linguagens',
      route: 'languages'
    },
    {
      description: 'Libs',
      route: ''
    },
    {
      description: 'Mais recentes',
      route: ''
    },
    {
      description: 'Minha lista',
      route: ''
    }
  ];

  @HostListener('window:scroll', [])
  scrolled() {
    if (window.pageYOffset === 0) {
      this.renderer.removeClass(this.header.nativeElement, 'black-bg');
    } else {
      this.renderer.addClass(this.header.nativeElement, 'black-bg');
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  toggleActive(description) {
    this.active = description;
  }
}
