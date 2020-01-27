const CHANGE_INPUT = 'reply/CHANGE_INPUT';

export const changeInput = (value) => ({type : CHANGE_INPUT, payload :{value}});

export default function reply(state = '', action){
    switch(action.type){
        case CHANGE_INPUT : return action.payload.value;
        default : return state;
    }
}