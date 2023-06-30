import { Api } from './../../services/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';



@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  idusuario: number = 0;
  nome: string = "";
  cpf: string = "";
  email: string = "";
  contato: string = "";
  senha: string = "";
  actRoute: any;

  constructor(
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    public toastController: ToastController,
    private provider :Api)
{}
  ngOnInit() {
    
    //(ACTROUTER, recebe e passa parametros entre paginas.
    this.actRoute.params.subscribe((data:any)=>{
    });
    }
    async mensagemSucesso(){
     const toast = await this.toastController.create({
      message:'Mensagem',
      duration:2000,
      color: 'success'
     });
     toast.present();
    }

   async mensagemErro(){
      const toast = await this.toastController.create({
        message:'Mensagem',
        duration:2000,
        color: 'danger'
       });
       toast.present();

    }
    Usuarios(){
      this.router.navigate(['usuarios']);
    }

    cadastrar(){
      return new Promise(resolve => {
        let dados ={
         idusuario: this.idusuario,
         nome: this.nome,
         cpf: this.cpf,
         email: this.email,
         contato: this.contato,
         senha: this.senha,
        }
        this.provider.dadosApi(dados, 'login/usuarios/inserir.php').subscribe(
          data=>{
            console.log(data=['success']);
            console.log(dados);
            this.router.navigate(['usuarios']);
           // this.mensagemSucesso();
          }
        )
      });
    }
    salvar(){
      console.log('Salvar')
    }

 
}

