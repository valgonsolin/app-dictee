import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CorrectionService {

  private corrUrl = 'https://languagetool.org/api/v2/check';
  // private httpOptions = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getErrors(text: string): Observable<Error[]> {
    const errors = [];
    const body = new FormData();
    body.append('text', text);
    body.append('language', 'fr');
    const rawCorr = this.http.post<Correction>(this.corrUrl, body).pipe(catchError(this.handleError('correction', [])));
    rawCorr.subscribe( corr => {
      corr.matches.forEach(rawError => {
        const error = new Error();
        error.length = parseInt(rawError.length, 10);
        error.offset = parseInt(rawError.offset, 10);
        error.message = rawError.message;
        error.sentence = rawError.sentence;
        error.rule = rawError.rule.description;
        error.category = rawError.rule.category.name;
        errors.push(error);
      });
    });
    return of(errors);
  }

  constructor(private http: HttpClient) { }
}

export class Error {
  offset: number;
  length: number;
  message: string;
  sentence: string;
  category: string;
  rule: string;
}

class Correction {
  matches: Object[];
}
