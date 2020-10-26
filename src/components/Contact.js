import React, {useState} from 'react'
import ContactInfo from './ContactInfo'

const Contact = () => {
    const [keyword, setKeyword] = useState()
    const [contactData, setContactData] = useState([
        { name: '고길동', phone: '010-0000-0001' },
        { name: '둘리', phone: '010-0000-0002' },
        { name: '도우너', phone: '010-0000-0003' },
        { name: '마이콜', phone: '010-0000-0004' },
        { name: '둘리콜', phone: '010-0000-0005' },
        { name: '둘리콜', phone: '010-0000-0006' },
        { name: '둘리콜', phone: '010-0000-0007' }
    ])

    const onKeywordHandler = e => {
        setKeyword(e.currentTarget.value)
    }

    return (
        <div>
            <input name="keyword" placeholder="search" value={keyword} onChange={onKeywordHandler}></input>
            <div>
               {contactData.filter(data => data.name.toLowerCase().indexOf(keyword)>-1
               
            ).map((data, i)=>{
                    return (<ContactInfo name={data.name} phone={data.phone} key={i}/>)
                })}
            </div>
        </div>
    );
}

export default Contact