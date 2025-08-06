import { GithubLogoIcon } from '@phosphor-icons/react'

function Footer() {
    return (
        <div className="flex justify-center bg-gray-950
         text-white border-t border-gray-800">
         <div className="container flex flex-col
         items-center py-4">
            <p className='text-lg font-bold'>Icomida | &copy; 2025</p>
            <p className='text-sm text-gray-400'>Acesse nossas redes sociais:</p>
            <div className='flex gap-4 mt-4'>
                <a href="#" target="_blank" rel="noopener
                noreferrer"><GithubLogoIcon size={32} color="#fff" /></
         a>
            </div>
         </div>
        </div>
    )
}

export default Footer
