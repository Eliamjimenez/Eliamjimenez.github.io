import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profesor } from '../models/profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  public profesorForm = new FormGroup({});
  public titulo = 'Profesores';
  public profesorSeleccionado?: Profesor;
  public textSimple:string='';

  public profesores = [
    {id:1,nombre:'Victor', apellido:'Mercado'},
    {id:2,nombre:'Juan', apellido:'Perez'},
    {id:3,nombre:'Zogly', apellido:'Toro'},
    {id:4,nombre:'Anthony', apellido:'Cruzado'},
    {id:5,nombre:'eliam', apellido:'jimenez'}
  ];

  constructor(private fb: FormBuilder) {
    this.crearForm();
  }
  ngOnInit() {
  }

  crearForm(){
    this.profesorForm = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required]
    });
  }

  profesorSubmit(){
    console.log(this.profesorForm.value);
  }

  profesorSelect(prof:Profesor){
    this.profesorSeleccionado=prof;
    this.profesorForm.patchValue(prof);
  }

  volver(){
    this.profesorSeleccionado;
  }

  

}
