import { type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps){
    return (
        <input className='placeholder-cyan-950 text-sm border-0 h-9 rounded-md outline-none px-2 mb-3 bg-white w-full xl:text-base' {...props} />
    )
}