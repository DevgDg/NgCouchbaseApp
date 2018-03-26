"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var couchbaseinstance_1 = require("../../couchbaseinstance");
var ListComponent = /** @class */ (function () {
    function ListComponent(router, location, ngZone, couchbaseInstance) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.database = couchbaseInstance.getDatabase();
        this.personList = [];
        this.database.addDatabaseChangeListener(function (changes) {
            var changeIndex;
            var _loop_1 = function () {
                var documentId = changes[i].getDocumentId();
                changeIndex = _this.indexOfObjectId(documentId, _this.personList);
                var document_1 = _this.database.getDocument(documentId);
                _this.ngZone.run(function () {
                    if (changeIndex == -1) {
                        _this.personList.push(document_1);
                    }
                    else {
                        _this.personList[changeIndex] = document_1;
                    }
                });
            };
            for (var i = 0; i < changes.length; i++) {
                _loop_1();
            }
        });
        location.subscribe(function (path) {
            _this.refresh();
        });
        this.refresh();
    }
    ListComponent.prototype.create = function () {
        this.router.navigate(["create"]);
    };
    ListComponent.prototype.refresh = function () {
        this.personList = [];
        var rows = this.database.executeQuery("people");
        for (var i = 0; i < rows.length; i++) {
            this.personList.push(rows[i]);
        }
    };
    ListComponent.prototype.indexOfObjectId = function (needle, haystack) {
        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] != undefined && haystack[i].hasOwnProperty("_id")) {
                if (haystack[i]._id == needle) {
                    return i;
                }
            }
        }
        return -1;
    };
    ListComponent.prototype.deleteItem = function (docId) {
        this.database.deleteDocument(docId);
        this.refresh();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./components/list/list.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, common_1.Location, core_1.NgZone, couchbaseinstance_1.CouchbaseInstance])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUM7QUFDdkMsMENBQXlDO0FBQ3pDLDZEQUEwRDtBQU0xRDtJQU9JLHVCQUFZLE1BQWMsRUFBRSxRQUFrQixFQUFFLE1BQWMsRUFBRSxpQkFBb0M7UUFBcEcsaUJBK0JDO1FBN0JHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFDLE9BQU87WUFDNUMsSUFBSSxXQUFXLENBQUM7O2dCQUVaLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxVQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBR3JELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVEsQ0FBQyxDQUFDO29CQUNuQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsVUFBUSxDQUFDO29CQUM1QyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQWJELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7O2FBYXRDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNwQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLCtCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVDQUFlLEdBQXZCLFVBQXdCLE1BQWMsRUFBRSxRQUFhO1FBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsS0FBVTtRQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQW5FUSxhQUFhO1FBSnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsdUNBQXVDO1NBQ3ZELENBQUM7eUNBUXNCLGVBQU0sRUFBWSxpQkFBUSxFQUFVLGFBQU0sRUFBcUIscUNBQWlCO09BUDNGLGFBQWEsQ0FvRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtDb3VjaGJhc2VJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2NvdWNoYmFzZWluc3RhbmNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb3VjaGJhc2VJbnN0YW5jZTogQ291Y2hiYXNlSW5zdGFuY2U7XG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZTtcbiAgICBwdWJsaWMgcGVyc29uTGlzdDogQXJyYXk8T2JqZWN0PjtcblxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBsb2NhdGlvbjogTG9jYXRpb24sIG5nWm9uZTogTmdab25lLCBjb3VjaGJhc2VJbnN0YW5jZTogQ291Y2hiYXNlSW5zdGFuY2UpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLm5nWm9uZSA9IG5nWm9uZTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGNvdWNoYmFzZUluc3RhbmNlLmdldERhdGFiYXNlKCk7XG4gICAgICAgIHRoaXMucGVyc29uTGlzdCA9IFtdO1xuXG5cbiAgICAgICAgdGhpcy5kYXRhYmFzZS5hZGREYXRhYmFzZUNoYW5nZUxpc3RlbmVyKChjaGFuZ2VzKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hhbmdlSW5kZXg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZG9jdW1lbnRJZCA9IGNoYW5nZXNbaV0uZ2V0RG9jdW1lbnRJZCgpO1xuICAgICAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gdGhpcy5pbmRleE9mT2JqZWN0SWQoZG9jdW1lbnRJZCwgdGhpcy5wZXJzb25MaXN0KTtcbiAgICAgICAgICAgICAgICBsZXQgZG9jdW1lbnQgPSB0aGlzLmRhdGFiYXNlLmdldERvY3VtZW50KGRvY3VtZW50SWQpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZUluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbkxpc3QucHVzaChkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbkxpc3RbY2hhbmdlSW5kZXhdID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9jYXRpb24uc3Vic2NyaWJlKChwYXRoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjcmVhdGVcIl0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0ID0gW107XG4gICAgICAgIGxldCByb3dzID0gdGhpcy5kYXRhYmFzZS5leGVjdXRlUXVlcnkoXCJwZW9wbGVcIik7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbkxpc3QucHVzaChyb3dzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5kZXhPZk9iamVjdElkKG5lZWRsZTogc3RyaW5nLCBoYXlzdGFjazogYW55KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGF5c3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSAhPSB1bmRlZmluZWQgJiYgaGF5c3RhY2tbaV0uaGFzT3duUHJvcGVydHkoXCJfaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0uX2lkID09IG5lZWRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlSXRlbShkb2NJZDogYW55KXtcbiBcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5kZWxldGVEb2N1bWVudChkb2NJZCk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbn1cbiJdfQ==