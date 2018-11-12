import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SimulationService
{
    constructor(
        private _httpClient: HttpClient
    )
    {
    }
}