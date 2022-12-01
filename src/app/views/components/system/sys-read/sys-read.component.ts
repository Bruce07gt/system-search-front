import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { sys } from 'src/app/models/sys';
import { SystemsService } from 'src/app/systems/services/systems.service';

@Component({
  selector: 'app-sys-read',
  templateUrl: './sys-read.component.html',
  styleUrls: ['./sys-read.component.css']
})
export class SysReadComponent implements AfterViewInit {

  systems : sys[] = [];


  displayedColumns: string[] = ['id', 'descricao', 'sigla', 'actions'];
  dataSource = new MatTableDataSource<sys>(this.systems);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(
          private service : SystemsService,
          private router : Router
          ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  navigateToCreate():void {
    this.router.navigate(['system/create-system'])
  }


  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.systems = resposta;
      this.dataSource = new MatTableDataSource<sys>(this.systems);
      this.dataSource.paginator = this.paginator;
    })
  }
}
