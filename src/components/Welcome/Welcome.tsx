import Btn from '../Buttons/Btn'
import { BiSolidNotepad } from "react-icons/bi";
import Logo from '../../assets/logo.svg'

export default function Welcome() {
    return (
        <div className=' flex flex-col items-center justify-center md:flex-row mx-auto'>
            <div className='w-1/2  flex flex-col items-center justify-center '>
                <div className='w-2/3'>
                    <p className="text-secondary text-sm">Plan for growth</p>
                    <h1 className="text-4xl pt-5 font-bold">
                        Welcome to <span className="text-primary">Papyrus.</span>
                    </h1>
                    <h2 className="text-2xl pt-8 font-semibold">Your Text Organization and Editing Platform.</h2>
                    <p className="pt-8 text-sm mb-8">
                        All-in-one Text Organization and Editing Platform. Streamline your workflow with intuitive note-taking,
                        task management, and seamless document editing. Boost your productivity and creativity with Papyrus today.
                    </p>
                    <Btn
                        name='My Note'
                        icon={<BiSolidNotepad />}
                        bgColor="bg-white text-primary"
                        hover="hover:bg-primary hover:text-white"
                    />
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img className=' hidden md:flex' src={Logo}></img>
            </div>
        </div>
    )
}