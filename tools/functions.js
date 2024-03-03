"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdForMongo = void 0;
const common_1 = require("@nestjs/common");
function checkIdForMongo(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new common_1.BadRequestException('Invalid data');
    }
    return true;
}
exports.checkIdForMongo = checkIdForMongo;
//# sourceMappingURL=functions.js.map