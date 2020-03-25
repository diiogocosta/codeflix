import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiKey: string = 'your key here';

  constructor(public http: HttpClient) {}

  makeGraphQLRequest(query) {
    console.log('passa');
    return this.http.post(
      'https://api.github.com/graphql',
      { query },
      {
        headers: {
          Authorization: `bearer ${this.apiKey}`
        }
      }
    );
  }
}
