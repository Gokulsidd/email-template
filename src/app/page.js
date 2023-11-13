"use client" ;
import { useState, useEffect } from 'react';
import CreateTemplate from './components/createTemplate';
import TemplateList from './components/templateList';


const Home = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // fetch('/api/emailTemplates')
    //   .then((res) => res.json())
    //   .then((data) => setTemplates(data.data))
    //   .catch((error) => console.error('Error fetching templates:', error));
  }, []);

  const handleCreateTemplate = (newTemplate) => {
    fetch('/api/emailTemplates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTemplate),
    })
      .then((res) => res.json())
      .then((data) => setTemplates([...templates, data.data]))
      .catch((error) => console.error('Error creating template:', error));
  };

  return (
    <div className='bg-attlasion h-screen w-full' >
      <CreateTemplate onTemplateSubmit={handleCreateTemplate}/>
      {/* <TemplateList templates={templates} /> */}
    </div>
  );
};

export default Home;
