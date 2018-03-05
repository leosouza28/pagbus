import {AsyncStorage} from 'react-native';

const Sessao = {
    async iniciar(token, email){
        let dados = {
            token: token,
            email: email
        }
        try {
            await AsyncStorage.setItem('login', JSON.stringify(dados))
        } catch (error) {
            console.log(error)
        }
        
        
    },
    verificar(){
        return new Promise((success,reject)=>{
            AsyncStorage.getItem('login', (err, res)=>{
                if(res!==null){
                    success(res)
                } else {
                    reject(err)
                }
            })
        })
    },
    async finalizar(){
        try {
            await AsyncStorage.removeItem('login')
        } catch (error) {
            console.log('Falha')
        }
    }
}

module.exports = Sessao;