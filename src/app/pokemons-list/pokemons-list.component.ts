import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../pokedex.service";

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  public pokemons: any = []
  public setPokemons: any = []

  constructor(private service: PokedexService) {
  }

  ngOnInit(): void {
    this.service.pokemons.subscribe(
      res => {
        console.log(res.results)
        this.setPokemons = res.results
        this.pokemons = this.setPokemons
      }
    )
  }

  searchResult(value: string) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    this.pokemons = filter
  }

}
