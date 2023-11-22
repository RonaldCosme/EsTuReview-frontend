import { Component } from '@angular/core';
import { AfterViewInit, OnInit , Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/model/Professor';
import { ProfessorServiceService } from 'src/app/services/professor-service.service';
import Swiper from 'swiper';
import { ScriptChargeService } from 'src/app/services/script-charge.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit , AfterViewInit {
  cssUrl4: string = '/assets/css/styles.css';
  cssUrl5: string = '/assets/css/swiper-bundle.min.css';

  professorsHome: Professor[] = [];
  filteredProfessorHome: Professor[] = [];

  constructor(
    private professorService: ProfessorServiceService,
    private _chargeScripts: ScriptChargeService,
    public sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Cargar archivos CSS al inicio
    this.loadJsFiles();    
    this.loadProfessors(); 
  }

  loadProfessors(): void { 
    this.professorService.getAllProfessors().subscribe(
      (professors) => {
        this.professorsHome = professors;
        this.filteredProfessorHome = [...professors];
      },
      (error) => {
        console.error('Error loading professors:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    if (this.router.url === '/review') {
      try {
        new Swiper(".new-swiper", {
          spaceBetween: 24,
          loop: true,
          slidesPerView: "auto",
          centeredSlides: true,

          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
          breakpoints: {
            992: {
              spaceBetween: 80,
            },
          },
        });
        console.log('Swiper Initialized successfully');
      } catch (error) {
        console.error('Error initializing Swiper:', error);
      }
    }

    // Verificar la carga de archivos CSS después de la vista
    this.checkCssFiles();
  }

  private loadJsFiles(): void {
    // Cargar archivos CSS utilizando el servicio ScriptCharge
    this._chargeScripts.charge(["main/main"]);
    this._chargeScripts.charge(["scrollreveal.min/scrollreveal.min"]);
  }

  private checkCssFiles(): void {
    // Verificar la carga de archivos CSS
    this.isCssFileLoaded(this.cssUrl4);
    this.isCssFileLoaded(this.cssUrl5);
  }

  private isCssFileLoaded(url: string): void {
    // Verificar si el archivo CSS está cargado correctamente
    const linkElement = this.renderer.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = url;

    linkElement.onload = () => {
      console.log(`Archivo CSS cargado correctamente: ${url}`);
    };

    linkElement.onerror = () => {
      console.error(`Error al cargar el archivo CSS: ${url}`);
    };

    this.renderer.appendChild(document.head, linkElement);
  }


}
