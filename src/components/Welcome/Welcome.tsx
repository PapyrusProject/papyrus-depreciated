import Btn from '../Buttons/Btn'
import { BiSolidNotepad } from "react-icons/bi";
import Logo from '../../assets/logo.png'

export default function Welcome() {
    return (
        <div className='flex flex-col md:flex-row mx-3 sm:mx-15 lg:mx-36 mt-20'>
            <div className='w-full'>
                <p className="text-secondary text-sm">Plan for growth</p>
                <h1 className="text-4xl pt-5 font-bold">
                    Welcome to <span className="text-primary">Papyrus.</span>
                </h1>
                <h2 className="text-2xl pt-8 font-semibold">Your Text Organization and Editing Platform.</h2>
                <div className="w-1/2 pt-8 text-sm mb-8">
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
            <img className='w-full ssm:w-[50%]' src={Logo}></img>
        </div>
    )
}