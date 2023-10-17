import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "URL da foto"
  @Input()
  cardTitle:string ="Titulo da noticia"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
