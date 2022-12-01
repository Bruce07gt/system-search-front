import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemsService } from 'src/app/systems/services/systems.service';
import { sys } from '../../../../models/sys';

@Component({
  selector: 'app-create-system',
  templateUrl: './create-system.component.html',
  styleUrls: ['./create-system.component.css']
})
export class CreateSystemComponent implements OnInit {

  system: sys = {
    id: '',
    sigla: '',
    descricao: ''
  }

  constructor(
    private router: Router,
    private service: SystemsService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['system'])
  }

  create(): void {
    this.service.create(this.system).subscribe((resposta) => {
      this.router.navigate(['system'])
      this.service.message('Software criado com sucesso!')
    })
  }

}
