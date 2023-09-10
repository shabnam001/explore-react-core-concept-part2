export default function Friend({friend}){
    const{name, email, id} = friend
    return(
        <div className='box'>
            <h4>Name:{name}</h4>
            <h4>Email:{email}</h4>
            <h4>ID:{id}</h4>
        </div>
    )
}