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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const category_schema_1 = require("./schemas/category.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const functions_1 = require("../../tools/functions");
let CategoriesService = class CategoriesService {
    constructor(categoriesModel) {
        this.categoriesModel = categoriesModel;
    }
    async getAllCategories() {
        try {
            return await this.categoriesModel.find();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async createCategory(createCategoryDto) {
        try {
            const newCategory = await new this.categoriesModel(createCategoryDto).save();
            return newCategory;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async checkCategoryById(id_category) {
        try {
            (0, functions_1.checkIdForMongo)(id_category);
            const caterory = await this.categoriesModel.findById(id_category);
            if (!caterory) {
                return false;
            }
            return true;
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map