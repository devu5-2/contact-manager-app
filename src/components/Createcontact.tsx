import { useAppSelector } from '../app/hook';
import { selectContact } from '../app/contacts/contactslice';
import { Link } from 'react-router-dom';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const buttonStyle =
  "bg-black font-cursive hover:bg-royalblue hover:text-black w-full p-2 text-white outline";

const Createcontact = () => {
  const contacts = useAppSelector(selectContact);
  return (

    <div className='flex flex-col items-center p-4 text-center gap-4'>
      <Link to ="/contact-save">
        <button className={buttonStyle}>Create Contact</button>
      </Link>
      {contacts.length === 0 && (
        <div className='font-cursive outline m-2 p-1  '> 
          <p><CancelRoundedIcon/> No Contact Found. <br></br>Please add contact from Create Contact Button</p>
        </div>
      )}
      </div>
  )
}

export default Createcontact;