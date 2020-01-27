
import produce from 'immer';

const ADD_REPLY = 'replies/ADD_REPLY';
const GET_REPLIES = 'replies/GET_REPLIES';
const INIT_ROOT = 'replies/INIT_ROOT';
const OPEN_SUB_REPLY = 'replies/OPEN_SUB_REPLY';
const OPEN_REPLY_INPUT = 'replies/OPEN_REPLY_INPUT';
const DELETE_REPLY = 'replies/DELETE_REPLY';
const LIKE_REPLY = 'replies/LIKE_REPLY';

export const getReplies = (replies) => {
    return {type : GET_REPLIES, payload :{replies}};
}

export const initRoot = (root) => {
    return {type : INIT_ROOT, payload : { [-1] : root}};
}

export const addReply = (reply) => {
    return {type : ADD_REPLY, payload : {reply}};
}

export const deleteReply = (id) => {
    return {type : DELETE_REPLY, payload : {id}};
}

export const likeReply = (id) => {
    return {type : LIKE_REPLY, payload : {id}};
}

export const openSubReply = (id) => ({type : OPEN_SUB_REPLY, payload : {id}});
export const openReplyInput = (id) => ({type : OPEN_REPLY_INPUT, payload :{id}});

export default function replies(state = {}, action){
    switch(action.type){
        case INIT_ROOT :
            return action.payload;
        case GET_REPLIES : 
            return {...state, ...action.payload.replies};
        case ADD_REPLY : 
            return produce(state, draft => {
                const {reply} = action.payload;
                draft[reply.id] = reply;
                draft[reply.parentId].subReplyOpened = true;
                draft[reply.parentId].subReplies.push(reply.id);
            })
        case DELETE_REPLY :
            return produce(state, draft => {
                const {id} = action.payload;
                const {parentId} = state[id];
                draft[parentId].subReplies = draft[parentId].subReplies.filter( el => el !== id);
                delete draft[action.payload.id];
            })
        case LIKE_REPLY :
            return produce(state, draft => {
                draft[action.payload.id].likeCnt ++;
            })
        case OPEN_SUB_REPLY :
            return produce(state, draft => {
                const {id} = action.payload;
                draft[id].subReplyOpened = true;
            })
        case OPEN_REPLY_INPUT :
            return produce(state, draft => {
                const {id} = action.payload;
                draft[id].subInputOpened = true;
            })
        default : return state;
    }
}

