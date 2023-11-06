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
            token: 'ajsdkjahjksd'
        }
    })
}