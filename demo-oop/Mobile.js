let Mobile = function (name) {
    this.name = name;
    this.msg = "";
    this.inbox = [];
    this.outbox = [];
    this.spam = [];

    this.writeMsg = function (value) {
        this.msg = value;
    }
    this.sendMsg = function (mobile) {
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg);
    }
    this.receiveMsg = function(value){
        this.inbox.push(value);
        // this.spam.push(value);
    }
}

let iphone = new Mobile("iphone");
let nokia = new Mobile("nokia");
