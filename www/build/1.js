webpackJsonp([1],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinicursosPageModule", function() { return MinicursosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minicursos__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinicursosPageModule = /** @class */ (function () {
    function MinicursosPageModule() {
    }
    MinicursosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__minicursos__["a" /* MinicursosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__minicursos__["a" /* MinicursosPage */]),
            ],
        })
    ], MinicursosPageModule);
    return MinicursosPageModule;
}());

//# sourceMappingURL=minicursos.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinicursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MinicursosPage = /** @class */ (function () {
    function MinicursosPage(navCtrl, dados) {
        this.navCtrl = navCtrl;
        this.dados = dados;
    }
    // metodo para listar os episodios ao iniciar
    MinicursosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dados.load().then(function (data) {
            _this.obj = data;
            _this.result = _this.obj;
        });
    };
    MinicursosPage.prototype.Mudarestado = function (el) {
        var display = document.getElementById(el).style.display;
        if (display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    };
    MinicursosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minicursos',template:/*ion-inline-start:"C:\Users\MatheusMartins\Documents\mobile\klisman\src\pages\minicursos\minicursos.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>SELEÇÕES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n <ion-list class="lista">\n\n\n        <ion-item href="#"  *ngFor="let episode of result" (click)=\'Mudarestado([episode.id])\'>\n        	<h3><b>{{episode.oficina}}</b></h3>\n        	<div  id=\'{{episode.id}}\' style="display: none;">\n            <img src="../../assets/imgs/{{ episode.imagem }}">\n\n\n\n\n        		<h4>POSIÇÃO e PONTUAÇÃO:  <b> {{episode.nome}} </b> </h4>\n        		<h4>PROXIMO JOGO : <b> {{episode.local.local}} </b> </h4>\n        		<h4>HORÁRIO e LOCAL : <b> {{episode.local.horario}} </b> </h4>\n        		<h4>DATA: <b> {{episode.local.data}} </b> </h4>\n\n        	</div>\n        	\n        </ion-item>\n     </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\MatheusMartins\Documents\mobile\klisman\src\pages\minicursos\minicursos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* ServiceProvider */]])
    ], MinicursosPage);
    return MinicursosPage;
}());

//# sourceMappingURL=minicursos.js.map

/***/ })

});
//# sourceMappingURL=1.js.map