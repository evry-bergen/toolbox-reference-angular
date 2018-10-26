/**
 * Created by orjanertkjern on 21/08/2017.
 */
import { Component, Input, OnInit } from 'vendor/angular';
import { ExampleService } from 'app/shared/utility/example.service';

@Component({
  selector: 'boilerplate-greeter',
  templateUrl: 'greeter.component.html',
  styleUrls: ['./shared/greeter.component.scss'],
})
export class GreeterComponent implements OnInit {

  @Input() greetings: string;
  isServiceWorking: boolean;
  showServiceStatus: boolean;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    if (!this.greetings) {
      this.greetings = 'home.welcome';
    }
    this.callService();
  }

  toggleServiceStatus() {
    this.showServiceStatus = !this.showServiceStatus;
  }

  private callService() {
    this.exampleService.serviceExampleFunction().subscribe(
      result => {
        this.isServiceWorking = result;
      },
      err => {
        console.log(err);
      });
  }

}
