import { useState } from "react"

const Render_conditional = ()=> {

    const [name] = useState('joao');

    return(
        <div>
            {name === 'joao' ? (<p>validando if</p>) : (<p>validando else</p>)}
        </div>
    )

}

export default Render_conditional