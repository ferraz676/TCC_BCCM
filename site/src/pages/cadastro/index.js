import './index.scss';


export default function Cadastrotcc(){

return(
<div className='tudo'>
    <div className='cabeçalho'>

        <p>Garantimos que você fez a melhor escolha!</p>
        <img src='/assets/images/logobccm.png'/>
        <p>Seja parte da nossa Família!</p>

    </div>



    <div className='conteudo'>
        <div className='cds'>
           <div>

            <h1>Cadastro</h1>

            </div>

            <div className='prf'>
                <p>Dados pessoais</p>
            </div>

            <div className='bt1'>
           <input type='text' placeholder='E-mail'/>
            </div>

           <div className='mrc'  >
           <input type="checkbox" name="item1"  />
           <p>Quero receber promoção da BCCM Supplements</p>
           </div>

           <div className='bt2'>
           <input type='text' placeholder='CPF'/>
            </div>

            <div className='nm'>
           <input type='text' placeholder='Nome Completo'/>
            </div>

            <div className='dt'>
           <input type='text' placeholder='Data de Nascimento'/>
            </div>

            <div className='tl'>
           <input type='text' placeholder='Telefone Celular'/>
           <input type='text' placeholder='Telefone fixo' className='fx'/>

            </div>

            <div className='wt'  >
           <input type="checkbox" name="item1"  />
           <p>Quero receber promoção via whatsapp</p>
           </div>

            
           <div className='pd'  >
           <input type="checkbox" name="item1"  />
           <p>Quero atualizão de pedido via whatsapp</p>
           </div>

           
           <div className='sa'>
           <input type='text' placeholder='Senha*(6 ou mais caracteres)'/>
            </div>
           
            <div >
                <button className='botao'>Cadastro</button>
            </div>

            
        </div>


    </div>


</div>


)

}