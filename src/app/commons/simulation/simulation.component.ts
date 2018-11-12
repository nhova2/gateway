import { Component, OnDestroy, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'app-simulation',
    templateUrl  : './simulation.component.html',
    styleUrls    : ['./simulation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AppSimulationComponent implements OnInit
{
    datas = [
        {valeur:"3 mois"},
        {valeur:"6 mois"},
        {valeur:"9 mois"},
        {valeur:"12 mois"},
        {valeur:"3 ans"}
    ];
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            montantEmprunt: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }
}
