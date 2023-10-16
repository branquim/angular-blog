import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "Url da foto"
  @Input()
  cardTitle:string = "Titulo da noticia"
  @Input()
  cardDescription = "Descricao da noticia"

  constructor() { }

  ngOnInit(): void {
  }

}
