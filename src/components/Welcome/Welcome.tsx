import Btn from '../Buttons/Btn'
import { BiSolidNotepad } from "react-icons/bi";
import Logo from '../../assets/logo.svg'

export default function Welcome() {
    return (
        <div className='w-[90%] flex flex-col justify-center md:flex-row mx-auto '>
            <div className='w-full md:w-[75%] lg:w-[65%] xl:w-[55%] mt-20'>
                <p className="text-secondary text-sm">Plan for growth</p>
                <h1 className="text-4xl pt-5 font-bold">
                    Welcome to <span className="text-primary">Papyrus.</span>
                </h1>
                <h2 className="text-2xl pt-8 font-semibold">Your Text Organization and Editing Platform.</h2>
                <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] pt-8 text-sm mb-8">
                    <p>
                        All-in-one Text Organization and Editing Platform. Streamline your workflow with intuitive note-taking,
                        task management, and seamless document editing. Boost your productivity and creativity with Papyrus today.
                    </p>
                </div>
                <Btn
                    name='My Note'
                    icon={<BiSolidNotepad className=' mr-1' />}
                    bgColor="bg-white text-primary px-10"
                    hover="hover:bg-primary hover:text-white"
                />
            </div>
            <img className='w-[40%] h-[90%] hidden md:flex' src={Logo}></img>
        </div>
    )
}