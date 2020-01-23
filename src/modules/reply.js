const CHANGE_INPUT = 'reply/CHANGE_INPUT';
const ADD_REPLY = 'reply/ADD_REPLY';

export const changeInput = (value) => ({type : CHANGE_INPUT, payload :{value}});

export default function reply( state = '', action){
    switch(action.type){
        case CHANGE_INPUT : return action.payload.value;
        default :return state;
    }
}



// const reply = {
//     id : null,
//     parentId : -1,
//     userName : '',
//     comment : comment,
//     likeCnt : 0,
//     subReplies : [],
//     deleted : false,
//     subOpened : false,
//     createdAt : new Date(),
// };
