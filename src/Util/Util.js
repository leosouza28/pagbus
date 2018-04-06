import { Alert } from 'react-native';
import Axios from 'axios';

const Util = {
    alertaSimples(titulo, msg) {
        Alert.alert(
            titulo,
            msg,
            [
                { text: 'Entendi!', onPress: () => console.log('Entendido!') }
            ],
            { cancelable: false }
        )
    },
    buscaCep(cep) {
        return new Promise((success, reject) => {
            let res = cep.replace('-', '')
            let vBR = res.length;
            const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${res}&sensor=true&key=AIzaSyCV4nqwrTbI6RKhIZuy3nOsqRLF1dNwKbI`
            Axios.get(URL)
                .then(data => {
                    let i = data.data.results[0].address_components;
                    if (i.length == 6) {
                        let info = {
                            endereco: i[1].long_name,
                            bairro: i[2].long_name,
                            cidade: i[3].long_name,
                            estado: i[4].short_name,
                        }
                        success(info);
                    }
                    else if (i.length == 5 && vBR == 8) {
                        let viaCep = `http://viacep.com.br/ws/${res}/json/`
                        Axios.get(viaCep)
                            .then(data => {
                                let r = data.data;
                                let info = {
                                    endereco: r.logradouro,
                                    bairro: r.bairro,
                                    cidade: r.localidade,
                                    estado: r.uf
                                }
                                success(info);
                            }).catch(err => reject(err))
                    } else if (i.length == 4) {
                        let info = {
                            endereco: i[1].long_name,
                            cidade: i[2].long_name,
                            estado: i[3].long_name,
                        }
                        success(info);
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}

module.exports = Util;