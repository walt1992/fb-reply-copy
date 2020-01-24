
import produce from 'immer';
import replyAPI from 'api/replyAPI';

const ADD_REPLY = 'replies/ADD_REPLY';
const GET_REPLIES = 'replies/GET_REPLIES';
const INIT_ROOT = 'replies/INIT_ROOT';
export const getReplies = (parentId) => {
    const replies = replyAPI.get(parentId);
    return { type : GET_REPLIES, payload :{replies}};
}

export const initRoot = () => {
    const root = replyAPI.init();
    console.log(root)
    return {type : INIT_ROOT, payload : { [-1] : root}};
}

export const addReply = (value, parentId) => {
    const reply = {
        id : `reply_${new Date()}`,
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
    return {type : ADD_REPLY, payload : {reply}};
}

export default function replies(state = {}, action){
    switch(action.type){
        case INIT_ROOT : return action.payload;
        case GET_REPLIES : 
            return {...state, ...action.payload.replies};
        case ADD_REPLY : 
            const {reply} = action.payload;
            return produce(state, draft => {
                console.log('test')
                draft[reply.id] = reply;
                draft[reply.parentId].subOpened = true;
                draft[reply.parentId].subReplies.push(reply.id);
                console.log(draft)
            })
        default : return state;
    }
}

