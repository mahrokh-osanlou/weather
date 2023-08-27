import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  languageList = [
    {
      name: "En",
      icon: "../../../../../assets/images/language/us.svg",
      symbol: "en",
    },
    {
      name: "De",
      icon: "../../../../../assets/images/language/germany.svg",
      symbol: "de",
    },
  ];
  @Output() SideNavToggle = new EventEmitter();

  constructor(
    private router: Router,
    public translate: TranslateService,
    public homeService: HomeService
  ) {}

  ngOnInit(): void {}

  openSidenav() {
    this.SideNavToggle.emit();
  }

  home() {
    this.router.navigate(['pages']);
  }

  customerList() {
    this.router.navigate(['pages/weather-list']);
  }

  customerAdd() {
    this.router.navigate(['pages/weather-forcast']);
  }

  switchLang(lang: any) {
    this.homeService.selectedLanguage.next(lang);
    this.translate.use(lang.symbol);
    sessionStorage.setItem("language", JSON.stringify(lang));
  }
}
