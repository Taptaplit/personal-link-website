import React, {useEffect} from 'react'
import { baseUrl } from './index';


export function getServerSideProps(context) {
    return {
        props: {params: context.params}
    };
}


function LinkId({ params }) {
    useEffect(() => {
        fetch(`${baseUrl}/link/${params.id}`).then((res) => {
            res.json().then((res) => {
                window.location.replace(`${res.result[0].url}`)
            })
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default LinkId
