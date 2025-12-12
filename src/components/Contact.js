
const Contact =()=>{
    return(
        <div>
           <h1>Contact page is good  </h1>
           <form>
            <input 
            type="text"
            placeholder="name"
            className="border black mt-5 ml-5 p-1"/>


            <input 
            type="text"
            placeholder="password"
            className="border black mt-5 ml-5 p-1"/>

            <button className="ml-6 border p-1 rounded-md bg-gray-100">
                Submit
            </button>

            </form>
        </div>
    )
}

export default Contact;