

export function MessageList({messages}) {
  return (
    <>
      <h1>MessageList</h1>
      {messages.map((item, index) => (
        <li key={index+1}>{item.text}</li>
      ))}
    </>
  );
}
