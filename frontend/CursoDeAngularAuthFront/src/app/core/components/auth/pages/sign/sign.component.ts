import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit{

  /** 
   * errado para testar a mensagem de erro:
   *    asda@gmail.com
   *    123
   * 
   *  correto:
   *    dener@vidafullstack.com.br
   *    123
   * 
   *  próxima aula revisar DOM[deste curso]
   * 
   */

  public msgError: string = ''

  public formAuth: FormGroup = this.formBuilder.group({

    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required]

  })

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService  
  ){}

  ngOnInit(): void {}

  public submitForm(){
    if(this.formAuth.valid){

      this.authService.sign({
        
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
      
      }).subscribe({
        
        next: (res)=> res,
        error:(err)=> (this.msgError = err),

      })

    }
  }

}
