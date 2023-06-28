import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../pokedex.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public hasResult: boolean = false;

  public pokemon: any;

  constructor(private activeRoute: ActivatedRoute, private service: PokedexService) {
  }

  ngOnInit(): void {
    this.pokemons();
  }


  public pokemons() {
    const id = this.activeRoute.snapshot.params['id']
    const pokemon = this.service.apiGetPokemon(`${this.urlPokemon}/${id}`)
    const name = this.service.apiGetPokemon(`${this.urlName}/${id}`)
    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.hasResult = true
        console.log("aqui a resposta", res)
      },
      error => {
        console.log(error.log)
      }
    );
  }
}

