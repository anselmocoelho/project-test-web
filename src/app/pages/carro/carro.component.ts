import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Carro} from '../../shared/models/carro';
import {CarroService} from '../../shared/services/carro/carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  form: FormGroup;
  model = new Carro();

  constructor(private _fb: FormBuilder, private carroService: CarroService) { }

  ngOnInit() {
    this.form = this._fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      placa: ['', [Validators.required]],
    });
  }

  save() {
    this.model.marca = this.form.value.marca;
    this.model.modelo = this.form.value.model;
    this.model.placa = this.form.value.placa;

    this.carroService.get().subscribe(res => {
      try {
        //
      } catch (err) {
        console.log(err);
      }
    }, err => {
      console.log(err);
    });
  }

}
