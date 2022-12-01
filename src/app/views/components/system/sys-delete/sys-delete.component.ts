import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sys } from 'src/app/models/sys';
import { SystemsService } from 'src/app/systems/services/systems.service';



@Component({
  selector: 'app-sys-delete',
  templateUrl: './sys-delete.component.html',
  styleUrls: ['./sys-delete.component.css']
})
export class SysDeleteComponent implements OnInit {

  id_sys = ''

  system: sys = {
    id:'',
    descricao: '',
    sigla: ''

  }

  constructor(
    private router: Router,
    private service: SystemsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_sys = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_sys).subscribe(resposta => {
      this.system = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.id_sys).subscribe(resposta => {
      this.router.navigate(['system'])
      this.service.message('Software deletado com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['system'])
  }


}
