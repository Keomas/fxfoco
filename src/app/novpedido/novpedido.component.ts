import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';


interface Album{
  value: string;
  viewValue: string;
}

interface tipoLaminacao{
  value: string;
  viewValue: string;
}

interface tipoMaterial{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-novpedido',
  templateUrl: './novpedido.component.html',
  styleUrls: ['./novpedido.component.css']
})
export class NovpedidoComponent implements OnInit {

  @ViewChild('FileSelectInputDialog')
  FileSelectInputDialog!: ElementRef<HTMLInputElement>;

  Laminacao:tipoLaminacao [] =[
    {value:"brilho",viewValue:"brilho"},
    {value:"fosco",viewValue:"fosco"},
    {value:"PVC",viewValue:"PVC"}

  ];

  albumMaterial:tipoMaterial [] =[
    {value:"acrilico",viewValue:"acrilico"},
    {value:"trasparente",viewValue:"trasparente"}
];

  tamAlbum:Album [] =[
    {value:"25x25",viewValue:"25x25"},
    {value:"50x50",viewValue:"50x50"},
    {value:"75x75",viewValue:"75x75"}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public OpenAddFilesDialog() {
    const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
    e.click();
}

}
