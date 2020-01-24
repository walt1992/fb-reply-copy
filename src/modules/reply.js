import replyAPI from 'api/replyAPI';


const CHANGE_INPUT = 'reply/CHANGE_INPUT';
const ADD_REPLY = 'reply/ADD_REPLY';

export const changeInput = (value) => ({type : CHANGE_INPUT, payload :{value}});
export const addReply = (value, parentId) => {
    const reply = {
        id : null,
        parentId : parentId,
        userName : '',
        comment : value,
        likeCnt : 0,
        subReplies : [],
        deleted : false,
        subOpened : false,
        createdAt : new Date(),
    };

    replyAPI.add(reply);
    return {type : ADD_REPLY, paylaod : {reply}};
}
export default function reply( state = '', action){
    switch(action.type){
        case CHANGE_INPUT : return action.payload.value;
        default : return state;
    }
}


