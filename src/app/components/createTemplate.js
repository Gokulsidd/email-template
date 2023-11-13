// components/CreateTemplate.js
import { useState , useEffect } from 'react';

const CreateTemplate = ({ onSubmit }) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTemplateSubmit({ subject, body });
    setSubject('');
    setBody('');
  };

  return (
    <form className='w-[70%] h-full bg-white shadow-lg m-auto flex-col space-y-10 p-8' onSubmit={handleSubmit}>
      <div className='space-y-4'>
      <label>Subject:</label>
      <input className='py-5 px-4 w-full outline-blue-500 border-2 border-gray-400 rounded-md' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className='space-y-4'>
      <label>Description:</label>
      <textarea className='py-5 px-4 w-full h-[300px] outline-blue-500 border-2 border-gray-400 rounded-md' value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button className='w-full p-5 bg-[#0065ff] text-slate-50 font-bold text-[20px] hover:bg-[#0052CC] rounded-md' type="submit">Create Template</button>
    </form>
  );
};

export default CreateTemplate;
