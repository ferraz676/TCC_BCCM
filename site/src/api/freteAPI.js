export async function calcularFrete(preco, quantidade, cep) {
    let info = {
            "cepOrigem": "04890-400",
            "cepDestino": cep,
            "vlrMerc": preco,
            "pesoMerc": 3,
            "produtos" : [
              {
                "peso": 5,
                "altura": 10,
                "largura": 20,
                "comprimento":10,
                "valor": preco,
                "quantidade": quantidade
              }
            ]
    }
    
    axios.post('https://corsproxy.io/?https://portal.kangu.com.br/tms/transporte/simular', info, {
        headers: {
            token: 'fd78e9ed624b1d58f5c0b2c1b6baf8b3da64b41cdafaf9ed1b4e478c0a0085c6'
        }
    })
}