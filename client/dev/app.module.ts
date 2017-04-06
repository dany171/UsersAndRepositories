import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
//import { TodoCmp }   from "./todo/components/todo-cmp";
//import { todoRouting } from "./todo/components/todo-route";
//import { TodoService }   from "./todo/services/todo-service";

import { Users }   from "./users/components/users";
import { usersRouting } from "./users/components/users-route";
import { UsersService }   from "./users/services/users-service";


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      usersRouting      
    ],
    declarations: [
      App,
      Users,
    ],
    providers: [
      UsersService,
    ],
    bootstrap: [
      App
    ],
})
export class AppModule {}
