"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseInstance = /** @class */ (function () {
    function CouchbaseInstance() {
        this.database = new nativescript_couchbase_1.Couchbase("test-database");
        this.database.createView("people", "1", function (document, emitter) {
            emitter.emit(document._id, document);
        });
    }
    CouchbaseInstance.prototype.getDatabase = function () {
        return this.database;
    };
    CouchbaseInstance = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseInstance);
    return CouchbaseInstance;
}());
exports.CouchbaseInstance = CouchbaseInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VjaGJhc2VpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQ7SUFNSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsVUFBQyxRQUFRLEVBQUUsT0FBTztZQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sdUNBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBZlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBaUI3QjtJQUFELHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jb3VjaGJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ291Y2hiYXNlSW5zdGFuY2Uge1xyXG5cclxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcclxuICAgIHByaXZhdGUgcHVsbDogYW55O1xyXG4gICAgcHJpdmF0ZSBwdXNoOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKFwidGVzdC1kYXRhYmFzZVwiKTtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJwZW9wbGVcIiwgXCIxXCIsIChkb2N1bWVudCwgZW1pdHRlcikgPT4ge1xyXG4gICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGFiYXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==