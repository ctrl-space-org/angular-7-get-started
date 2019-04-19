import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created!";
  serverName = '';
  serverCreated: boolean = false;
  servers = ['server1','server2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverName= "";
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}