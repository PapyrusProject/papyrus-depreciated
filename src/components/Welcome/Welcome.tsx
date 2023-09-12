import Logo from './assets/logo.png'

export default function Welcome() {
    return(
        <div className='flex ml-[9rem] mr-[9rem]'>
            <div>
                <p className="text-secondary text-sm">Plan for growth</p>
                <p className="text-4xl pt-5">
                    Welcome to <span className="text-primary">Papyrus.</span>
                </p>
                <p className="text-2xl pt-8">Your Text Organization and Editing Platform.</p>
                <div className="w-1/2 pt-8 text-sm">
                    <p>
                        All-in-one Text Organization and Editing Platform. Streamline your workflow with intuitive note-taking, 
                        task management, and seamless document editing. Boost your productivity and creativity with Papyrus today.
                    </p>
                </div>
            </div>
            <img src={Logo}></img>
        </div>
    )
}