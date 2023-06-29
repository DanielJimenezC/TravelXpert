import { BiMap } from 'react-icons/bi';

const Popular = ({altImage, country, image, title}) => {
  return (
    <article className='popular_card'>
      <div className='popular_image'>
        <img src={image} alt={altImage} className='popular_img' />
        <div className='popular_shadow'></div>
      </div>
      <h2 className='popular_title'>{title}</h2>
      <div className='popular_location'>
        <BiMap/>
        <span>{country}</span>
      </div>
    </article>
  )
}

export default Popular