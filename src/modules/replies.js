
import produce from 'immer';
import replyAPI from 'api/replyAPI';

const ADD_REPLY = 'replies/ADD_REPLY';
const GET_REPLIES = 'replies/GET_REPLIES';
const INIT_ROOT = 'replies/INIT_ROOT';
const OPEN_SUB_REPLY = 'replies/OPEN_SUB_REPLY';
const OPEN_REPLY_INPUT = 'replies/OPEN_REPLY_INPUT';
const DELETE_REPLY = 'replies/DELETE_REPLY';
const LIKE_REPLY = 'replies/LIKE_REPLY';
export const getReplies = (parentId) => {
    const replies = replyAPI.get(parentId);
    return { type : GET_REPLIES, payload :{replies}};
}

export const initRoot = () => {
    const root = replyAPI.init();
    return {type : INIT_ROOT, payload : { [-1] : root}};
}

export const addReply = (value, parentId) => {
    const reply = {
        id : `reply_${new Date().getTime()}`,
        parentId : parentId,
        isSubReply : parentId === -1 ? false : true,
        userName : 'UserName',
        comment : value,
        likeCnt : 0,
        subReplies : [],
        subReplyOpened : false,
        subInputOpened : false,
        createdAt : new Date(),
    };

    replyAPI.add(reply);
    return {type : ADD_REPLY, payload : {reply}};
}

export const deleteReply = (id) => {
    replyAPI.delete(id);
    return {type : DELETE_REPLY, payload : {id}};
}

export const likeReply = (id) => {
    replyAPI.like(id);
    return {type : LIKE_REPLY, payload : {id}};
}

export const openSubReply = (id) => ({type : OPEN_SUB_REPLY, payload : {id}});
export const openReplyInput = (id) => ({type : OPEN_REPLY_INPUT, payload :{id}});

export default function replies(state = {}, action){
    switch(action.type){
        case INIT_ROOT : return action.payload;
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
                draft[-1].subReplies = draft[-1].subReplies.filter( id => id !== action.payload.id);
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

