import { Component, OnInit } from '@angular/core';
import { Persona } from '../pulsacion/models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  persona: Persona;

  constructor(private personaservice: PersonaService) {
    this.persona = new Persona();
  }

  ngOnInit(): void {

  }

  crearpersona() {
    if (this.persona.sexo === "m") {
      alert("masculino")
      this.sexomasculino();
    }
    else if (this.persona.sexo === "f") {
      this.sexofemenino();
      alert("femenino");
    }

    else {
      alert("el sexo no es correctos");
    }
  }

  sexomasculino() {
    this.persona.pulsacion = (210 - this.persona.edad) / 10
    this.personaservice.post(this.persona)
  }

  sexofemenino() {
    this.persona.pulsacion = (220 - this.persona.edad) / 10
    this.personaservice.post(this.persona)
  }


}
