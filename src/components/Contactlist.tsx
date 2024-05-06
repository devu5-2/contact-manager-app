import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hook';
import { deleteContact, editContact, selectContact } from '../app/contacts/contactslice';

// Define CSS styles for radio buttons
const radioStyle =
  "checked:bg-blue-500 indeterminate:bg-gray-300 default:ring-2 required:border-red-500 valid:border-green-500 invalid:border-red-500";

// Define CSS styles for buttons
const buttonStyle = "hover:bg-red outline m-2 p-1";
const Contactlist = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContact);
  
    // State variables to manage editing contact
  const[editingContactId, setEditingContactId]= useState<string 
  | null>(null);
  const [editedFname, setEditedFname] = useState("");
  const [editedLname, setEditedLname] = useState("");

    // Function to handle deleting a contact
  const handleDelete = (id:string)=>{
    dispatch(deleteContact(id));
  };

  //The handleEdit function sets the editing state and initializes the input fields with the contact's existing values.
  const handleEdit = (id:string)=>{
    const contact = contacts.find((contact)=>contact.id ===id);
    if(contact){
      setEditingContactId(id);
      setEditedFname(contact.fName);
      setEditedLname(contact.lName);
    }
  };
  const [formData, setFormData] = useState({
    fName:"",
    lName:"",
    isActive: true,
})

  // Function to handle radio button change
const handleRadioChange = (e:{target:{value:any}})=>{
  const {value} = e.target;
  setFormData((prevData)=>({...prevData, isActive:value==="active"}))
};

  //The handleSaveEdit function dispatches the editContact action with the edited data when the "Save" button is clicked.
const handleSaveEdit= () =>{
  if(editingContactId){
    dispatch(
      editContact({
        id: editingContactId,
        fName: editedFname,
        lName: editedLname,
        isActive: formData.isActive ,
      })
    );
    setEditingContactId(null);
    setEditedFname("");
    setEditedLname("");
  }
};
  return (
    <div className="flex flex-wrap mx-8 gap-4 justify-center">
    {contacts.map((contact) => (
      <div className="font-cursive" key={contact.id}>
        {editingContactId === contact.id ? (
          <div className="flex flex-col gap-4 p-7 bg-cadetblue">
            <label htmlFor="fName">
              First Name:
              <input
                id="fName"
                type="text"
                className="px-2 ml-2"
                placeholder="Enter your first name"
                value={editedFname}
                onChange={(e) => setEditedFname(e.target.value)}
              />
            </label>

            <label htmlFor="lName">
              Last Name: <input
                id="lName"
                type="text"
                className="px-2 ml-2"
                value={editedLname}
                placeholder="Enter your last name"
                onChange={(e) => setEditedLname(e.target.value)}
              />
            </label>
            <div className="flex gap-3 justify-evenly ">
            <label>Status:</label>

            <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.isActive}
              onChange={handleRadioChange}
              className={radioStyle}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={!formData.isActive}
              onChange={handleRadioChange}
              className={radioStyle}
            />
            Inactive
          </label>
            </div>
         

            <button
              className="bg-black hover:bg-aliceblue hover:text-black w-full text-white"
              onClick={handleSaveEdit}
            >
              Save Editted Contact
            </button>
          </div>
        ) : (
          <div className="p-4 bg-plum">
            <div className="flex flex-col items-center bg-aliceblue p-4">
              <h4 className="text-lg font-semibold capitalize">{`${contact.fName} ${contact.lName}`}</h4>
              <p className="uppercase">
                {contact.isActive ? "Active" : "Inactive"}
              </p>

              <div className="flex justify-center">
                <button
                  className={buttonStyle}
                  onClick={() => handleEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className={buttonStyle}
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);
};export default Contactlist;