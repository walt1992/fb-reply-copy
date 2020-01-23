export const replyAPI = {
    delete(id){
        const reply = localStorageUtil.getItem(id);
        if (reply.subReplies.length === 0){
            localStorage.removeItem(id);
            if(reply.parentId > -1){
                const parent = localStorageUtil.getItem(reply.parentId);
                parent.subReplies = parent.subReplies.filter(item => item.id !== id);
                localStorageUtil.setItem(parent.id, parent)
            }
        } else {
            reply.deleted = true;
            localStorageUtil.setItem(reply.id, reply);
        }
    },
    add(comment, parentId){

        const reply = {
            id : null,
            parentId : parentId || -1,
            userName : '',
            comment : comment,
            likeCnt : 0,
            subReplies : [],
            deleted : false,
            subOpened : false,
            createdAt : new Date(),
        };

        if(reply.parentId > -1){
            const parent = localStorageUtil.getItem(reply.parentId);
            parent.subReplies.push(reply.id);
            localStorageUtil.setItem(parent.id, parent);
        } else {
            let parent = localStorageUtil.getItem(-1);
            if(!parent){
                parent = {id : -1, subReplies :[]}; // root
            }
            parent.subReplies.push(reply.id);
            localStorageUtil.setItem(-1, parent);
        }
        localStorageUtil.setItem(reply.id, reply);
    },
    like(id){
        const reply = localStorageUtil.getItem(id);
        reply.likeCnt++;
        localStorageUtil.setItem(id, reply);
    },
    get(parentId){
        const {subReplies} = localStorageUtil.getItem(parentId);
        return subReplies.map(id => localStorageUtil.getItem(id));
    }
}


const localStorageUtil = {
    getItem(id) {
        return JSON.parse(localStorage.getItem(id));
    },
    setItem(key, value){
        if(typeof value === 'object'){
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }
}