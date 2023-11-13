const TemplateList = ({ templates }) => {
    return (
      <div>
        <h2>Email Templates</h2>
        <ul>
          {templates.map((template) => (
            <li key={template._id}>
              <strong>{template.subject}</strong>
              <p>{template.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TemplateList;
  