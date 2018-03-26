"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var couchbaseinstance_1 = require("../../couchbaseinstance");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(location, couchbaseInstance) {
        this.database = couchbaseInstance.getDatabase();
        this.location = location;
        this.firstname = "";
        this.lastname = "";
    }
    CreateComponent.prototype.save = function () {
        if (this.firstname != "" && this.lastname != "") {
            this.database.createDocument({
                "firstname": this.firstname,
                "lastname": this.lastname
            });
            this.location.back();
        }
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "create",
            templateUrl: "./components/create/create.component.html"
        }),
        __metadata("design:paramtypes", [common_1.Location, couchbaseinstance_1.CouchbaseInstance])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXlDO0FBQ3pDLDZEQUEwRDtBQU0xRDtJQVFJLHlCQUFZLFFBQWtCLEVBQUUsaUJBQW9DO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzVCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUF2QlEsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLDJDQUEyQztTQUMzRCxDQUFDO3lDQVN3QixpQkFBUSxFQUFxQixxQ0FBaUI7T0FSM0QsZUFBZSxDQXlCM0I7SUFBRCxzQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0NvdWNoYmFzZUluc3RhbmNlfSBmcm9tIFwiLi4vLi4vY291Y2hiYXNlaW5zdGFuY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY3JlYXRlXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBjb3VjaGJhc2VJbnN0YW5jZTogQ291Y2hiYXNlSW5zdGFuY2U7XG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xuICAgIHB1YmxpYyBmaXJzdG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBMb2NhdGlvbiwgY291Y2hiYXNlSW5zdGFuY2U6IENvdWNoYmFzZUluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBjb3VjaGJhc2VJbnN0YW5jZS5nZXREYXRhYmFzZSgpO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgaWYodGhpcy5maXJzdG5hbWUgIT0gXCJcIiAmJiB0aGlzLmxhc3RuYW1lICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IHRoaXMuZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogdGhpcy5sYXN0bmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19