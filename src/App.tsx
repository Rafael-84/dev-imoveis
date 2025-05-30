
import { Formulario } from './components/formulario';
import { LuPhone, LuInstagram, LuTreePine } from 'react-icons/lu';
import { PiBuildingApartment } from "react-icons/pi";
import { MdLocalPolice } from "react-icons/md";

import houseImg from './assets/house.png';
import apartmentImg from './assets/apartment.png';

function App() {


  return (
    <main className='w-full bg-blue-800'>
      <section className='bg-black/60  bg-[url(./assets/backgroundMain.png)] bg-cover bg-blend-overlay  w-full h-10/12 flex items-center  flex-col '>

        <header className='w-full '>
          <nav className='flex flex-row items-center justify-between my-5 px-10'>
            <h3 className='bg-gradient-to-r from-blue-800  to-cyan-300 bg-clip-text text-transparent text-center lg:text-2xl font-bold 4k:text-4xl'>Dev<br /><span className='bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-bold lg:text-xl 4k:text-3xl'>Imóveis</span></h3>
            <div className='flex gap-8'>
              <a href={"https://wa.me/5511000000000"} rel='noopener noreferrer' target='blank'><LuPhone size={25} color='#FFF' /></a>
              <a href="https://www.instagram.com" rel='noopener noreferrer' target='blank'><LuInstagram size={25} color='#FFF' /></a>
            </div>
          </nav>
        </header>

        <div className='flex flex-col items-center justify-around w-full px-2 xl:px-40 mt-20 gap-20 pb-4 lg:mt-5 lg:gap-5  lg:flex-row lg:px-8 4k:max-w-[1500px]'>
          <div className='flex items-center justify-center flex-col px-5'>
            <h1 className=' text-white text-xl text-center xl:text-3xl lg:text-2xl lg:pt-4'>Seu próximo imóvel está aqui: <span className='font-bold'>encontre, negocie, realize!</span></h1>
            <p className='text-base pt-4 text-white italic text-center lg:text-lg lg:pb-4 xl:text-xl'>Entre em contato e descubra o imóvel perfeito para transformar sua vida!</p>
          </div>
          <Formulario />
        </div>
      </section>

      <section className='bg-white py-5 mt-5 lg:flex lg:flex-col lg:gap-10 lg:py-10'>
        <h3 className='px-2 py-3 text-center text-blue-900 font-bold 4k:text-2xl'>Fale conosco e deixe-nos ajudar você a encontrar o imóvel perfeito para o próximo capítulo da sua vida!</h3>

        <div className='bg-gradient-to-b from-yellow-200 to-orange-100  p-2 mx-2 rounded-sm lg:bg-gradient-to-r lg:from-yellow-100 lg:to-white lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:mx-20 xl:mx-60 4k:mx-[650px] 4k:gap-40' >
          <img src={apartmentImg} alt="Imagem de uma casa" className=' rounded-sm lg:w-80 lg:h-40 xl:w-2/4 xl:h-60 4k:w-2/5' />
          <div className='px-2'>
            <h4 className='px-2 py-3 text-blue-900 font-medium 4k:text-2xl'>Por que morar em um condominio?</h4>
            <ol className='list-disc list-inside px-2 flex flex-col gap-2'>
            <li className=' text-blue-950 4k:text-xl' >Segurança: Portaria 24 horas, câmeras e controles de acesso.</li>

            <li className=' text-blue-950 4k:text-xl' >Lazer completo: Piscina, academia, playground e áreas comuns.</li>

            <li className=' text-blue-950 4k:text-xl' >Convivência: Comunidade integrada e ambiente familiar.</li>

            <li className='  text-blue-950 4k:text-xl' >Manutenção facilitada: Estrutura coletiva bem cuidada.</li>
          </ol>
          </div>
          
        </div>

        <div className='bg-gradient-to-b from-yellow-200 to-orange-100  p-2 mx-2 rounded-sm mt-5 lg:bg-gradient-to-l lg:from-yellow-100 lg:to-white lg:flex lg:items-center lg:justify-center lg:flex-row-reverse lg:gap-8 lg:mx-20 xl:mx-60 4k:mx-[650px] 4k:gap-40' >
            <img src={houseImg} alt="Imagem de uma casa" className=' rounded-sm lg:w-80 lg:h-40 xl:w-2/4 xl:h-60 4k:w-2/5' />

          <div>
            <h4 className='px-2 py-3 text-blue-900 font-medium 4k:text-2xl'>Por que morar em uma casa?</h4>
          <ol className='list-disc list-inside px-2 flex flex-col gap-2'>
            <li className=' text-blue-950 4k:text-xl' >Mais privacidade: Espaço exclusivo sem vizinhos próximos.</li>

            <li className=' text-blue-950 4k:text-xl' >Liberdade: Possibilidade de personalizar e expandir o imóvel.</li>

            <li className=' text-blue-950 4k:text-xl' >Espaço maior: Quintal, jardim ou áreas para pets e lazer.</li>

            <li className=' text-blue-950 4k:text-xl' >Independência: Sem taxas de condomínio ou regras coletivas.</li>
          </ol>
          </div>
          
        </div>

      </section>

      <section>

        <div className='bg-[url(./assets/footerBackground.png)] bg-black/70 bg-blend-overlay bg-cover w-full  my-5 px-2 '>
          <h3 className='text-white py-4 text-center font-bold lg:pt-18 lg:text-base 4k:text-2xl'>Ajudamos você a encontrar:</h3>
          <div className='flex items-start justify-between flex-col gap-6 pb-3 lg:flex-row lg:pb-20 lg:pt-10 xl:items-center xl:px-40 4k:max-w-[1500px] 4k:w-full 4k:mx-auto 4k:gap-10'>
            <div className='flex flex-col w-full gap-2 text-center'>
              <div className='flex flex-row items-center justify-center w-full gap-2 lg:text-xl'> <p className='text-white font-medium lg:text-base 4k:text-2xl' >Conforto</p><LuTreePine size={24} color='#FFF'/> </div>
              <span className='text-white italic font-medium text-sm text-center  lg:text-base 4k:text-xl' >Seu novo lar com conforto e praticidade</span>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-2'>
              <div className='flex flex-row items-center justify-center w-full gap-2 lg:text-base'> <p className='text-white font-medium 4k:text-2xl' >Localização</p><PiBuildingApartment size={24} color='#FFF'/> </div>              
              <span className='text-white italic font-medium text-sm text-center  lg:text-base 4k:text-xl' >O imóvel certo, no bairro que você ama</span>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-2'>
              <div className='flex flex-row items-center justify-center w-full gap-2 lg:text-base'> <p className='text-white font-medium 4k:text-2xl' >Segurança</p><MdLocalPolice size={24} color='#FFF'/> </div>
              <span className='text-white italic font-medium text-sm text-center  lg:text-base 4k:text-xl' >Sua nova casa, segura como você sempre sonhou</span>
            </div>
          </div>        
        </div>
      </section>

      <footer className=' mt-5 w-full min-h-30'>
        <div className='bg-white px-2 flex items-center justify-between flex-col py-10 gap-2 '>
          <div className='flex flex-row justify-between items-center w-full lg:px-8 lg:justify-around'>
            <div className='text-center flex flex-col gap-2'>
              <p className='text-blue-950 font-bold lg:text-xl 4k:text-2xl'>Contato</p>
              <a href={"https://wa.me/5511000000000"} className='text-blue-950 font-medium lg:text-base 4k:text-xl'>(xx) xxxxx-xxxx </a>
            </div>
            <div className='text-center flex flex-col gap-2'>
              <p className='text-blue-950 font-bold lg:text-base 4k:text-2xl'>Nossas Redes</p>
              <div > <a href='https://www.instagram.com' className='flex gap-1 items-center justify-center lg:text-base'><LuInstagram/> <span className='text-blue-950 font-medium 4k:text-xl'> @devimoveis</span></a> </div>
            </div>
          </div>
          <h3 className='bg-gradient-to-r from-blue-800  to-cyan-300 bg-clip-text text-transparent text-center lg:text-2xl font-bold pb-3 mt-5 4k:text-4xl'>Dev<br /><span className='bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent font-bold lg:text-xl 4k:text-3xl '>Imóveis</span></h3>
        </div>
        <div className='bg-gray-900 flex items-center justify-center py-2'>
          <span className='text-white italic text-xs lg:text-base '>Todos os direitos reservados</span>
        </div>
      </footer>
    </main>

  )
}

export default App
