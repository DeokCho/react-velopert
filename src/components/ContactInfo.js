import React from 'react'

const ContactInfo = ({name, phone}) => {
    return (
        <div>
            <div>{name} : {phone}</div>
        </div>
        
    )
}
  
export default ContactInfo