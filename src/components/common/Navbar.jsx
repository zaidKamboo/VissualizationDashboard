
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectDarkmode } from '../../store/selectors';
import { toggleDarkMode } from '../../store/slices/darkmodeSlice';

const Navbar = () => {
    const darkmode = useSelector(makeSelectDarkmode);
    const dispatch = useDispatch();
    console.log(darkmode)
    const handletoggle = () => {
        console.log("INSIDE");
        dispatch(toggleDarkMode())
    }
    return (
        <nav className="bg-slate-900 dark:bg-gray-950 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-xl font-bold">MyApp</div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-slate-400 dark:hover:text-zinc-400">Home</a>
                    <a href="#about" className="hover:text-slate-400 dark:hover:text-zinc-400">About</a>
                    <a href="#services" className="hover:text-slate-400 dark:hover:text-zinc-400">Services</a>
                    <a href="#contact" className="hover:text-slate-400 dark:hover:text-zinc-400">Contact</a>
                </div>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={handletoggle}
                    className="bg-slate-600 dark:bg-zinc-700 p-2 rounded-full hover:bg-slate-500 dark:hover:bg-zinc-600 transition duration-300"
                >
                    {darkmode ? '🌞' : '🌜'}
                </button>

                {/* Mobile Menu
                <div className="md:hidden">
                    <button
                        onClick={handletoggle}
                        className="text-2xl bg-slate-600 dark:bg-zinc-700 p-2 rounded-full hover:bg-slate-500 dark:hover:bg-zinc-600 transition duration-300"
                    >
                        {darkmode ? '🌞' : '🌜'}
                    </button>
                </div> */}
            </div>

            {/* Mobile Links */}
            <div className="md:hidden flex flex-col space-y-4 p-4 bg-slate-700 dark:bg-zinc-700 text-center text-white">
                <a href="#home" className="hover:text-slate-400 dark:hover:text-zinc-400">Home</a>
                <a href="#about" className="hover:text-slate-400 dark:hover:text-zinc-400">About</a>
                <a href="#services" className="hover:text-slate-400 dark:hover:text-zinc-400">Services</a>
                <a href="#contact" className="hover:text-slate-400 dark:hover:text-zinc-400">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
