"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const order_repository_1 = require("../model/order.repository");
const order_model_1 = require("../model/order.model");
let CheckoutComponent = class CheckoutComponent {
    constructor(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    submitOrder(form) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order)
                .subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
    ngOnInit() { }
};
CheckoutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "checkout.component.html",
        styleUrls: ["checkout.component.css"]
    }), 
    __metadata('design:paramtypes', [order_repository_1.OrderRepository, order_model_1.Order])
], CheckoutComponent);
exports.CheckoutComponent = CheckoutComponent;
