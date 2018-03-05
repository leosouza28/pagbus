const Con = {
    servidor: 'http://localhost:3003',
    post(rota, dados){
        return new Promise((success, reject)=>{
            fetch(`${this.servidor}${rota}`, {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(dados)
            })
            .then(data=>{
                let res = data._bodyInit
                success(JSON.parse(res));
            })
            .catch(err=>{
                reject(err);
            })
        })
    },
    get(dados){
        
    },
    put(dados){

    },
    delete(dados){

    }
}
module.exports = Con;