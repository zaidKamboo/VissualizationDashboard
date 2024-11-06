import { useDispatch, useSelector } from 'react-redux';
import { makeSelectDarkmode } from '../../store/selectors';
import { resetDarkmode, setDarkmode } from '../../store/slices/darkmodeSlice';
import { FaGripfire, FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const darkmode = useSelector(makeSelectDarkmode);
    const dispatch = useDispatch();

    const handletoggle = () => { !darkmode ? dispatch(setDarkmode()) : dispatch(resetDarkmode()) };

    return (
        <nav className="bg-slate-900 dark:bg-gray-950 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl flex items-center space-x-2 tracking-tighter font-bold">
                    <FaGripfire />
                    Visualization Dashboard</div>
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#home" className="flex items-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaHome /> <span>Home</span>
                    </a>
                    <a href="#about" className="flex items-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaInfoCircle /> <span>About</span>
                    </a>
                    <a href="#services" className="flex items-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaServicestack /> <span>Services</span>
                    </a>
                    <a href="#contact" className="flex items-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaEnvelope /> <span>Contact</span>
                    </a>
                </div>

                <button
                    onClick={handletoggle}
                    className="bg-slate-600 dark:bg-zinc-700 p-2 rounded-full hover:bg-slate-500 dark:hover:bg-zinc-600 transition duration-300"
                >
                    {darkmode ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            <div className="md:hidden flex flex-col space-y-4 p-4 bg-slate-700 dark:bg-zinc-700 text-center text-white">
                <a href="#home" className="flex items-center justify-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                    <FaHome /> <span>Home</span>
                </a>
                <a href="#about" className="flex items-center justify-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                    <FaInfoCircle /> <span>About</span>
                </a>
                <a href="#services" className="flex items-center justify-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                    <FaServicestack /> <span>Services</span>
                </a>
                <a href="#contact" className="flex items-center justify-center space-x-2 hover:text-slate-400 dark:hover:text-zinc-400">
                    <FaEnvelope /> <span>Contact</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
