const Home = () => {

    const handleClick = (e) => {
        console.log('hello Yoshi',e);
    }

    const handleClickAgain = (name,e) => {
        console.log('hello ' + name + ' This is my event object >>>', e.target)
    }

    const handleClickAlert = () => {
        alert("Clicking button triggered the handleClickAlert event handler")
    }

    const handleClickWithParameter = (a) => {
        alert(a)
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Mario',e)}>Click me again</button>
            <button onClick={handleClickAlert}>Fire an Alert</button>
            <button onClick={() => handleClickWithParameter("My Parameter!")}>Fire an alert with Parameter</button>
        </div>
    );
}
 
export default Home;