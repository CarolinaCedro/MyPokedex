import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  emitValue(value: string) {
    this.emmitSearch.emit(value)
  }


}
