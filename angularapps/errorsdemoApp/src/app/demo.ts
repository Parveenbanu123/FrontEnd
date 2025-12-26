import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"

const http=inject(HttpClient)
export function load(){
    return http.get("https://jsonplaceholder.typicode.com/users");
}