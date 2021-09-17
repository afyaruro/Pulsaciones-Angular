import { Component, OnInit } from '@angular/core';
import { Persona } from '../pulsacion/models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  personas: Persona[] = [];
 
  
  constructor(private personaservice:PersonaService) { }

  ngOnInit(): void {
   this.personas=this.personaservice.get();
  }

}
