import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { WineService } from '../../service/wine.service';
import { Wine } from '../../model/wine';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@Output() cancel = new EventEmitter<boolean>();
	@Output() updated = new EventEmitter<boolean>();
    registerWine: FormGroup;
    loading = false;
    submitted = false;

  constructor(
        private formBuilder: FormBuilder,
        private wineService: WineService) { }

  ngOnInit() {
        this.registerWine = this.formBuilder.group({
            wineName: ['', Validators.required],
            age: ['', Validators.required],
            comment: ['', Validators.required],
            rating: ['', Validators.required]
        });
  }
    // convenience getter for easy access to form fields
    get f() { return this.registerWine.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerWine.invalid) {
            return;
        }

        this.loading = true;


        let newWine: Wine = {
        	name: this.registerWine.get('wineName').value,
        	image: 'https://image.shutterstock.com/image-photo/full-red-wine-bottle-isolated-450w-164657267.jpg',
        	age: this.registerWine.get('age').value,
        	comment: this.registerWine.get('comment').value,
        	rating: this.registerWine.get('rating').value
        };

        this.wineService.updateWines(newWine);
    	this.updated.emit();
    }

    cancelBt(){
    	this.cancel.emit();
    }
}
