import Contactlist from '../components/Contactlist'
import Createcontact from '../components/Createcontact'
const Contactpage = () => {
  return (
    <div className='w-full h-full'>
      <Createcontact/>
      <Contactlist />
    </div>
  )
}

export default Contactpage