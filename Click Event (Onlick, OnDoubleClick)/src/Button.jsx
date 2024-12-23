
function Button(){

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         alert(`${name} clicked me ${count} time/s`);
    //     }else {
    //         alert(`${name} stop clicking me!`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return (
        <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Button