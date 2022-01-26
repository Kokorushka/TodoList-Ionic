import { Component,  ViewChild } from '@angular/core';
import { AlertController, IonInput} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList = [];
  taskName = '';
  constructor(private alertCtrl: AlertController) {
  
}
  @ViewChild('taskInput', {static:true}) input:IonInput;

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
      // console.log(input);
      this.input.setFocus();
    }
  }
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  updateTask(index) {
    const alert = this.alertCtrl.create({
        header: 'Update Task?',
        message: 'Type in your new task to update.',
        inputs: [{ name: 'editTask', placeholder: 'Task', value: this.taskList[index] }],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler: data => {
                      this.taskList[index] = data.editTask; }
                  }
                 ]
    }).then(alert => alert.present());
}

  crossOutTask(i) {
    var element = document.getElementById(i);
    element.classList.toggle('cross-out');
  }

  ionViewDidLoad(){
    setTimeout(() => {
        this.input.setFocus();
    },350);
}
}
