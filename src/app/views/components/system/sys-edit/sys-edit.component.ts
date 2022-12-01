import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { sys } from 'src/app/models/sys';
import { SystemsService } from 'src/app/systems/services/systems.service';

@Component({
  selector: 'app-sys-edit',
  templateUrl: './sys-edit.component.html',
  styleUrls: ['./sys-edit.component.css']
})
export class SysEditComponent implements OnInit {

  id_cli = '';

  system: sys = {
    id: '',
    descricao: '',
    sigla: ''
  }


  constructor(
    private router: Router,
    private service: SystemsService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  cancel(): void {
    this.router.navigate(['system'])
  }

  findById():void {
    this.service.findById(this.id_cli).subscribe(resposta => {
      this.system = resposta;
    })
  }

  update(): void {
    this.service.update(this.system).subscribe((resposta) => {
      this.router.navigate(['clientes'])
      this.service.message('Software atualizado com sucesso!')
    })
  }

}
