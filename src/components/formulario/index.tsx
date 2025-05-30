import { useState, type FormEvent } from 'react';
import { send } from '@emailjs/browser';
import { Input } from "../input";
import { toast } from 'react-hot-toast';



export function Formulario(){

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    function enviarForm(e: FormEvent){
        e.preventDefault();

        if( name === '' || email === '' || phone === '' || message === '' ){
            toast.error("Preencha todos os campos!");
            return;
        }

        const service = "service_hzqul9m";
        const template = "template_ckevu58";
        const templateParams ={
            from_name: name,
            email: email,
            phone: phone,
            message: message,
        };

        const kp = "CLlg8dU3IwOLrd7PV";

        send(service, template, templateParams, kp)
        .then(() => {
            toast.success("Mensagem enviada com sucesso!");
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        })
        .catch(() => {
            toast.error("Ops! deu algum erro, tente novamente mais tarde ");
        })
    }

    return(
        <main className="flex-1/3 flex-1 relative -top-4 xl:top-10 p-2 ">
            <div className="bg-amber-200 p-2 rounded-md w-full h-auto flex items-center justify-center flex-col drop-shadow-yellow-200/70 drop-shadow-[10px_8px_4px] lg:mb-14 xl:p-5 xl:max-w-3xl">
                <form onSubmit={enviarForm} className="w-auto flex items-start justify-center flex-col pt-2 lg:items-center">
                    <h4 className="text-sm pb-5 text-center text-sky-950  font-medium xl:font-base 4k:text-xl">Preencha o formulário que entraremos em contato</h4>
                    <Input type='string' value={name} onChange={ (e) => setName(e.target.value) } placeholder="Nome..." required />
                    <Input type='email' placeholder="Email..." value={email} onChange={ (e) => setEmail(e.target.value) } required />
                    <Input type='string' placeholder="Telefone..." value={phone} onChange={ (e) => setPhone(e.target.value)} required />
                    <textarea  className="placeholder-cyan-950 outline-none text-sm bg-white w-full h-30 rounded-md px-2 py-1 xl:text-base" placeholder="Digite a sua mensagem..." value={message} onChange={ (e) => setMessage(e.target.value) } required></textarea>
                    
                    <button type='submit' className=" text-sm bg-green-600 border-none px-5 py-3 mt-2 w-full rounded-md text-white font-medium hover:bg-green-500 transition-colors cursor-pointer xl:text-base 4k:text-xl">Me envie mais informações</button>
                
                </form>
            </div>
        </main>
    )
}

