webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadoresPageModule", function() { return PatrocinadoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patrocinadores__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatrocinadoresPageModule = /** @class */ (function () {
    function PatrocinadoresPageModule() {
    }
    PatrocinadoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patrocinadores__["a" /* PatrocinadoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patrocinadores__["a" /* PatrocinadoresPage */]),
            ],
        })
    ], PatrocinadoresPageModule);
    return PatrocinadoresPageModule;
}());

//# sourceMappingURL=patrocinadores.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatrocinadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatrocinadoresPage = /** @class */ (function () {
    function PatrocinadoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PatrocinadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatrocinadoresPage');
    };
    PatrocinadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-patrocinadores',template:/*ion-inline-start:"C:\Users\MatheusMartins\Documents\mobile\klisman\src\pages\patrocinadores\patrocinadores.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Patrocinadores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content has-subheader="false">\n	<ion-list>\n	<!-- brisanet -->\n		<ion-item href="#">\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div> <img src="../assets/imgs/download.jpg" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/roberto.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 75px;"> <strong>Roberto Nogueira</strong></h4>\n			 	 <h5 style=" margin-left: 99px;"> Presidente </h5>\n			 </div>\n		</ion-item>\n\n	<!-- evocorp -->\n		<ion-item href="#">\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div> <img src="../assets/imgs/evocorp_banner.jpg" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/Guilerme.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 75px;"> <strong>Guilherme Rodrigues</strong></h4>\n			 	 <h5 style=" margin-left: 120px;"> CEO </h5>\n			 </div>\n		</ion-item>\n	<!-- itecom -->\n		<ion-item href="#">\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div> <img src="../assets/imgs/26047236_1918955085084024_6509364671371273614_n.png" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/mateus.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 90px;"> <strong>Mateus Aires</strong></h4>\n			 	 <h5 style=" margin-left: 99px;"> Presidente </h5>\n			 </div>\n		</ion-item>\n\n		<!-- php com rapadura -->\n		<ion-item href="#" >\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div   style="border: 1px solid black;"> <img src="../assets/imgs/download.png" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/alessandro.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 75px;"> <strong>Alessandro Feitoza</strong></h4>\n			 	 <h5 style=" margin-left: 40px;">Des. Web | Engenheiro de Software</h5>\n			 </div>\n		</ion-item>\n\n	<!-- computer girls -->\n		<ion-item href="#">\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div style="border: 1px solid black;"> <img src="../assets/imgs/logo-computer-girls.png" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/talitha.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 75px;"> <strong>Talitha Alencar</strong></h4>\n			 	 <h5 style=" margin-left: 10px;"> Designer Gráfico | Engenheira de Software </h5>\n			 </div>\n		</ion-item>\n	<!-- programador -->\n		<ion-item href="#">\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div style="border: 1px solid black;"> <img src="../assets/imgs/poti.jpg" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/foto_matheus.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 90px;"> <strong>Matheus Ricelly</strong></h4>\n			 	 <h5 style=" margin-left: 80px;"> Desenvolvedor Web</h5>\n			 </div>\n		</ion-item>\n\n		<!-- Design Gráfico -->\n		<ion-item href="#" >\n			 <div style="width: 100%; height: auto; background: white;">\n			 	<div style="border: 1px solid black;"> <img src="../assets/imgs/produtor-de-design-grafico-formado-na-zion-D_NQ_NP_720137-MLB25982003132_092017-F.jpg" style="width: 100%; height: 90px;"></div>\n			 	<img src="../assets/imgs/adriano.jpg" style="border-radius: 100%; width: 60px; height: 60px; margin-top: -40px; margin-left: 105px;"><br>\n			 	<h4 style=" margin-left: 90px;"> <strong>Adriano Maia</strong></h4>\n			 	 <h5 style=" margin-left: 80px;"> Design Gráfico</h5>\n			 </div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MatheusMartins\Documents\mobile\klisman\src\pages\patrocinadores\patrocinadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PatrocinadoresPage);
    return PatrocinadoresPage;
}());

//# sourceMappingURL=patrocinadores.js.map

/***/ })

});
//# sourceMappingURL=0.js.map