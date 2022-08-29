// export const Button1 = () => {
//     return <button className="bg-blue-500 py-5 px-2 rounded-full">Add to Cart</button>;
// };

// export const Button2 = () => {
//     return <button className="bg-green-200">Login</button>;
// };

// export const Button3 = () => {
//     return <button className="bg-yellow-400 text-white">Register</button>;
// };

// // export default Button1;



function Button({label}){
    return <button className="border-2 border-red-500 py-2 px-5 rounded-full hover:bg-orange-500 hover:text-white">{label}</button>
}


export default Button;

