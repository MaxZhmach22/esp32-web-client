import {Component} from '@angular/core';
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'esp32-web-client'
  message: any;

  constructor(private readonly _messageService: MessageService) {}

  onSubmit() {
    if(this.message === undefined || this.message === '') return
    console.log('Отправка сообщения:', this.message)
    this._messageService.sendMessage(this.message).subscribe(
      response => {
        console.log('Получен ответ:', response);
      },
      error => {
        console.error('Произошла ошибка:', error);
      }
    );
  }
}
