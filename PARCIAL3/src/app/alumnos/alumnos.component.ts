import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  
  public alumnoForm = new FormGroup({});
  public titulo = 'Alumnos';
  public alumnoSeleccionado?: Alumno;
  public textSimple:string='';

  public alumnos = [
    {id:1, nombre:'Marta', apellido:'Kent', telefono:3333331},
    {id:2, nombre:'Paula', apellido:'Isabela', telefono:3333332},
    {id:3, nombre:'Laura', apellido:'Antonia', telefono:3333333},
    {id:4, nombre:'Luiza', apellido:'Maria', telefono:3333334},
    {id:5, nombre:'Lucas', apellido:'Machado', telefono:3333335},
    {id:6, nombre:'Pedro', apellido:'Alvarez', telefono:3333336},
    {id:7, nombre:'Paulo', apellido:'José', telefono:3333337}
  ];

  constructor(private fb: FormBuilder) {
    this.crearForm();
  }

  ngOnInit(): void {
  }

  crearForm(){
    this.alumnoForm = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required]
    });
  }

  alumnoSubmit(){
    console.log(this.alumnoForm.value);
  }

  alumnoSelect(alumno:Alumno){
    this.alumnoSeleccionado=alumno;
    this.alumnoForm.patchValue(alumno);
  }

  volver(){
    this.alumnoSeleccionado;
  }

  

}
