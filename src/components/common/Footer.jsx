import { FaGripfire, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaUserShield, FaFileContract, FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

    return (
        <footer className="bg-slate-900 dark:bg-gray-950 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tighter flex items-center space-x-2 "><FaGripfire />Visualization Dashboard</h2>
                    <p className="text-sm mt-2 text-slate-400 dark:text-zinc-500">
                        Bringing insights to life with powerful visualizations.
                    </p>
                </div>

                <div className="flex space-x-6 text-center md:ml-4">
                    <a href="#home" className="flex items-center hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaHome className="mr-1" /> Home
                    </a>
                    <a href="#about" className="flex items-center hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaInfoCircle className="mr-1" /> About
                    </a>
                    <a href="#services" className="flex items-center hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaServicestack className="mr-1" /> Services
                    </a>
                    <a href="#contact" className="flex items-center hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaEnvelope className="mr-1" /> Contact
                    </a>
                </div>

                <div className="flex space-x-4 text-center">
                    <a href="https://facebook.com" className="hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://twitter.com" className="hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://linkedin.com" className="hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com" className="hover:text-slate-400 dark:hover:text-zinc-400">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>

            <div className="border-t border-slate-700 dark:border-zinc-700 mt-8 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-slate-400 dark:text-zinc-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Visualization Dashboard. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0 items-center">
                        <a href="/privacy-policy" className="flex items-center hover:text-slate-400 dark:hover:text-zinc-400">
                            <FaUserShield className="mr-1" /> Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="flex items-center hover:text-slate-400 dark:hover:text-zinc-400">
                            <FaFileContract className="mr-1" /> Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
