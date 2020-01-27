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

const replyAPI = {
    init(){ // Root 설정 =>  1 depth의 댓글을 관리.  
        let root = localStorageUtil.getItem(-1);
        if(!root){
            root = {id : -1, subReplies :[]}; // root
            localStorageUtil.setItem(-1, root);
        }
        return root;
    },
    delete(id){
        const reply = localStorageUtil.getItem(id);
        localStorage.removeItem(id);
        const parent = localStorageUtil.getItem(reply.parentId); 
        parent.subReplies = parent.subReplies.filter(item => item !== id); // 삭제된 자식 댓글의 정보 삭제
        localStorageUtil.setItem(parent.id, parent); 
    },
    add(reply){
        if(reply.parentId !== -1){ // 1 depth의 댓글인지 여부 확인
            const parent = localStorageUtil.getItem(reply.parentId); 
            parent.subReplies.push(reply.id); // 부모댓글의 자식으로 추가 
            localStorageUtil.setItem(parent.id, parent);
        } else {
            const parent = localStorageUtil.getItem(-1);
            parent.subReplies.push(reply.id); // root의 자식 댓글로 추가
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
        const rtn = subReplies.reduce( (prev, cur)=> {
            prev[cur] = localStorageUtil.getItem(cur)
            return prev;
        }, {});
        return rtn;
    },
}



export default replyAPI;

