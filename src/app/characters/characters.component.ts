import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters:any= null;


  constructor(private charactersService: CharactersService){

  }
  ngOnInit(){
    this.charactersService.retornar().subscribe( result => this.characters = result)
  }
}
