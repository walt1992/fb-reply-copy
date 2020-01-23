const CHANGE_INPUT = 'reply/CHANGE_INPUT';

// function Reply(){
//     this.
// }


function reply(state = [], action){
    switch(action.type){
        case CHANGE_INPUT : state
    }
}


export class ReplyModel {
    constructor(){
        this.id = null;
        this.parentId = -1;
        this.userName = '';
        this.comment = '';
        this.likeCnt = 0;
        this.subReplies = [];
        this.deleted = false;
        this.subOpened = false;
        this.createdAt = new Date();
    }
}




function comment( state = '', action){
    switch(action.type)
}