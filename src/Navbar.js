import React from 'react';
import './App.css';
import Heading from './Heading';
import { useState } from 'react';
import {useForm} from 'react-hook-form';

const Navbar = () => {
    const [content, setContent] = useState(true);
    const [modal, setModal] = useState(false);
    const [links, setLinks] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const scroll = () => {
        window.scrollTo({
            top: 2000,
            behavior: "smooth",
        })
    }
    const updateContent = (bool) => {
        setContent(bool)
    }
    const updateModal = (bool) => {
        setModal(bool)
    }
    const onsubmit = (formdata)=>{
        console.log(formdata)
        setLinks([...links,formdata])
        console.log(links)
    }

    return (
        <><div className="navbar">
            <Heading />
            <ul>
                <li><a href="#" onClick={() => updateContent(true)}>My Learning</a></li>
                <li><a href="#" onClick={scroll} >About</a></li>
                <li><a href="#" onClick={() => updateContent(false)}>FAQs</a></li>
            </ul>
        </div>

            {content ?
                <center>
                    <div className='learnings'>
                        <h2>My Learnings</h2>
                        <div className='learning-content'>                            
                                {links.map((item)=>{
                                    return(
                                        <div className="content-box"><img src={item.link} alt="alternate" /></div>
                                    )
                                })}
                            <div className='content-box'>
                                <p>+</p>
                                <button onClick={() => updateModal(true)}>Add New Course</button>
                            </div>
                        </div>
                    </div>
                    {modal ? <div className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Add New Course</h2>
                                <button onClick={() => updateModal(false)}>x</button>
                            </div>
                            <hr style={{ width: '320px',margin:'20px 0px' }} />
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <div className="modal-body">
                                    <input type="text" placeholder='Paste playlist link here...' {...register("link")} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit">Add Course</button>
                                </div>
                            </form>
                        </div>
                    </div> : <div></div>}
                </center> :
                <div className='learnings'>
                    <center><h2>FAQs (Frequently Asked Questions) :-</h2></center>
                    <div className='faq-learning-content'>
                        <ol>
                            <b><li>How can I add course ?</li></b>
                            <p>Just paste the link of the playlist that you want to add as a course.
                                In playlist link we are intrested in playlist ID which is available
                                in playlist URL under 'list' attribute.
                                Example :- https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi</p>
                            <b><li>How can I add notes ?</li></b>
                            <p>When you play a particular video, you will see a notes section there.
                                Just write your notes there and click 'Add Note'. Your note will be
                                saved and shown to you in that section itself with timestamp.</p>
                        </ol>
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;