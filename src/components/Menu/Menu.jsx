import './menu.css'

export const Menu = ({id}) => {
  return (
    <>
      <div className="menu-container" id={id}>
        <div className='d-flex justify-content-start mt-4 mb-5'>
        <img src="/assets/menu/1spa.png" alt='Menú en Español' id='menu-img' width='30%' />
        </div>
        <div className='d-flex justify-content-evenly menu-container'>
        <img src="/assets/menu/2spa.png" alt='Menú en Español' id='menu-img' width='40%'/>
        <hr className='d-none'/>
        <img src="/assets/menu/3spa.png" alt='Menú en Español' id='menu-img' width='40%' />
        </div>
      </div>
    </>
  )
}
