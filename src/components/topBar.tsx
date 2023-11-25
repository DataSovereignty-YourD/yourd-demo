import Logo from '../assets/img/YourD-Logo-high.png';

export default function TopBar() {
    return(
        <div className="w-full h-14 bg-white px-14 ">
           <div className='flex items-center'>
             <img src={Logo} alt='logo' className='w-16 '/>
             
           </div>
        </div>
    );
}