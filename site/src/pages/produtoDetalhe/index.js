import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/rodape.js';
import Detalhe from '../../components/detalhe/index.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarPorId } from '../../api/produtoApi.js'


export default function ProdutoDetalhe(){

    const [produto, setProduto] = useState({});

    const { idParam } =useParams();



    useEffect(() => {
        carregarProduto();
    }, []);

    async function carregarProduto(){
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);
    }



    return(
    <div className='paginaProdutoDetalhe'>


        <div>
            <Cabecalho/>
        </div>


        <div>
            <Detalhe produto={produto} />
        </div>


        <div>
            <Rodape/>
        </div>
    </div>
   )
}