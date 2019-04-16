import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    // selector: '[app-servers]',
    // selector: '.app-servers',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green':'red'
    }
}